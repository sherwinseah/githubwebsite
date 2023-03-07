import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-container'>
            <div className='navbar-item'>
                <Link to='/' style={{textDecoration:'none', fontFamily:'Calibri', fontWeight:'bold'}}>
                    Home
                </Link>
            </div>
            <div className='navbar-item'>
                <Link to='/portfolio' style={{textDecoration:'none', fontFamily:'Calibri', fontWeight:'bold'}}>
                    Portfolio
                </Link>
            </div>
            <div className='navbar-item'>
                <Link to='/ikf' style={{textDecoration:'none', fontFamily:'Calibri', fontWeight:'bold'}}>
                    IKF
                </Link>    
            </div>
        </div>
    </div>
  )
}
