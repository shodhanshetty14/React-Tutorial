import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(params) {
  const [text, setText] = useState("Enter Text here");

  const onChangeHandeler = (event) => {
    // console.log("onChangeHandeler called");
    setText(event.target.value);
  };

  const onClickUpHandeler = () => {
    // console.log("onclick Uppercase Handler called!");
    setText(text.toUpperCase());
  };

  const onClickLowHandeler = () => {
    // console.log("onclick Lowercase Handler called!");
    setText(text.toLowerCase());
  };

  const onClickClearHandeler = () => {
    // console.log("onclick Clear Handler called!");
    setText("");
  };

  return (
    <>
    <div className="container">
      <h1>{params.heading}</h1>
      <div>
        <textarea
          className="form-control my-2"
          value={text}
          onChange={onChangeHandeler}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={onClickUpHandeler}>
        Convert to upperCase
      </button>
      <button className="btn btn-primary mx-2" onClick={onClickLowHandeler}>
        Convert to lowerCase
      </button>
      <button className="btn btn-primary mx-2" onClick={onClickClearHandeler}>
        Clear
      </button>
      {/* <button className="btn btn-primary" onClick={onClickHandeler}></button> */}
    </div>

    <div className="container">
        <h1>Your Text Summary: </h1>
        <p>{text.split(" ").length} words and {text.length} characters.</p>
        <p>time taken to read: {0.008 * text.split(" ").length} minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
TextForm.defaultProps = {
  heading: "Set the Heading!",
};
