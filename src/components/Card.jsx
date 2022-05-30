import React, { useState } from 'react'

const Card = ({authorRandom, colorRandom, reset}) => {

const cardStyle = {
 color: colorRandom
}
const buttonStyle = {
    color: '#fff',
    backgroundColor: colorRandom
}





  return (
    <article style={cardStyle} className='card'>
  <h2>{authorRandom.quote}</h2>
  <i>~{authorRandom.author}</i>
  <br />
  <button onClick={reset} style={buttonStyle} className='button'>></button>
    </article>
  )
}

export default Card