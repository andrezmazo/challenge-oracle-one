import logo from "../assets/logo.png";
import React, { useState } from "react";
import exclamation from "../assets/exclamation.png";
import "./App.css";
import Result from "./Result/Result.jsx";

function App() {
  var inputText = "";
  var textSend =""


  const [isShown, setIsShown]= useState (true)
  const [setPropText,setNewText] = useState('')
  const [setTitle,setNewTitle] = useState('')
  
  const onSearch = (e) => {
    // inputText = e.target.value;
    setIsShown(true)
    console.log(inputText);
  };
  const Encrypt = (e) => {
    inputText= document.getElementsByClassName("input-text")[0].value
    inputText= inputText.toLocaleLowerCase()
    var textArray = inputText.split(""); 


    for (let i = 0; i < textArray.length; i++) {
      // contador=i
      switch (textArray[i]) {
        case "a":
          textArray[i] = "ai";
          break;
        case "e":
          textArray[i] = "enter";
          break;
        case "i":
          textArray[i] = "imes";
          break;
        case "o":
          textArray[i] = "ober";
          break;
        case "u":
          textArray[i] = "ufat";
          break;
        default:
          // sale =i
          break;
      }
      console.log(textArray.toString())
      textSend= textArray.toString().replaceAll(",","")
      console.log(textSend)
      setNewText(textSend)
      setIsShown(false)
      setNewTitle("¡Texto Encriptado!")
    }
  };
  const Decrypt = (e) => {
    inputText= document.getElementsByClassName("input-text")[0].value
    textSend= inputText.toLocaleLowerCase()
    console.log(textSend)
    textSend =textSend.replaceAll("ai","a")
    textSend =textSend.replaceAll("enter","e")
    textSend =textSend.replaceAll("imes","i")
    textSend =textSend.replaceAll("ober","o")
    textSend =textSend.replaceAll("ufat","u")
    console.log(textSend)
    setNewText(textSend)
    setIsShown(false)
    setNewTitle("¡Texto Desencriptado!")
  }

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="box-main">
        <div className="box-section">
          <div className="box-input">
            <input
              type="textarea"
              className="input-text"
              onChange={onSearch}
              placeholder="ingrese texto aquí"
            ></input>
            <div className="box-warning">
              <img src={exclamation} alt="" srcset="" className="exclamation" />
              <p>Solo letras minúsculas y sin acentos</p>
            </div>
            <div className="box-buttons">
              <button
                type="button"
                className="primary-button"
                onClick={Encrypt}
              >
                Encriptar
              </button>

              <button
                type="button"
                className="secondary-button"
                onClick={Decrypt}
              >
                Desencriptar
              </button>
            </div>
          </div>
        </div>
        <Result isShown={isShown} setPropText={setPropText} setTitle={setTitle}/>
      </div>
    </div>
  );
}

export default App;
