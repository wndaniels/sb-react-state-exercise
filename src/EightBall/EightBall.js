import React, { useState } from "react";
import "./EightBall.css";

const choice = (arr) => {
  const randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
};

const EightBall = (props) => {
  const [msg, setMsg] = useState("Think of a question.");
  const [color, setColor] = useState("black");

  const handleClick = () => {
    const { msg, color } = choice(props.answers);
    setMsg(msg);
    setColor(color);
  };

  return (
    <div className="EightBall">
      <div
        className="EightBall-body"
        onClick={handleClick}
        style={{ backgroundColor: color }}
      >
        <b>{msg}</b>
      </div>
    </div>
  );
};

export default EightBall;
