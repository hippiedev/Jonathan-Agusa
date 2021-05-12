import React, { useEffect, useRef } from "react";
import { textIntro } from "../Animate";
import Circle from '../RingAnimation/Circle';
import Layout from '../Layout/Layout';
import "./Home.scss";

function Home() {
  let textElem1 = useRef(null);
  let textElem2 = useRef(null);

  useEffect(() => {
    textIntro(textElem1, textElem2);
  }, []);
  return (
    <Layout>
      <div className="content_wrap">
        <div>
          <p ref={(el) => (textElem1 = el)}>
            Hey there!{" "}
            <span role="img" aria-label="wave">
              👋🏾
            </span>{" "}
            My name is Agusa Jonathan.
          </p>
          <p ref={(el) => (textElem2 = el)}>
            I am a{" "}
            <span style={{ color: "rgb(0, 255, 255)" }}>frontend engineer</span>
            .
          </p>
        </div>
        <Circle />
      </div>
      </Layout>
  );
}

export default Home;
