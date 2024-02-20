import Nav from "../../Composants/Nav/Nav";
import Header from "../../Composants/Header/Header";
import Onlinefriends from "../../Composants/Onlinefriends/Onlinefriends";
import './Profil.css'

function Profil() {
    return (
        <div className="profilContainer">
            < Header />

            < Onlinefriends />

            < Nav />

            <div className="profilInfoContainer">
                <h1>Modifier le profil</h1>
                <hr></hr>
                
            </div>

        </div>
    )
}


export default Profil;