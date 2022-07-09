import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [input, setInput] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    const newInput = { ...input, [name]: value };
    setInput(newInput);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/auth/register", input);
      alert("Registro exitoso");
      navigate("/Login");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container className="form-register my-5">
      <Row>
        <Col xs={12} sm={8} md={6} className=" mx-auto my-5">
          {/* {<Alert variant="danger">{"correo en uso"}</Alert>} */}
          <h4 className="text-white">CREA TU CUENTA</h4>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  required
                  onChange={handleChange}
                  type="text"
                  placeholder="nombre"
                  name="name"
                />
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom02">
                <Form.Label className="my-2">Email</Form.Label>
                <Form.Control
                  required
                  onChange={handleChange}
                  type="email"
                  placeholder="email"
                  name="email"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  minLength="6"
                  onChange={handleChange}
                  name="password"
                  placeholder="******"
                  type="text"
                  required
                />
              </Form.Group>
              {/* <Form.Group as={Col} md="12" controlId="validationCustom05">
                  <Form.Label>role</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="role"
                    name="role"
                  />
                </Form.Group> */}
            </Row>
            <Row>
              <Button type="submit" className="mx-auto mt-4">
                Continuar
              </Button>
            </Row>
            <Row>
              <div className="d-flex justify-content-center my-5">
                <Link to="/login">¿ Ya tienes una cuenta? Iniciar sesión</Link>
              </div>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
