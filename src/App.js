import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
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
        showAlert("Light Mode has been enabled", "success");

      }
      else{
        setBtnText("Enable Dark Mode");
        setMyStyle({
          color: 'black',
          backgroundColor: 'white',
        })
        showAlert("Dark Mode has been enabled", "success");
      }
    };

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
      setAlert({
        message: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    };

  return (
    <>
    <div style = {myStyle}>
      <Navbar title="TextUtils" />
      <Alert alert ={alert} />
      <button className="btn btn-primary " onClick={toggelMode}>
                {btnText}
              </button>
      {/* <Navbar /> */}
      <div className="container" style={myStyle}>
        <TextForm showAlert={showAlert} heading="Enter the Text to analyze" newStyle={myStyle} />
      </div>
      <About newStyle={myStyle} />
      </div>
    </>
  );
}

export default App;
