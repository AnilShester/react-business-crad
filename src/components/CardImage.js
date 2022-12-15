import React from 'react'
import img from '../123.png'

function CardImage() {
  return (
    <div className="img-container">
      <img src={img} className="card-img" alt="" srcset="" />
    </div>
  )
}

export default CardImage
