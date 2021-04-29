import React from "react";
import Layout from "../Layout/Layout";
import "./About.scss";

function About() {
  return (
    <Layout>
      <div className="About">
          <div className="quote">
        <p>
          <span id="quote">"</span><br />Intellectual growth should commence at birth
          and cease only at death.<br />
        </p>
        <p>- Albert Einstein</p>
        </div>
        <div className="AboutContent">
        <h2>Tools and Technologies</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>javascript</li>
            <li>Python</li>
            <li>React</li>
            <li>Wordpress</li>
            <li>Gatsby</li>
            <li>Netlify</li>
            <li>Git</li>
            <li>Firebase</li>
            <li>Redux</li>
            <li>GraphQL</li>
            <li>GSAP</li>
            <li>Framer Motion</li>
            
        </ul>
        <p>I am passionate about learning new things always because it's the only way I get to create nicer and fancier things with my computer. I value good UI/UX. I am interested in innovation and start-ups. I am also very interested in physics, philosophy and psychology.</p>
        </div>
      </div>
    </Layout>
  );
}

export default About;
