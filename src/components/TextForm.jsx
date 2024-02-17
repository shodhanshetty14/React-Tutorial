import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(params) {
  const [text, setText] = useState("Enter Text here");

  // const wordCount = () =>{
    // let words = text.split(" ");
    // while ("" in words){
    //   let ind = words.indexOf("");
    //   words.splice(ind,1);
    //   console.log(words)
    // }
    // console.log(words)

  //   if (words.length<=1 && words[0] === ""){
  //     return 0;
  //   }
  //   if (words[0]==="" && words.length> 1){
  //     return words.length -1
  //   }
  //   if (words[-1]===""){
  //     return words.length -1
  //   }
  //   return words.length;
  // }

  const onChangeHandeler = (event) => {
    // console.log("onChangeHandeler called");
    setText(event.target.value);
  };

  const onClickUpHandeler = () => {
    // console.log("onclick Uppercase Handler called!");
    setText(text.toUpperCase());
    params.showAlert("Converted to Uppercase", "success")
  };

  const onClickLowHandeler = () => {
    // console.log("onclick Lowercase Handler called!");
    setText(text.toLowerCase());
    params.showAlert("Converted to Lowercase", "success")
  };

  const onClickClearHandeler = () => {
    // console.log("onclick Clear Handler called!");
    setText("");
    params.showAlert("Text Cleared", "success")
  };

  const selectionHaandeler = () => {
    var data = document.getElementById("exampleFormControlTextarea1");
    data.select();
    
  };

  const onClickCopyHandeler = () => {
    var data = document.getElementById("exampleFormControlTextarea1");
    data.select();
    navigator.clipboard.writeText(data.value);
    params.showAlert("Text Copied to Clipboard", "success")
  };



  return (
    <>
    <div className="container" style={params.newStyle}>
      <h1>{params.heading}</h1>
      <div style={params.newStyle}>
        <textarea
        style={params.newStyle}
          className="form-control my-2"
          value={text}
          onClick={selectionHaandeler}
          onChange={onChangeHandeler}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div> 
      <button  className="btn btn-primary mx-2 my-1" onClick={onClickUpHandeler}>
        Convert to upperCase
      </button>
      <button  className="btn btn-primary mx-2 my-1" onClick={onClickLowHandeler}>
        Convert to lowerCase
      </button>
      <button  className="btn btn-primary mx-2 my-1" onClick={onClickClearHandeler}>
        Clear
      </button>
      <button  className="btn btn-primary mx-2 my-1" onClick={onClickCopyHandeler}>
        Copy Text
      </button>

    </div>

    <div className="container" style={params.newStyle}>
        <h1>Your Text Summary: </h1>
        <p>{text.split(" ").filter((elem)=>{return elem !==0}).length} words and {text.length} characters.</p>
        {/* <p>{wordCount()} words and {text.length} characters.</p> */}
        <p>time taken to read: {0.008 * text.split(" ").length} minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter your Text above to preview"}</p>
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
