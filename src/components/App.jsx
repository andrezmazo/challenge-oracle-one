import logo from "../assets/logo.png";
import exclamation from "../assets/exclamation.png";
import "./App.css";
import Result from "./Result/Result.jsx";

function App() {

  var keyString = ""

 const onSearch = (e) => {
  keyString = e.target.value
  console.log(keyString)
 }



  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="box-main">
        <div className="box-section">
          <div className="box-input">
            <input
              type="text"
              className="input-text"
              onChange={onSearch}
              placeholder="ingrese texto aquí"
            ></input>
            <div className="box-warning">
              <img src={exclamation} alt="" srcset="" className="exclamation" />
              <p>Solo letras minúsculas y sin acentos</p>
            </div>
            <div className="box-buttons">
              <button type="button" className="primary-button">
                Encriptar
              </button>

              <button type="button" className="secondary-button">
                Desencriptar
              </button>
            </div>
          </div>
        </div>
        <Result />  
      </div>
    </div>
  );
}

export default App;
