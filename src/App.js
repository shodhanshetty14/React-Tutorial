import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";


function App() {
    const [myStyle, setMyStyle] = useState({
      color: 'black',
      backgroundColor: 'white'
    })

    const [btnText, setBtnText] = useState("Enable Dark Mode");

    const toggelMode = () => {
      if (myStyle.color === 'black') {
        setBtnText("Enable Light Mode");
        setMyStyle({
          color: 'white',
          backgroundColor: 'black',
        })

      }
      else{
        setBtnText("Enable Dark Mode");
        setMyStyle({
          color: 'black',
          backgroundColor: 'white',
        })
      }
    }

  return (
    <>
    <div style = {myStyle}>
      <Navbar title="TextUtils" />
      <button className="btn btn-primary " onClick={toggelMode}>
                {btnText}
              </button>
      {/* <Navbar /> */}
      <div className="container" style={myStyle}>
        <TextForm heading="Enter the Text to analyze" newStyle={myStyle} />
      </div>
      <About newStyle={myStyle} />
      </div>
    </>
  );
}

export default App;
