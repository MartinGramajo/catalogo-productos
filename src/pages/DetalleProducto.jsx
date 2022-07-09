import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Image } from "react-bootstrap";

export default function DetalleProducto() {
  const navigate = useNavigate();
  const { productoId } = useParams();
  const [producto, setProducto] = useState({});

  // consulta Api para traer los Productos
  useEffect(() => {
    const getProductos = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/Productos/${productoId}`
        );
        setProducto(response.data);
      } catch (error) {
        console.error(error);
        navigate("*");
      }
    };
    getProductos();
  }, []);

  return (
    <div className="container text-white">
      <div className="row my-4">
        <div className="col-md-6 col-12">
          <Image src={producto.imagen} alt="Product" />
        </div>
        <div className="col-md-6 col-12">
          <h1 className="my-4">{producto.titulo}</h1>
          <p>{producto.descripcion}</p>
        </div>
      </div>
    </div>
  );
}
