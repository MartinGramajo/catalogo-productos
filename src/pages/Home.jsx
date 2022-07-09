import React from 'react'
import SliderCard from '../components/SliderCard'

export default function Home({productos}) {
  return (
    <div className='container'>
      <div className='my-5 py-5'>
      <SliderCard  productos={productos}/>
      </div>
      
    </div>
  )
}
