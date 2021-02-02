import React from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

function Home(){
  useLocation()

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-container">
      <article className="blurb-container">
        <h2>Bananas about bulbs..</h2>
        <h2>Mad about mulch...</h2>
        <h2>Passionate about perennials...</h2>
      </article>
    </motion.section>
  
  )
}

export default Home