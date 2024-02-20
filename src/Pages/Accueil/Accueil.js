import './Accueil.css'
import Header from '../../Composants/Header/Header';
import Onlinefriends from '../../Composants/Onlinefriends/Onlinefriends';
import Nav from '../../Composants/Nav/Nav';
import Post from '../../Composants/Post/Post';
import { useState } from 'react';

function Accueil() {

    const [post, setPost] = useState([{
        className: "elonpost",
        title: "My rocket",
        author: "Elon Musk",
        content: "Look, I built a new rocket",
        likes: 0
    },
    ]);

    function addLike(index) {
        const updatedPost = [...post];
        updatedPost[index].likes++;
        setPost(updatedPost);
    }

    return (

        <div className='accueilContainer'>

            < Header />

            < Onlinefriends />

            < Nav />

            <div className='infoContainer'>
                {post.map(function (element, index) {
                    return <div className={element.className} >
                        <Post title={element.title} author={element.author} content={element.content} likes={element.likes} />
                        <button onClick={() => addLike(index)}>👍</button>

                    </div>
                })}
            </div>


        </div>

    )
}

export default Accueil;