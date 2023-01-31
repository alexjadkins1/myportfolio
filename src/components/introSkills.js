import React from 'react'
import compGIF from '../gifs/cannonComp.gif'
import * as styles from '../styles/home.module.css'

export default function Intro() {
    return (

       
        <intro>
                    
                    
            <greeting>
                <h3>Hello there!</h3><br></br>
                <p>I'm Alex Adkins, a recent computer science graduate. <br></br> 
                Here's a compiled list of projects I've worked on.</p>
            </greeting>

            <gif>
                <date><img src={compGIF} alt="Cannonball the Clown using the computer"/></date>
            </gif>
                  
        </intro>

    )

}