import "./MesPosts.css";
import Header from '../../Composants/Header/Header';
import Onlinefriends from '../../Composants/Onlinefriends/Onlinefriends';
import Nav from '../../Composants/Nav/Nav';
import { useState } from "react";

function MesPosts() {
    const [content, setContent] = useState("");
    const [titlePost, setTitlePost] = useState("");
    const [postedMessages, setPostedMessages] = useState([]); // État pour stocker les messages postés
    let token = localStorage.getItem("token");

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
            const postedMessage = { title: titlePost, content: content }; // Créer un objet avec le titre et le contenu du message
            setPostedMessages([...postedMessages, postedMessage]); // Ajouter le message posté à la liste des messages postés
            setTitlePost(""); // Réinitialiser le champ du titre
            setContent(""); // Réinitialiser le champ du contenu
        } else {
            console.error("Failed to post message");
        }
    }

    return (
        <div>
            <Header />
            <Onlinefriends />
            <Nav />

            <div className="mespostsContainer">
                <h1 className="title01">Envie de poster?</h1>

                <input
                    id="titlePost"
                    type="text"
                    value={titlePost}
                    onChange={(e) => setTitlePost(e.target.value)}
                    placeholder="Titre du post"
                />
                <br />
                <textarea
                    id="contenupost"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Contenu du post"
                />
                <br />

                <button onClick={poster}>Publier</button>
                <h1 className="title02">Mes Posts</h1>

                <div className="postedMessages">
                    {postedMessages.map((message, index) => (
                        <div key={index}>
                            <h3>{message.title}</h3>
                            <p>{message.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MesPosts;
