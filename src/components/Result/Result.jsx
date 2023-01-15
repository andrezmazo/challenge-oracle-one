// import logo from './logo.png';
import "./Result.css";
import person from "../../assets/person.png";

function Result() {
  return (
    <div className="box-result">
      <div className="Result">
        <div className="box-image">
          <img src={person} className="person-img" alt="logo" />
        </div>
        <p>Ningún mensaje fue encontrado</p>
        <p>Ingresa el texto que desees encriptar o desencriptar.</p>
      </div>
    </div>
  );
}

export default Result;
