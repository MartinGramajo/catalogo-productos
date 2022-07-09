import React from "react";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Producto(props) {
  return (
    <div className=" d-flex justify-content-around">
      <Card className="card-productos text-white my-5">
        <Card.Img variant="top" src={props.producto.imagen} />
        <Card.Body>
          <Card.Title>{props.producto.titulo}</Card.Title>
          {props.producto.descripcion}
        </Card.Body>
        <Button className="boton-detalle" as={NavLink} to={`/productos/${props.producto._id}`}> Ver Mas </Button>
      </Card>
    </div>
  );
}
