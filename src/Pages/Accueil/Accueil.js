import React, { useState, useEffect } from 'react';
import './Accueil.css';
import Header from '../../Composants/Header/Header';
import Onlinefriends from '../../Composants/Onlinefriends/Onlinefriends';
import Nav from '../../Composants/Nav/Nav';

function Accueil() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch('https://social-network-api.osc-fr1.scalingo.io/friendspace99/posts');
                if (response.ok) {
                    const data = await response.json();
                    setPosts(data.posts);
                } else {
                    console.error('Failed to fetch posts');
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }

        fetchPosts();
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    return (
        <div className='accueilContainer'>
            <Header />
            <Onlinefriends />
            <Nav />
            {/* Render posts here */}
            <div className="mespostsContainer">
                <h1>Latest Posts</h1>
                <ul>
                    {posts.map((post, index) => (
                        <div className='singleMessage' key={index}>
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Accueil;
