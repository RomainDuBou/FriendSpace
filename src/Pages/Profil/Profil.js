import Header from "../../Composants/Header/Header";
import Nav from "../../Composants/Nav/Nav";
import Onlinefriends from "../../Composants/Onlinefriends/Onlinefriends";
import './Profil.css'
import React, { useState, useEffect } from "react";

function Profil() {
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: ""
    });

    useEffect(() => {
        const fetchUser = async () => {
            const token = sessionStorage.getItem("token");

            if (!token) {
                setMessage("Token non trouvé");
                return;
            }

            const response = await fetch("https://social-network-api.osc-fr1.scalingo.io/friendspace99/user", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            if (!response.ok) {
                setMessage("Erreur lors de la récupération des informations utilisateur");
                return;
            }

            const userData = await response.json();
            setUser(userData);
            setFormData({
                firstname: userData.firstname,
                lastname: userData.lastname,
                email: userData.email
            });
        };

        fetchUser();
    }, []);

    const handleEdit = () => {
        setEditMode(!editMode);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        const token = sessionStorage.getItem("token");

        if (!token) {
            setMessage("Token non trouvé");
            return;
        }

        const response = await fetch("https://social-network-api.osc-fr1.scalingo.io/friendspace99/user", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            setMessage("Erreur lors de la mise à jour des informations utilisateur");
            return;
        }

        setMessage("Informations mises à jour avec succès");
        setUser(prevState => ({
            ...prevState,
            ...formData
        }));
        setEditMode(false);
    };

    return (
        <div className="profilContainer">

            < Header />
            < Onlinefriends />
            < Nav />

            <div className="profilInfoContainer">
                <h1>Modifier le profil</h1>
                <hr />
                {message && <div className="message">{message}</div>}
                {user && (
                    <div className="info">
                        <div className="infos infos01">
                            <b><mark>Nom :</mark></b>{" "}
                            {editMode ? (
                                <input
                                    type="text"
                                    name="lastname"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                />
                            ) : (
                                <p>{user.lastname}</p>
                            )}
                        </div>
                        <div className="infos infos02">
                            <b><mark>Prénom :</mark></b>{" "}
                            {editMode ? (
                                <input
                                    type="text"
                                    name="firstname"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                />
                            ) : (
                                <p>{user.firstname}</p>
                            )}
                        </div>
                        <div className="infos infos03">
                            <b><mark>Email :</mark></b>{" "}
                            {editMode ? (
                                <input
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            ) : (
                                <p>{user.email}</p>
                            )}
                        </div>
                        <button onClick={editMode ? handleSubmit : handleEdit}>
                            {editMode ? "Enregistrer" : "Modifier"}
                        </button>
                    </div>
                )}

                <ul className="circles">
                    {[...Array(10)].map((_, index) => (
                        <li key={index}></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Profil;
