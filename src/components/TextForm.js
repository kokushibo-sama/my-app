import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase Button has been clicked");
    let newUpText = text.toUpperCase();
    setText(newUpText);
  };
  const handleLoClick = () => {
    // console.log("Uppercase Button has been clicked");
    let newLoText = text.toLowerCase();
    setText(newLoText);
  };
  const handleClearText = () => {
    // console.log("Uppercase Button has been clicked");
    let newClearText = "";
    setText(newClearText);
  };
  const handleOnChange = (event) => {
    // console.log("On Change has been changing");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter your text here");
  return (
    <>
      <div className="container">
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-warning mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-warning mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-warning mx-1" onClick={handleClearText}>
          Clear Text
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Text Summary</h3>
        <p>
          <span className="word-count">{text.split(" ").length}</span> Words and{" "}
          <span className="char-count">{text.length}</span> Characters
        </p>
        <p>
          This will took you{" "}
          <span className="time-count">{0.01 * text.split(" ").length}</span>{" "}
          minutes to read this paragraph
        </p>
        <h4>Preview</h4>
        <p>
          {text.length > 0
            ? text
            : "Enter something in textbox to preview it here"}
        </p>
      </div>
    </>
  );
}
