// import logo from './logo.png';
import "./Result.css";
import person from "../../assets/person.png";

function Result(props) {
  return (
    <div className="box-result">
      <div className="Result" style={{ display: props.isShown ? "" : "none" }}>
        <div className="box-image">
          <img src={person} className="person-img" alt="logo" />
        </div>
        <p>Ningún mensaje fue encontrado</p>
        <p>Ingresa el texto que desees encriptar o desencriptar.</p>
      </div>
      <div
        className="text-result"
        style={{ display: props.isShown ? "none" : "" }}
      > <h2>{props.setTitle}</h2>
        <h3>{props.setPropText}</h3>
      </div>
    </div>
  );
}

export default Result;
