import { useEffect, useState } from "react";
import classes from "./TerminalTextAnim.module.css";

const TerminalText = () => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("white");
  const [consoleClasses, setConsoleClasses] = useState("");

  const consoleText = (words, colors) => {
    if (colors === undefined) colors = ["#fff"];
    let visible = true;
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    setColor(colors[0]);
    setInterval(() => {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        setText(words[0].substring(0, letterCount));
        setTimeout(() => {
          let usedColor = colors.shift();
          colors.push(usedColor);
          let usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          setColor(colors[0]);
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
        setText(words[0].substring(0, letterCount));
        letterCount += x;
      }
    }, 120);
    setInterval(() => {
      if (visible === true) {
        setConsoleClasses("hidden");
        visible = false;
      } else {
        setConsoleClasses("");
        visible = true;
      }
    }, 400);
  };
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
  }, []);
  return (
    <div className={classes["console-container"]}>
      <span id={classes.id} style={{ color: color }}>
        {text}
      </span>
      <div
        className={`${classes["console-underscore"]} ${classes[consoleClasses]}`}
        id="console"
      >
        &#95;
      </div>
    </div>
  );
};

export default TerminalText;
