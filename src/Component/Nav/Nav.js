import { Link, useNavigate } from "react-router-dom";
import './Nav.css'

function Nav() {

    const navigate = useNavigate();

    const handleLogout = () => {
        // Supprimer le token d'authentification
        // Vous devriez avoir une fonction pour gérer cela dans votre application
        // Par exemple, vous pouvez utiliser localStorage ou sessionStorage
        localStorage.removeItem("token");

        // Rediriger vers la page de connexion
        navigate("/");
    };



    const isProfilPage = window.location.pathname === "/profil";
    const isMesPostsPage = window.location.pathname === "/mesposts";
    const isAccueilPage = window.location.pathname === "/accueil";

    return (
        <nav className={`navContainer ${isProfilPage ? "homeStyle" : isMesPostsPage ? "mespostsStyle" : isAccueilPage ? "accueilStyle" : ""}`}>
            <img className="logo" src={process.env.PUBLIC_URL + "/logo1.png"} />
            <div className="linkContainer">
                <div className="linkImageContainer03">
                    <Link to="/accueil" className="linkthree">Accueil</Link>
                </div>
                <hr className="hrThree"></hr>
                <div className="linkImageContainer01">
                    <Link to="/profil" className="linkone">Profil</Link>
                </div>
                <hr className="hrOne"></hr>
                <div className="linkImageContainer02">
                    <Link to="/mesposts" className="linktwo">Mes Posts</Link>
                </div>
                <hr className="hrTwo"></hr>
            </div>
            <button onClick={handleLogout}>Déconnexion</button>

        </nav>
    )
}


export default Nav;