import "./Nav.css"
import { Link } from "react-router-dom";

function Nav() {
    return <section className="navContainer">
        <h1>Logo FreindSpace</h1>
        <div>
            <Link className="acceuilLink" to="/">Acceuil</Link>
            <Link className="mespostsLink" to="/Mes_Posts">Mes Posts</Link> 
        </div>
        
    </section>
}

export default Nav;