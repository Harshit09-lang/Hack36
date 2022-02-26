import React from 'react'
import { Button } from "react-bootstrap"

function Home() {
  return (
    <div>
      <div className='home'>
      <div className="container">
          <h1>Lorem ipsum dolor sit.</h1>
        </div>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nisi, hic optio tempore nobis rem.
        </div>
        <div className="buttons">
          <Button primary className='mx-3'>Get started</Button>
          <Button primary className='mx-3'>Get started</Button>
        </div>
      </div>
        
    </div>
  )
}

export default Home