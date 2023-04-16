import React from 'react'
import './Navbar.css'

export default function navbar(props) {
  return (
    <div className='nb'>
        <nav className='navb'>
            <ul className='unorderedList'>
                <div className='logoOrName'>
                    <li style={{color:'red', listStyle:'none', fontSize:'70px'}} className='title'>{props.title}</li>
                </div>
                
                <div className='otherLinks'>
                    <li  className='home'>{props.hometext}</li>
                    <li className='about'>{props.aboutUs}</li>
                    <li className='contact'>{props.contact}</li>
                </div>
            </ul>
        </nav>
    </div>
  )
}