import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


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
    <BrowserRouter>
    <div style = {myStyle}>
      <Navbar title="TextUtils" />
      <Alert alert ={alert} />
      <button className="btn btn-primary " onClick={toggelMode}>
                {btnText}
              </button>
      {/* <Navbar /> */}
      <Routes>
      <Route exact path="/" element={        <div className="container" style={myStyle}>
          <TextForm showAlert={showAlert} heading="Enter the Text to analyze" newStyle={myStyle} />
        </div>} />
        {/* <div className="container" style={myStyle}>
          <TextForm showAlert={showAlert} heading="Enter the Text to analyze" newStyle={myStyle} />
        </div> */}
      <Route exact path="/about" element={<About />} />
        {/* <About newStyle={myStyle} /> */}
      </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
