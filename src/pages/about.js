import * as React from 'react'
import Layout from '../components/layout'
const AboutPage = () => {
    return (
       <Layout pageTitle="About Me">
            <p>Hi, I am Abbey, a software engineer.</p>
       </Layout>
    )
}

export const Head = () => <title>About Me </title>
export default AboutPage