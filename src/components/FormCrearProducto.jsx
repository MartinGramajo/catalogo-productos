import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Spinner } from "react-bootstrap";
import { leerDeLocalStorage } from "../utils/localStorage";

export default function FormCrearProducto(props) {
  const { setProductos } = props;
  const [validated, setValidated] = useState(false);
  const [input, setInput] = useState({
    titulo: "",
    imagen: "",
    descripcion: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    const newInput = { ...input, [name]: value };
    setInput(newInput);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    const form = event.currentTarget;

    // Chequea que los campos del formulario sean validos.
    if (form.checkValidity() === true) {
      // Forma incorrecta de actualizar un array, mutando un objeto
      // memes.push(input); // esto no hace un nuevo render del component.

      //Forma correcta en react, crear un nuevo array, copiando los elementos previos.
      setIsLoading(true);
      const tokenLocal = leerDeLocalStorage("token") || {};
      const headers = { "x-auth-token": tokenLocal.token };
      await axios.post("http://localhost:4000/api/Productos", input, {
        headers,
      });

      // consultamos nuevamente el api con el meme cargado y setteamos en Memes
      const response = await axios.get("http://localhost:4000/api/Productos");
      setProductos(response.data); // setteamos la info de nuestro usuario.

      setIsLoading(false);
      form.reset();
      setValidated(false);
    }
  };

  return (
    <div>
      <Form
        className="card p-5 m-auto mt-5 form-admin text-white"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="titulo">
          <Form.Label>Titulo</Form.Label>
          <Form.Control
            required
            name="titulo"
            type="text"
            placeholder="Producto"
            onChange={handleChange}
          />
          <Form.Control.Feedback>Datos correctos</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor verifica tu titulo.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="titulo">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            required
            name="descripcion"
            type="text"
            placeholder="Descripcion"
            onChange={handleChange}
          />
          <Form.Control.Feedback>Datos correctos</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor verifica la info ingresada.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="imagen">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            required
            name="imagen"
            type="text"
            placeholder="http://example.com"
            onChange={handleChange}
          />
          <Form.Control.Feedback>Imagen correcta.</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Verifica tu imagen.
          </Form.Control.Feedback>
        </Form.Group>
        <Button className="mx-auto btn btn-success" type="submit" disable={isLoading}>
          Crear Producto
          {isLoading && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </Button>
      </Form>
    </div>
  );
}
