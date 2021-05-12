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
    <Layout top="100px">
      <div className="About">
          <div ref={(el) => (elem = el)} className="quote">
        <p>
          <span id="quote">"</span><br />Up Is A Relative Construct. It Has No Intrinsic Value.<br />
        </p>
        <p>- Dr. Manhattan</p>
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
        <br/>
        <br/>
        <p>Check out my <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1Sos4sNx4X-gvVAo5HAdIlIDT_A1bL3Fc/view?usp=sharing"><span id="link">resume</span></a></p>
        <p>I love learning new things always because it's the only way I get to create nicer and fancier things with my computer. I am a UI/UX enthusiast. I am interested in innovation and start-ups. I am also interested in philosophy, psychology and <span>world domination</span>.</p>
        </div>
      </div>
    </Layout>
  );
}

export default About;
