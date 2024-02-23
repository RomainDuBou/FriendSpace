import './Connexion.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Connexion() {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    const login = async (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        };
        const response = await fetch(
            "https://social-network-api.osc-fr1.scalingo.io/friendspace99/login",
            options
        );

        const data = await response.json();

        if (response.status === 401 || !data.success) {
            setMessage("Email ou mot de passe incorrect");
            return;
        }

        if (response.status !== 200) {
            setMessage("Une erreur s'est produite");
            return;
        }

        const token = data.token;
        setMessage("Vous êtes connecté");

        sessionStorage.setItem("token", token);
        navigate("/profil");

    };

    const spans = [];
    for (let i = 0; i < 150; i++) {
        spans.push(<span key={i} />);
    }

    return (
        <div className='connexionContainer'>
            <section className='connexionAnimation'>
                {spans}
                <div className="signin">
                    <div className="content">
                        <h2>Se connecter</h2>
                        <div className="form">
                            <form onSubmit={login}>
                                <div className="inputBox">
                                    <input type="email" id="email" required /> <i>Email</i>
                                </div>
                                <div className="inputBox">
                                    <input type="password" id="password" required /> <i>Password</i>
                                </div>
                                <div className="links">
                                    <Link to="/inscription">Pas encore de compte ? S'inscrire</Link>
                                </div>
                                <div className="inputBox">
                                    <input type="submit" value="Se connecter" />
                                    {message && <div className='messageContainer'>{message}</div>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Connexion;
