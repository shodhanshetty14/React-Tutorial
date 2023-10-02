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
    <div>
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
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
TextForm.defaultProps = {
  heading: "Set the Heading!",
};