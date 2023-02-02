import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import * as styles from '../styles/home.module.css'
import * as pstyles from '../styles/projects.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const IndexPage = ({ data }) => {
  console.log(data)
  const projects = data.allMarkdownRemark.nodes

  return (

    
    <Layout>

      <section className={styles.header}>
      
      <div id="proj">

 
        <h3><b>Projects</b></h3>
        <div className={pstyles.projects}>
            
            {projects.map(project => (
             

             <proj>
              <div>
                <nav>
                <type>{project.frontmatter.type}</type>
                <date>{project.frontmatter.date}</date>
                </nav>
                <h3>{project.frontmatter.title}</h3>
                
                <div>
                  <a href={project.frontmatter.url} target="_blank" rel="noopener noreferrer">
                    <GatsbyImage className = {pstyles.picture} image = {getImage(project.frontmatter.image)}/>
                  </a>
                </div>

                <br></br>
                <br></br>
                
                <p>{project.frontmatter.text}</p>  
              </div>
              </proj>
            ))}
        </div>
      </div>

      </section>
    </Layout>
  )
}

//export page query
export const query = graphql`
query Projects {
  allMarkdownRemark (sort: {frontmatter: {date: DESC}}){
   nodes{
     html
     frontmatter{
       title
       type
       text
       url
       date
       image {
        childImageSharp {
          gatsbyImageData(
            height: 550,
            width: 900, 
            blurredOptions: {width: 100},
            placeholder: BLURRED,
            transformOptions: {cropFocus:CENTER},
          )
        }
      }
     }
     id
   }
 }
 }`


export const Head = () => (
  <>
    <title>alexjadkins portfolio</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
  </>
)
export default IndexPage