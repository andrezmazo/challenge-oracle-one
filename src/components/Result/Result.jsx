// import logo from './logo.png';
import "./Result.css";
import person from "../../assets/person.png";

function Result(props) {
  var copyText;
  const copyResult = async (e) => {
    // copyText =document.getElementsByClassName("text-encrypted")
    copyText = props.setPropText;
    try {
      await navigator.clipboard.writeText(copyText);
      alert("El texto ha sido copiado: " + copyText);
    } catch {
      console.error("Failed to copy");
    }
  };

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
      >
        {" "}
        <h2>{props.setTitle}</h2>
        <h3 className="text-encrypted">{props.setPropText}</h3>
        <button
          type="button"
          className="copy-button"
          onClick={copyResult}
          style={{ display: props.isShown ? "none" : "" }}
        >
          Copiar
        </button>
      </div>
    </div>
  );
}

export default Result;
