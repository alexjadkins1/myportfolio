import React from 'react'
import compGIF from '../gifs/cannonComp.gif'

export default function Intro() {
    return (

       
        <intro>
                    
                    
            <greeting>
                <h3>Hello there!</h3><br></br>
                <p>I'm Alexander Adkins, a software engineer. <br></br> 
                Here's a compilation of projects I've worked on.</p>
            </greeting>

            <gif>
                <img class="animated-gif" src={compGIF} alt="Cannonball the Clown using the computer"/>
            </gif>
                  
        </intro>

    )

}