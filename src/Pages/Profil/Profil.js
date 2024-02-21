import Header from "../../Component/Header/Header";
import Nav from "../../Component/Nav/Nav";

import "./Profil.css"
import { useState, useEffect } from "react";

function Profil() {

    const [user, setUser] = useState(null);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("token"); // Récupérer le token depuis le stockage local

            if (!token) {
                setMessage("Token non trouvé");
                return;
            }

            const response = await fetch("https://social-network-api.osc-fr1.scalingo.io/friendspace99/user", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}` // Inclure le token dans l'en-tête Authorization
                }
            });

            if (!response.ok) {
                setMessage("Erreur lors de la récupération des informations utilisateur");
                return;
            }

            const userData = await response.json();
            setUser(userData);
        };

        fetchUser();
    }, []);

    return (
        <div className="profilContainer">
            < Header />
            {/* < Onlinefriends /> */}
            < Nav />

            <div className="profilInfoContainer">
                <h1>Modifier le profil</h1>
                <hr></hr>
                {message && <div>{message}</div>}
                {user && (
                    <div>
                        <p>Nom : {user.lastname}</p>
                        <p>Prénom : {user.firstname}</p>
                        <p>Email : {user.email}</p>
                    </div>
                )}


            </div>

        </div>
    );

}


export default Profil;