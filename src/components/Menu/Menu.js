import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { menuShow, menuHide, staggerLinks } from "../Animate";
import"./Menu.scss";
import { Link } from "gatsby";

function Menu({ state }) {
  let menuWrapper = useRef(null);
  let show1 = useRef(null);
  let show2 = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      menuHide(show2, show1);
      // Set menu to display none
      gsap.to(menuWrapper, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuWrapper, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([show1, show2], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      menuShow(show1, show2);
      staggerLinks(line1, line2, line3);
    }
  }, [state]);

  return (
    <div ref={(el) => (menuWrapper = el)} className="hamburgerMenu">
      <div ref={(el) => (show1 = el)} className="menuBackground" ></div>
      <div ref={(el) => (show2 = el)} className="menuLayer" >
        <div className="menuLinks">
          <nav>
            <ul>
              <li ref={(el) => (line1 = el)}>About</li>
              <Link to="/blog" ><li ref={(el) => (line2 = el)}>Blog</li></Link>
              <li ref={(el) => (line3 = el)}>Contact</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Menu;
