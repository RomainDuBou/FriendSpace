import "./MesPosts.css";
import Header from '../../Composants/Header/Header';
import Onlinefriends from '../../Composants/Onlinefriends/Onlinefriends';
import Nav from '../../Composants/Nav/Nav';
import { useState, useEffect } from "react";

function MesPosts() {
    const [content, setContent] = useState("");
    const [titlePost, setTitlePost] = useState("");
    const [postedMessages, setPostedMessages] = useState(() => {
        const savedMessages = localStorage.getItem("postedMessages");
        return savedMessages ? JSON.parse(savedMessages) : [];
    });

    let token = localStorage.getItem("token");

    useEffect(() => {
        localStorage.setItem("postedMessages", JSON.stringify(postedMessages));
    }, [postedMessages]);

    const poster = async (e) => {
        e.preventDefault();

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "bearer " + token,
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
            const postedMessage = { title: titlePost, content: content };
            setPostedMessages([...postedMessages, postedMessage]);
            setTitlePost("");
            setContent("");
        } else {
            console.error("Failed to post message");
        }
    }

    return (
        <div>
            <Header />
            <Onlinefriends />
            <Nav />

            <div className="postingContainer" >
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
                        <div className="singleMessage" key={index}>
                            <h2>{message.title}</h2>
                            <p>{message.content}</p>
                        </div>
                    ))}
                </div>

                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

     
        </div>
    );
}

export default MesPosts;
