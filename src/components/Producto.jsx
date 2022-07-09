import React from "react";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Producto(props) {
  return (
    <div className=" d-flex justify-content-around">
      <Card className="card-productos my-5">
        <Card.Img variant="top" src={props.producto.imagen} />
        <Card.Body>
          <Card.Title>{props.producto.titulo}</Card.Title>
          {props.producto.descripcion}
        </Card.Body>
        <Button as={NavLink} to={`/productos/${props.producto._id}`}> Ver detalle </Button>
      </Card>
    </div>
  );
}
