import React, {useRef, useEffect} from "react";
import "./Contact.scss";
import Layout from "../Layout/Layout";
import contactImage from "../../images/manhattan.jpg";
import {postIntro} from '../../components/Animate';

function Contact() {
    let elem = useRef(null)

    useEffect(() => {
      postIntro(elem);
    }, []);
  return (
    <Layout>
      <div className="Contact" ref={(el) => (elem = el)}>
        <img src={contactImage} alt="Dr Manhattan" />
        <div className="ContactContent">
          <h2>Wanna talk?</h2>
          <p>
            Got an interesting idea for a project? I'm currently availaible for
            consultation and work. <span><a href="mailto: nathanagusa@gmail.com">Shoot me an email</a></span> and I'll
            respond within 24 hours.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
