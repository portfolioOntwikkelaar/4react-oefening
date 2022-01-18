import React from 'react'

const Navbar =() => {
  
    return (
      <nav className='ui raised very padded segment'>
        <a className='ui orange inverted segment'>Collection</a>
        <div className='ui right floated header'>
          <button className='ui button'>
            <a href="/">Home</a>
          </button>
          <button className='ui button'>
            <a href="/">About</a>
          </button>
          <button className='ui button'>
            <a href="/">Contact</a>
          </button>
        </div>
        
      </nav>
    )
  
}

export default Navbar
