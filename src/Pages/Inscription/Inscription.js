import './Inscription.css';
import { useState } from "react";
import { Link } from "react-router-dom";


function Inscription() {
    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [age, setAge] = useState(0); // Nouvelle constante pour l'âge
    const [phoneNumber, setPhoneNumber] = useState(""); // Nouvelle constante pour le numéro de téléphone
    const [postalCode, setPostalCode] = useState(""); // Nouvelle constante pour le code postal
    const [city, setCity] = useState(""); // Nouvelle constante pour la ville
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
                lastname: lastname,
                age: Number(age) // Inclure l'âge dans la requête
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

        <div className='inscriptionContainer'>
            <section>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>

                <div className="signin">

                    <div className="content">

                        <h2>S'inscrire</h2>

                        <div className="form">

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

                                <div className='inputBox'>
                                    <input type="number"
                                        onChange={(e) => setAge(e.target.value)}
                                        value={age}
                                        min={"0"}
                                        max={"110"}
                                        required /> <i>Age</i>
                                </div>

                                <div className='inputBox'>
                                    <input type="text"
                                        onChange={(e) => setPostalCode(e.target.value)}
                                        value={postalCode}
                                        pattern='[0-8]*'
                                        required /> <i>Code postal</i>
                                </div>

                                <div className='inputBox'>
                                    <input type="text"
                                        onChange={(e) => setCity(e.target.value)}
                                        value={city}
                                        required /> <i>Ville</i>
                                </div>

                                <div className='inputBox'>
                                    <input type="tel"
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        value={phoneNumber}
                                        required /> <i>Numéro de téléphone</i>
                                </div>

                                <div className="inputBox">
                                    <input type="mail"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        required /> <i>Email</i>
                                </div>

                                <div className="inputBox">
                                    <input type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        required /> <i>Password</i>

                                </div>

                                <div className="links"><Link to="/">Déjà un compte ? Se connecter</Link>
                                </div>

                                <div className="inputBox">

                                    <input type="submit" value="S'inscrire" />
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

export default Inscription;