import Navbar from './Navbar2'
import Intro from './introSkills'
import Skill from './skills'
import React from 'react'
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className="layout">
        <Navbar />
        <Intro />

        <h2><b>Skills</b></h2>
        <Skill />

        <div className="content">
            { children }
        </div>

        
        <footer>
            <p>Created using ReactJS and Gatsby SSG</p>
        </footer>


    </div>
  )
}
