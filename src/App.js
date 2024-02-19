import './App.css';
import Connexion from './Pages/Connexion/Connexion';
import Inscription from './Pages/Inscription/Inscription';
import Profil from './Pages/Profil/Profil';
import { createBrowserRouter, RouterProvider }
  from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/connexion",
    element: <Connexion />,
  },
  { 
    path: "/inscription",
    element: <Inscription />
  },
  {
    path: "/profil",
    element: <Profil />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
