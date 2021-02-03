import React from 'react'
// import { useLocation } from 'react-router-dom'

import { useTransition, animated } from 'react-spring'

function Home(){

  const ref = React.useRef([])
  const [items, set] = React.useState([])
  const transistions = useTransition(items, null, {
    from: { opacity: 0, height: 0, innerHeight: 0, transfrom: 'perspective(600px) rotateX(0deg)', color: '#14adad' },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(200px) rotateX(180deg)', color: '#14adad' },
      { transform: 'perspective(200px) rotateX(0deg)' },
      { transform: 'perspective(200px) rotateX(0deg)' }
    ],
    leave: [{ color: '#14adad' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#14adad' }
  })

  const reset = React.useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Bananas about bulbs..', 'Mad about mulch...', 'Passionate about perennials...']), 200))
    ref.current.push(setTimeout(() => set(['Bananas about bulbs..', 'Passionate about perennials...']), 500))
    ref.current.push(setTimeout(() => set(['Bananas about bulbs..', 'Mad about mulch...', 'Passionate about perennials...']), 800))
  }, [])

  React.useEffect(() => void reset(), [])

  return (
    <section
     
      className="page-container">
      <article>
        {transistions.map(({ item, props: { innerHeight, ...rest }, key }) => (
          <animated.div className="transitions-item" key={key} style={rest} onClick={reset} > 
            <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>

          </animated.div>
        ))}
      </article>
    </section>
  
  )
}

export default Home