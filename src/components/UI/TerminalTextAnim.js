import { useCallback, useEffect, useRef } from "react";
import classes from "./TerminalTextAnim.module.css";

const TerminalText = () => {
  const consoleContainer = useRef();
  const text = useRef();
  const consoleElem = useRef();

  const consoleText = useCallback((words, colors) => {
    if (colors === undefined) colors = ["#fff"];
    let visible = true;
    const con = consoleElem.current;
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    const target = text.current;
    target.setAttribute("style", "color:" + colors[0]);
    setInterval(() => {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        text.current.innerText = words[0].substring(0, letterCount);
        setTimeout(() => {
          let usedColor = colors.shift();
          colors.push(usedColor);
          let usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute("style", "color:" + colors[0]);
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        setTimeout(() => {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (waiting === false) {
        text.current.innerText = words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 120);
    setInterval(() => {
      if (visible === true) {
        con.className = "console-underscore hidden";
        visible = false;
      } else {
        con.className = "console-underscore";

        visible = true;
      }
    }, 400);
  }, []);

  useEffect(() => {
    consoleText(
      [
        "MERN Stack Developer",
        "Full Stack Developer",
        "Engineer",
        "Quick Learner",
      ],
      ["tomato", "green", "lightblue"]
    );
  }, [consoleText]);

  return (
    <div className={classes["console-container"]} ref={consoleContainer}>
      <span id={classes.id} ref={text}></span>
      <div
        className={classes["console-underscore"]}
        id="console"
        ref={consoleElem}
      >
        &#95;
      </div>
    </div>
  );
};

export default TerminalText;
