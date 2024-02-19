import React, { useState } from "react";
import "./Acceuil.css";
import Nav from "../../Component/Nav/Nav";
import Header from "../../Component/Header/Header";

function Acceuil() {
  const [films, setFilms] = useState([
    { titre: "Venum", realisateur: "Ruben Fleischer", annee: 2018 },
    { titre: "Oblivion", realisateur: "Joseph Kosinski", annee: 2013 },
    { titre: "The Killer - Mission : Save The Girl ", realisateur: "Choi Jae-Hoon", annee: 2022 }
  ]);

  // Fonction pour modifier une ligne du tableau
  const modifierFilm = (index) => {
    // Vous pouvez mettre en œuvre la logique pour modifier la ligne ici
    // Par exemple, vous pouvez afficher une boîte de dialogue avec un formulaire pré-rempli
    console.log("Modifier le film à l'index :", index);
  };

  return (

    <section>
        <div>
            <Header/>
            <Nav/>
        </div>
      <section>
        <div className="tabContainer">
          <div className="listFilms">
            <h2>Liste de films</h2>
            <table>
              <thead>
                <tr>
                  <th>Titre</th>
                  <th>Réalisateur</th>
                  <th>Année de sortie</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {films.map((film, index) => (
                  <tr key={index}>
                    <td>{film.titre}</td>
                    <td>{film.realisateur}</td>
                    <td>{film.annee}</td>
                    <td>
                      <button onClick={() => modifierFilm(index)}>Modifier</button>
                      <button>Supprimer</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Acceuil;