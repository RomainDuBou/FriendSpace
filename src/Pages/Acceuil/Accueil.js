import './Accueil.css'
import Header from '../../Component/Header/Header';
import Onlinefriends from '../../Component/Onlinefriends/Onlinefriends';
import Nav from '../../Component/Nav/Nav';
import React, { useState, useEffect } from 'react';
import Header2 from '../../Component/Header2/Header2';

function Accueil() {

  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    // Récupération des messages depuis l'API au chargement de la page
    fetch("https://social-network-api.osc-fr1.scalingo.io/friendspace99/login")
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const postComment = (index) => {
    const commentInput = document.getElementById(`commentInput-${index}`);
    const comment = commentInput.value;
    if (comment.trim() !== '') {
      // Envoi du commentaire à l'API
      fetch(`http://exemple.com/api/posts/${posts[index].id}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ comment: comment })
      })
      .then(response => response.json())
      .then(data => {
        const updatedPosts = [...posts];
        updatedPosts[index].comments.push(data.comment);
        setPosts(updatedPosts);
        commentInput.value = '';
      })
      .catch(error => console.error('Error:', error));
    }
  };
   
  const renderPosts = () => {
    return (
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => like(index)}>Like ({post.likes})</button>
            <button>Comment</button>
            <div>
              {post.comments.map((comment, commentIndex) => (
                <p key={commentIndex}>{comment}</p>
              ))}
              <textarea id={`commentInput-${index}`} rows="2" cols="30"></textarea>
              <button onClick={() => postComment(index)}>Post Comment</button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const postMessage = () => {
    if (title.trim() !== '' && content.trim() !== '') {
      // Envoi du message à l'API
      fetch('http://exemple.com/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: title, content: content })
      })
      .then(response => response.json())
      .then(data => {
        setPosts([...posts, data]);
        setTitle('');
        setContent('');
      })
      .catch(error => console.error('Error:', error));
    }
  };

  

  const like = (index) => {
    // Envoi du like à l'API
    fetch(`http://exemple.com/api/posts/${posts[index].id}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      const updatedPosts = [...posts];
      updatedPosts[index].likes = data.likes;
      setPosts(updatedPosts);
    })
    .catch(error => console.error('Error:', error));
  };
  
    return (

        <div className='accueilContainer'>

            < Header />

            < Header2 />

            < Onlinefriends />

            < Nav />

            <div className='infoContainer'>

              <h1>Simple Social Media</h1>
                {renderPosts()}
              <h2>Post a message</h2>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"/><br/>
              <textarea value={content} onChange={(e) => setContent(e.target.value)} rows="4" cols="50" placeholder="Content"></textarea><br/>
              <button onClick={postMessage}>Post</button>
                
            </div>


        </div>

    );
}


export default Accueil;