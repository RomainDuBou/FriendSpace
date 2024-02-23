import "./MesPosts.css";
import Header from '../../Composants/Header/Header';
import Onlinefriends from '../../Composants/Onlinefriends/Onlinefriends';
import Nav from '../../Composants/Nav/Nav';
import { useState, useEffect } from "react";

function MesPosts() {
    const [content, setContent] = useState("");
    const [titlePost, setTitlePost] = useState("");
    const [postedMessages, setPostedMessages] = useState([]);

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (!token) {
            window.location.href = "/"; // Rediriger vers la page d'accueil si le token est absent
        }
    }, []);

    const poster = async (e) => {
        e.preventDefault();

        const token = sessionStorage.getItem("token");

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
            // localStorage.setItem("postedMessages", JSON.stringify([...postedMessages, postedMessage]));
        } else {
            console.error("Echec pour poster le message");
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
                <h1 className="title02">Mes Posts :</h1>

                <div className="postedMessages">
                    {postedMessages.map((message, index) => (
                        <div className="singleMessage" key={index}>
                            <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg" alt="avatar" />
                            <h2>{message.title}</h2>
                            <p>{message.content}</p>
                        </div>
                    ))}
                </div>

                <ul className="circles">
                    {[...Array(10)].map((_, index) => <li key={index} />)}
                </ul>
            </div>
        </div>
    );
}

export default MesPosts;
