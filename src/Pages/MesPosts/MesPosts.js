import React, { useState, useEffect } from "react";
import "./MesPosts.css";
import Header from "../../Component/Header/Header";
import Onlinefriends from "../../Component/Onlinefriends/Onlinefriends";
import Nav from "../../Component/Nav/Nav";

function MesPosts() {
    const [content, setContent] = useState("");
    const [titlePost, setTitlePost] = useState("");
    const [postedMessages, setPostedMessages] = useState(() => {
        const savedMessages = localStorage.getItem("postedMessages");
        return savedMessages ? JSON.parse(savedMessages) : [];
    });

    const handleLike = (index) => {
        const updatedMessages = postedMessages.map((message, i) => {
            if (i === index) {
                return { ...message, likes: (message.likes || 0) + 1 };
            }
            return message;
        });
        setPostedMessages(updatedMessages);
    };

    const handleComment = (index, comment) => {
        const updatedMessages = [...postedMessages];
        if (!updatedMessages[index].comments) {
            updatedMessages[index].comments = [];
        }
        updatedMessages[index].comments.push(comment);
        setPostedMessages(updatedMessages);
    };

    const poster = async (e) => {
        e.preventDefault();

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify({
                title: titlePost,
                content: content
            })
        };

        const response = await fetch(
            "https://social-network-api.osc-fr1.scalingo.io/friendspace99/post",
            options
        );

        if (response.ok) {
            const postedMessage = { title: titlePost, content: content, likes: 0 };
            setPostedMessages([...postedMessages, postedMessage]);
            setTitlePost("");
            setContent("");
        } else {
            console.error("Failed to post message");
        }
    };

    useEffect(() => {
        localStorage.setItem("postedMessages", JSON.stringify(postedMessages));
    }, [postedMessages]);

    return (
        <div>
            <Header />
            <Onlinefriends />
            <Nav />

            <div className="postingContainer">
                <h1 className="title01">Quoi de neuf ?</h1>
                <input
                    id="titlePost"
                    type="text"
                    value={titlePost}
                    onChange={(e) => setTitlePost(e.target.value)}
                    placeholder="Titre du post"
                />
                <input
                    id="contenupost"
                    type="text"
                    className="contentInput"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Contenu du post"
                />
                <button onClick={poster}>Publier</button>
            </div>

            <div className="mespostsContainer">
                <h1 className="title02"><u>Mes Posts : </u></h1>
                <div className="postedMessages">
                    {postedMessages.map((message, index) => (
                        <div className="post" key={index}>
                            <img className="imgProfil" src="https://64.media.tumblr.com/b6255980579d5e0ff4e4ffcb85163954/02897c311d24e7d0-6b/s640x960/6bac30ac2a61704580faacc26881566e931ff206.jpg"/>
                            <p>Atef Gaieb</p>
                            <h2>{message.title}</h2>
                            <p>{message.content}</p>
                            <button onClick={() => handleLike(index)}>Like</button>
                            <input type="text" placeholder="Ajouter un commentaire" />
                            <button onClick={() => handleComment(index, )}>Commenter</button>
                            {message.comments && message.comments.map((comment, idx) => (
                                <p key={idx}>{comment}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default MesPosts;