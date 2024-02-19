import './Connexion.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function Connexion() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const login = async (e) => {
        e.preventDefault();

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

        if (response.status === 401) {
            setMessage("Email ou mot de passe incorret");
            return;
        }

        if (response.status !== 200) {
            setMessage("Une erreur s'est produite");
            return;
        }

        const token = data.token;
        setMessage("Vous êtes connecté");


        navigate("/profil");


    };

    return (
        <body>
            <section>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>

                <div class="signin">

                    <div class="content">

                        <h2>Se connecter</h2>

                        <div class="form">

                            <form onSubmit={login}>

                                <div class="inputBox">
                                    <input type="mail"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        required /> <i>Email</i>
                                </div>

                                <div class="inputBox">
                                    <input type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        required /> <i>Password</i>

                                </div>

                                <div class="links"><Link to="/inscription">Pas encore de compte ? S'inscrire</Link>
                                </div>

                                <div class="inputBox">

                                    <input type="submit" value="Se connecter" />
                                    {message && <div className='messageContainer'>{message}</div>}

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    );


}

export default Connexion;
