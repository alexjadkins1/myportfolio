// Step 1: Import React
import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import * as styles from '../styles/home.module.css'
import * as pstyles from '../styles/projects.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// Step 2: Define your component
const IndexPage = ({ data }) => {
  console.log(data)
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <section className={styles.header}>
      
      <div>
        <h3>Hello there!</h3>
        <p>I'm Alex Adkins, a recent computer science graduate.</p>
        <p>Here is a compiled list of different projects I've worked on.</p>
        
        

        <h3><b>Projects</b></h3>
        <div className={pstyles.projects}>
            
            {projects.map(project => (
             

              <div>
                <nav>
                <type>{project.frontmatter.type}</type>
                <date>{project.frontmatter.date}</date>
                </nav>
                <h3>{project.frontmatter.title}</h3>
                
                <div className={pstyles.picture}>
                  <a href={project.frontmatter.url} target="_blank" rel="noopener noreferrer">
                    <GatsbyImage image = {getImage(project.frontmatter.image)}/>
                  </a>
                </div>

                <br></br>
                <br></br>
                
                <p>{project.frontmatter.text}</p>  
              </div>

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
            height: 200,
            width: 400, 
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


export const Head = () => <title>alexjadkins portfolio</title>

export default IndexPage