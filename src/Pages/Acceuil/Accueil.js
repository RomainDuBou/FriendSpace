import React, { useState, useEffect } from 'react';
import './Accueil.css';
import Header from '../../Component/Header/Header';
import Onlinefriends from '../../Component/Onlinefriends/Onlinefriends';
import Nav from '../../Component/Nav/Nav';

function Accueil() {
    const [posts, setPosts] = useState([]);
    const [commentContent, setCommentContent] = useState('');

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

    // const handleLike = async (postId) => {
    //   console.log(postId);
    //     try {
    //         const options = {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': 'Bearer token'
    //             },
    //             body: JSON.stringify({
    //                 postId: postId
    //             })
    //         };
    //         const response = await fetch('https://social-network-api.osc-fr1.scalingo.io/friendspace99/like', options);
    //         if (response.ok) {
    //             // Mise à jour de l'état pour refléter le like
    //             setPosts(posts.map(post => post.id === postId ? {...post, likes: post.likes + 1} : post));
    //         } else {
    //             throw new Error('Echec de la requête de like');
    //         }
    //     } catch (error) {
    //         console.error('Erreur pour liker post', error);
    //     }
    // };

    // const handleComment = async (postId) => {
    //     try {
    //         const options = {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': 'Bearer token'
    //             },
    //             body: JSON.stringify({
    //                 postId: postId,
    //                 content: commentContent
    //             })
    //         };
    //         const response = await fetch('https://social-network-api.osc-fr1.scalingo.io/friendspace99/comment', options);
    //         if (response.ok) {
                
    //             const updatedPosts = await response.json();
    //             setPosts(updatedPosts);
              
    //             setCommentContent('');
    //         } else {
    //             throw new Error('Echec de la requête de commentaire');
    //         }
    //     } catch (error) {
    //         console.error('Erreur pour commenter post', error);
    //     }
    // };

    return (
        <div>
            <Header />
            <Onlinefriends />
            <Nav />
            <div className="accueilContainer">
                <h1>Fil D'actualité:</h1>
                <div className="allMessages">
                    {posts.map((post, index) => (
                        <div className='singleMessage' key={index}>
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                            <button >Like</button>
                            <p>{post.likes}</p>
                            <input type="text" value={commentContent} onChange={(e) => setCommentContent(e.target.value)} placeholder="Ajouter un commentaire" />
                            <button >Commenter</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Accueil;