import React from 'react'
import FormCrearProducto from '../components/FormCrearProducto'
import TablaProductos from '../components/TablaProductos'

export default function Admin({getProductos, productos ,setProductos}) {
  return (
    <div>
      <FormCrearProducto  setProductos={setProductos} />
      <TablaProductos getProductos={getProductos}  productos={productos} />
    </div>
  )
}
