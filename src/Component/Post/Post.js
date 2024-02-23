import './Post.css'

function Post(props) {
    const titre = props.title;
    const contenu = props.content;
    const likes = props.likes;


    return (
       <section>
          <div className='elementPost'>
            <h1>{titre}</h1>
            <p>{contenu}</p>
            <span>{likes}</span>
          </div>
       </section>
    );
}


export default Post;