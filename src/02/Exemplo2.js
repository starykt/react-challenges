import { Link } from "react-router-dom";
import "./base.css";

const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "white",
    borderRadius: "30px",
    padding: "30px"
  },
};

export default function TodoList() {
  return (
    <div className="container">
      <Link to="/" className="btn-voltar">
        Voltar
      </Link>
      <div className="div-test">
        <div style={person.theme}>
          <h2>{person.name}'s Todos</h2>
          <img
            className="avatar"
            src="https://i.imgur.com/7vQD0fPs.jpg"
            alt="Gregorio Y. Zara"
          />

          <li class="la">Improve the videophone</li>
          <li class="la">Prepare aeronautics lectures</li>
          <li class="la">Work on the alcohol-fuelled engine</li>
        </div>
      </div>
    </div>
  );
}
