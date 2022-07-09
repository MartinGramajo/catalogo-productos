import React from 'react'
import { Container } from 'react-bootstrap'
import Producto from './Producto'

export default function ProductosContenidos({ productos }) {
    
    const mapProductos = productos.map((producto, id) => (
        <Producto producto={producto} id={id}/>
    ))


  return (
      <>
          <Container className="mt-5 d-flex flex-wrap justify-content-around">
          {mapProductos}
        </Container>
    </>
  )
}
