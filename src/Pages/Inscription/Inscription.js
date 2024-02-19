import './Inscription.css';
import { useState } from "react";
import { Link } from "react-router-dom";


function Inscription() {
    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const register = async (e) => {
        e.preventDefault();

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
                firstname: firstname,
                lastname: lastname
            })
        };
        const response = await fetch(
            "https://social-network-api.osc-fr1.scalingo.io/friendspace99/register",
            options
        );


        if (response.status === 401) {
            setMessage("Email ou mot de passe incorret");
            return;
        }

        if (response.status !== 200) {
            setMessage("Une erreur s'est produite");
            return;
        }


        setMessage("Vous êtes bien inscrit, veuillez maintenant vous connecter avec vos informations");
    };

    return (

        <body>
            <section>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>

                <div class="signin">

                    <div class="content">

                        <h2>S'inscrire</h2>

                        <div class="form">

                            <form onSubmit={register}>

                                <div className='inputBox'>
                                    <input type="text"
                                        onChange={(e) => setFirstname(e.target.value)}
                                        value={firstname}
                                        required /> <i>Prénom</i>
                                </div>

                                <div className='inputBox'>
                                    <input type="text"
                                        onChange={(e) => setLastname(e.target.value)}
                                        value={lastname}
                                        required /> <i>Nom</i>
                                </div>

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

                                <div class="links"><Link to="/connexion">Déjà un compte ? Se connecter</Link>
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

export default Inscription;
