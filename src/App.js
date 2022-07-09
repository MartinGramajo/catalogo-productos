import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavReact from './components/NavReact';
import Admin from './pages/Admin';
import DetalleProducto from './pages/DetalleProducto';
import Home from './pages/Home';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Productos from './pages/Productos';
import Register from './pages/Register';
import { leerDeLocalStorage } from './utils/localStorage';

function App() {
const [productos, setProductos] = useState([])
const [user, setUser] = useState({})
const [isLoading, setIsLoading] = useState(true)

   // consulta Api para traer los memes
   const getProductos = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/Productos');
      console.log("file: App.js ~ line 22 ~ getProductos ~ response", response)
      setProductos(response.data) // setteamos la info de nuestro usuario. 
    } catch (error) {
      console.error(error);
    }

  }

  useEffect(() => {
    getProductos()
  }, [])


  // Consulta Api para traer la info del usuario en el login. 
  const requestUserData = async () => {
    setIsLoading(true)
    const tokenLocal = leerDeLocalStorage("token") || {};
    try {
      if (tokenLocal.token) {
        const headers = { 'x-auth-token': tokenLocal.token };
        const response = await axios.get('http://localhost:4000/api/auth', { headers });
        setUser(response.data) 
      }
    } catch (error) {
      console.error(error);
      localStorage.removeItem('token'); 
      window.location.href = '/'; 
    }
    setIsLoading(false)
  }

  useEffect(() => {
    requestUserData()
  }, [])

  // Condicional para autorizar al user a que pagina va a poder acceder. 
  const isAdmin = user.role === 'admin'


  return (
    <BrowserRouter>
      <NavReact  user={user}/>
      <Routes>
        <Route
          path="/"
          element={
            <Home productos={productos} />} />
        <Route
          path="/Productos"
          element={
            <Productos productos={productos} />} />
        <Route
          path="/Productos/:productoId"
          element={
            <DetalleProducto />} />
        <Route
          path="/Login"
          element={
            <Login requestUserData={requestUserData} />} />
        <Route
          path="/Register"
          element={
            <Register />} />
        {isAdmin && <Route
          path="/Admin"
          element={
            <Admin getProductos={getProductos} productos={productos} setProductos={setProductos} />} />}
        
        <Route
          path="/Perfil"
          element={
            <Perfil />} />
        <Route
          path="/*"
          element={
            <h1> 404 Recurso no encontrado</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
