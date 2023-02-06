import Navbar from './Navbar2'
import Intro from './introSkills'
import Skill from './skills'
import AboutMe from './AboutMe'
import React from 'react'
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className="layout">
        <Navbar />
        <Intro />

        

        <div className="content">
            { children }
        </div>

        <h2><b>Skills</b></h2>
        <Skill />
        
        <AboutMe />
        <footer>
            <p>Created using ReactJS and Gatsby SSG</p>
        </footer>


    </div>
  )
}
