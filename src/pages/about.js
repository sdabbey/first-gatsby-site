import * as React from 'react'
import { Link } from 'gatsby'
const AboutPage = () => {
    return (
        <main>
            <h1>About Me</h1>
            <p>Hi, I am Abbey, a software engineer.</p>
            <Link to="/">Back to Home</Link>
        </main>
    )
}

export const Head = () => <title>About Me </title>
export default AboutPage