import './App.css';
import Connexion from './Pages/Connexion/Connexion';
import Inscription from './Pages/Inscription/Inscription';
import Profil from './Pages/Profil/Profil';
import MesPosts from './Pages/MesPosts/MesPosts';
import Accueil from './Pages/Accueil/Accueil';
import { createBrowserRouter, RouterProvider }
    from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Connexion />,
    },
    {
        path: "/inscription",
        element: <Inscription />
    },
    {
        path: "/profil",
        element: <Profil />
    },
    {
        path: "/mesposts",
        element: <MesPosts />
    },
    {
        path: "/accueil",
        element: <Accueil />
    },
]);


function App() {
    return <RouterProvider router={router} />;
}


export default App;


