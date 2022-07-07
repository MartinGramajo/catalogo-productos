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

function App() {
  return (
    <BrowserRouter>
      <NavReact />
      <Routes>
        <Route
          path="/"
          element={
            <Home />} />
        <Route
          path="/Productos"
          element={
            <Productos />} />
        <Route
          path="/Productos/:productoId"
          element={
            <DetalleProducto />} />
        <Route
          path="/Login"
          element={
            <Login />} />
        <Route
          path="/Register"
          element={
            <Register />} />
        <Route
          path="/Admin"
          element={
            <Admin />} />
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
