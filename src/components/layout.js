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
        <Skill />
        
        <div className="content">
            { children }
        </div>

        
        <footer>
            <p text-align='center'>Created using ReactJS and Gatsby SSG</p>
        </footer>


    </div>
  )
}
