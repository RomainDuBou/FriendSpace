import React, { useState, useEffect } from 'react';
import './Accueil.css';
import Header from '../../Composants/Header/Header';
import Onlinefriends from '../../Composants/Onlinefriends/Onlinefriends';
import Nav from '../../Composants/Nav/Nav';

function Accueil() {
    const [posts, setPosts] = useState([]);

    const [likes, setLikes] = useState(() => {
        const savedLikes = JSON.parse(localStorage.getItem("likes")) || {};
        return savedLikes;
    });

    const handleLike = async (index) => {
        if (likes[index]) {
            const newLikes = { ...likes };
            delete newLikes[index];
            setLikes(newLikes);
            localStorage.setItem("likes", JSON.stringify(newLikes));


            const updatedMessages = [...posts];
            updatedMessages[index].likes = (updatedMessages[index].likes || 0) - 1;
            setPosts(updatedMessages);
        } else {

            const newLikes = { ...likes, [index]: true };
            setLikes(newLikes);
            localStorage.setItem("likes", JSON.stringify(newLikes));


            const updatedMessages = [...posts];
            updatedMessages[index].likes = (updatedMessages[index].likes || 0) + 1;
            setPosts(updatedMessages);
        }
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://social-network-api.osc-fr1.scalingo.io/friendspace99/posts');
                if (response.ok) {
                    const data = await response.json();
                    setPosts(data.posts);
                } else {
                    throw new Error('Echec');
                }
            } catch (error) {
                console.error('Erreur pour fetch post', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <Header />
            <Onlinefriends />
            <Nav />
            <div className="accueilContainer">
                <h1>Fil d'actualité :</h1>
                <div className="allMessages">
                    {posts.map((post, index) => (
                        <div className='singleMessage' key={index}>
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                            <button onClick={() => handleLike(index)}>Like</button>
                            <p> {post.likes || ""}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Accueil;
