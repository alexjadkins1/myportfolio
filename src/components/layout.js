import Navbar from './Navbar2'
import React from 'react'
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className="layout">
        <Navbar />
        <div className="content">
            { children }
        </div>
        <footer>
            <p>Created using ReactJS and Gatsby SSG</p>
        </footer>


    </div>
  )
}
