import React, {useEffect, useRef} from "react";
import Layout from "../Layout/Layout";
import "./About.scss";
import {postIntro, aboutIntro} from '../Animate';

function About() {
  let elem = useRef(null)
  let elem1 = useRef(null)

  useEffect(() => {
    postIntro(elem);
    aboutIntro(elem1)
  }, []);

  return (
    <Layout>
      <div className="About">
          <div ref={(el) => (elem = el)} className="quote">
        <p>
          <span id="quote">"</span><br />Intellectual growth should commence at birth
          and cease only at death.<br />
        </p>
        <p>- Albert Einstein</p>
        </div>
        <div ref={(el) => (elem1 = el)} className="AboutContent">
        <h2>Tools and Technologies</h2>
        <ul>
            <li>HTML <i className="fa fa-html5" /></li>
            <li>CSS <i className="fa fa-css3" /></li>
            <li>javascript <i className="fab fa-js" /></li>
            <li>Python <i className="fab fa-python" /></li>
            <li>React <i className="fab fa-react" /></li>
            <li>Wordpress <i className="fa fa-wordpress" /></li>
            <li>Git <i className="fab fa-git-alt" /></li> 
            <li>Gatsby</li>
            <li>Netlify</li>
            <li>Firebase</li>
            <li>Redux</li>
            <li>GraphQL</li>
            <li>GSAP</li>
            <li>Framer Motion</li>
            
        </ul>
        <p>I love learning new things always because it's the only way I get to create nicer and fancier things with my computer. I am a UI/UX enthusiast. I am interested in innovation and start-ups. I am also very interested in politics, physics, philosophy, psychology and <span>world domination</span>.</p>
        </div>
      </div>
    </Layout>
  );
}

export default About;
