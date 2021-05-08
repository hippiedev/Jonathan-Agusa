import React, { useEffect, useRef } from "react";
import "./Footer.scss";
import { linkIntro } from "../Animate";

function Footer() {
  let myElement1 = useRef(null);
  let myElement2 = useRef(null);
  let myElement3 = useRef(null);
  let myElement4 = useRef(null);

  useEffect(() => {
    linkIntro(myElement1, myElement2, myElement3, myElement4);
  }, []);

  return (
    <div className="Footer">
      <ul>
        <a href="https://twitter.com/agusajonathan">
          <li ref={(el) => (myElement1 = el)}>
            <i className="fa fa-twitter" />
          </li>
        </a>
        <a href="https://linkedin.com/in/jonathan-a-2376b4173/">
          {" "}
          <li ref={(el) => (myElement2 = el)}>
            <i className="fa fa-linkedin" />
          </li>
        </a>
        <a href="https://github.com/hippiedev">
          <li ref={(el) => (myElement3 = el)}>
            <i className="fa fa-github" />
          </li>
        </a>
        <a href="https://jonathanagusa.medium.com/">
          <li ref={(el) => (myElement4 = el)}>
            <i className="fa fa-medium" />
          </li>
        </a>
      </ul>
      <p>&copy; 2021 Agusa Jonathan</p>
    </div>
  );
}

export default Footer;
