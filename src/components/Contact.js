import React from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'
// import './style.css'
const Contact = (props) => {
  // setTimeout(() => {
  //   props.history.push('/about')
  // }, 2000)
  return (
    <div>
      <Modal />

    <div className='ui raised very padded text container segment ' style={{marginTop: '80px'}}>
      <Link to='/Veerle' className='ui header'>Veerle</Link>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div className='ui raised very padded text container segment ' style={{marginTop: '80px'}}>
      <Link to='/Samuel' className='ui header'>Samuel</Link>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    </div>
  )
}

export default Contact
