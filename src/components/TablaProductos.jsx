import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Image, Modal, Spinner, Table } from "react-bootstrap";
import { leerDeLocalStorage } from "../utils/localStorage";

export default function TablaProductos(props) {
  const { productos, setProductos, getProductos } = props;
  const [isLoading, setIsLoading] = useState(false);
  const handleClose = () => setIsVisible(false);
  const handleShow = () => setIsVisible(true);
  const [isVisible, setIsVisible] = useState(false);
  const [currentProducto, setCurrentProducto] = useState({});
  const [isLoadingEdit, setIsLoadingEdit] = useState(false);

  // función para eliminar Productos
  const deleteProducto = async (id) => {
    setIsLoading(true);
    const tokenLocal = leerDeLocalStorage("token") || {};
    const headers = { "x-auth-token": tokenLocal.token };
    await axios.delete(`http://localhost:4000/api/Productos/${id}`, {
      headers,
    });

    // consultamos nuevamente el api para actualizar el listado de productos.
    await getProductos();
    setIsLoading(false);
  };

  // funcion para editar Productos
  const editMeme = (producto) => {
    handleShow();
    setCurrentProducto(producto);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    const updateProducto = { ...currentProducto, [name]: value };
    setCurrentProducto(updateProducto);
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    setIsLoadingEdit(true);
    const tokenLocal = leerDeLocalStorage("token") || {};
    const headers = { "x-auth-token": tokenLocal.token };
    await axios.put(
      `http://localhost:4000/api/Productos/${currentProducto._id}`,
      currentProducto,
      { headers }
    );
    await getProductos();
    setIsLoadingEdit(false);
    handleClose();
  };

  return (
    <div>
      <h1 className="text-white text-center my-4"> Mis Productos subidos</h1>
      <Table
        className="mx-auto mt-5 text-white "
        style={{ width: "900px" }}
      >
        <tbody>
          {productos.length === 0
            ? " No hay memes guardados"
            : productos.map((producto, i) => (
                <tr key={i}>
                  <td>
                    <img
                      src={producto.imagen}
                      alt=""
                      style={{ width: "5rem" }}
                    ></img>
                  </td>
                  <td>{producto.titulo}</td>
                  <td>{producto.descripcion}</td>
                  <td>
                    {" "}
                    <Button
                      onClick={() => deleteProducto(producto._id)}
                      variant="none"
                    >
                      {" "}
                      <Image
                        src="https://icongr.am/clarity/eraser.svg?size=26&color=ff0000"
                        alt="icono eliminar"
                      />{" "}
                    </Button>
                    <Button onClick={() => editMeme(producto)} variant="none">
                      {" "}
                      <Image
                        src="https://icongr.am/clarity/edit.svg?size=26&color=currentColor"
                        alt="icono editar"
                      />{" "}
                    </Button>
                  </td>
                </tr>
              ))}
        </tbody>
      </Table>
      <Modal
        show={isVisible}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Form onSubmit={handleSubmitEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="titulo">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                required
                name="titulo"
                value={currentProducto.titulo} // valor o input controlado.
                type="text"
                placeholder="Titulo"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="titulo">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                required
                name="descripcion"
                value={currentProducto.descripcion} // valor o input controlado.
                type="text"
                placeholder="Descripcion"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="imagen">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                required
                name="imagen"
                value={currentProducto.imagen}
                type="text"
                placeholder="http://example.com"
                onChange={handleChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between">
            <Button type="button" variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button type="submit" disable={isLoadingEdit}>
              Guardar Cambios
              {isLoadingEdit && (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              )}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}
