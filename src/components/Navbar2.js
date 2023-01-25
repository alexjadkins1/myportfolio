import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <h1>alexjadkins</h1>
        <div className="links">
            
            <a href="/resume.pdf">Resume</a>
            <a href="https://www.linkedin.com/in/alexander-adkins-877622206/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <Link to="/">Home</Link>

        </div>
    </nav>
  )
}
