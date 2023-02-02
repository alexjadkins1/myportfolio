import React from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function Navbar() {
  return (
    <nav>
        <h1>alexjadkins</h1>
        <div className="links">
            
            <a href="/resume.pdf">Resume</a>
            <AnchorLink to="/#proj" title="Projects">
              Projects
            </AnchorLink>
            <AnchorLink to="/#skills" title="Skills">
              Skills
            </AnchorLink>
            <a href="https://github.com/alexjadkins1" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://www.linkedin.com/in/alexander-adkins-877622206/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            

        </div>
    </nav>
  )
}
