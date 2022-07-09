import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

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
    <div className="d-flex justify-content-center">
      {" "}
      <Card className="card-meme my-5" style={{ width: "24rem" }}>
        <Card.Img className="w-100" variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.titulo}</Card.Title>
          <Card.Text>{producto.descripcion}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
