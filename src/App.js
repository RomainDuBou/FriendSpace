import './App.css';
import Connexion from './Pages/Connexion/Connexion';
import Inscription from './Pages/Inscription/Inscription';
import Profil from './Pages/Profil/Profil';
import MesPosts from './Pages/MesPosts/MesPosts';
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

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
