
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Mes_Posts from './Pages/Mes_Posts/Mes_Posts';
import Acceuil from './Pages/Acceuil/Acceuil';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Acceuil/>
  },

  {
    path: "/Mes_Posts",
    element: <Mes_Posts/>
  },

])
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;