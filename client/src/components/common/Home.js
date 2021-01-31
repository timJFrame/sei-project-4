import React from 'react'
import { useLocation } from 'react-router-dom'

function Home(){
  useLocation()

  return (
    <section className="page-container">
      <article className="blurb-container">
        <h2>Bananas about bulbs..</h2>
        <h2>Mad about mulch...</h2>
        <h2>Passionate about perennials...</h2>
      </article>
    </section>
  
  )
}

export default Home