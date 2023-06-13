import { people } from "./data.js";
import { getImageUrl } from "./utils.js";
import { Link } from "react-router-dom";
import "./base.css";

export default function List() {
  const listItems = people.map((person) => (
    <li className="people-list" key={person.id}>
      <div className= "card">
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </div>
    </li>
  ));
  return (
    <div className="container">
      <div className="div-test">
          <h1>Scientists</h1>
        <article className="centralizar">
          {listItems}
        </article>
      </div>
      <Link to="/" className="btn-voltar">
        Voltar
      </Link>
    </div>
  );
}
