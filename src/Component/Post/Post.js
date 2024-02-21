import './Post.css'

function Post(props) {
    const titre = props.title;
    const contenu = props.content;
    const auteur = props.author;
    const likes = props.likes;


    return (
       <section>
          <div className='elementPost'>
            <h1>{titre}</h1>
            <p>{auteur}</p>
            <p>{contenu}</p>
            <span>{likes}</span>
          </div>
       </section>
    );
}


export default Post;