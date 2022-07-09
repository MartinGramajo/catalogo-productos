import React from 'react'
import ProductosContenidos from '../components/ProductosContenidos'


export default function Productos({productos}) {
  return (
    <div>
      <ProductosContenidos productos={productos} />
    </div>
  )
}
