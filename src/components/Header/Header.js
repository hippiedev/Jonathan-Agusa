import React, { useState, useEffect, useRef } from "react";
import "./Header.scss";
import Menu from "../Menu/Menu";
import { textIntro } from "../Animate";

function Header({ history }) {
  let logo = useRef(null);
  let menuText = useRef(null);
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);

  //When the component mounts
  useEffect(() => {
    textIntro(logo, menuText);
    //Listening for page changes.
    setState({ clicked: false, menuName: "Menu" });
  }, [history]);

  //toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  // check if out button is disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="Header">
        <div
          ref={(el) => (logo = el)}
          style={
            state.menuName === "Close"
              ? { color: "black", fontWeight: "bold" }
              : { color: "#fff" }
          }
          className="Logo"
        >
          AJ
        </div>
        <button
          style={
            state.menuName === "Close"
              ? { color: "black", fontWeight: "bold" }
              : { color: "#fff" }
          }
          disabled={disabled}
          ref={(el) => (menuText = el)}
          className="BurgerMenu"
          onClick={handleMenu}
        >
          {state.menuName}
        </button>
      </div>
      <Menu state={state} />
    </header>
  );
}

export default Header;
