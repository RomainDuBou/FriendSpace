import './Inscription.css';
import { Link } from "react-router-dom";

function Inscription() {
    const register = async (e) => {
        e.preventDefault();

        const firstname = e.target.elements.firstname.value;
        const lastname = e.target.elements.lastname.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

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
            alert("Email ou mot de passe incorrect");
            return;
        }

        if (response.status !== 200) {
            alert("Une erreur s'est produite");
            return;
        }

        alert("Vous êtes bien inscrit, veuillez maintenant vous connecter avec vos informations");
    };

    
    const spans = [];
    for (let i = 0; i < 150; i++) {
        spans.push(<span key={i}/>);
    }

    return (
        <div className='inscriptionContainer'>
            <section>
                {spans}
                <div className="signin">
                    <div className="content">
                        <h2>S'inscrire</h2>
                        <div className="form">
                            <form onSubmit={register}>
                                <div className='inputBox'>
                                    <input type="text" name="firstname" required /> <i>Prénom</i>
                                </div>
                                <div className='inputBox'>
                                    <input type="text" name="lastname" required /> <i>Nom</i>
                                </div>
                                <div className="inputBox">
                                    <input type="email" name="email" required /> <i>Email</i>
                                </div>
                                <div className="inputBox">
                                    <input type="password" name="password" required /> <i>Password</i>
                                </div>
                                <div className="links">
                                    <Link to="/">Déjà un compte ? Se connecter</Link>
                                </div>
                                <div className="inputBox">
                                    <input type="submit" value="S'inscrire" />
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