import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";

export function Menu() {
  return (

      <div className="all">
          <div className="card-menu">
            <h3 className="title">Primeiros passos</h3>
            <Link to="/datatime" className="links">
              Data e hora
            </Link>
            <Link to="/letreiro" className="links">
              Letreiro
            </Link>
            <Link to="/contador" className="links">
              Contador
            </Link>
          </div>

          <div className="card-menu">
            <h3 className="title">Aula 2</h3>
            <Link to="/gallery2" className="links">
             Gallery
            </Link>
            <Link to="/todolist" className="links">
              Todolist
            </Link>
          </div>

          <div className="card-menu">
            <h3 className="title">Aula 3</h3>
            <Link to="/toolbar" className="links">
              Toolbar
            </Link>
            <Link to="/gallery" className="links">
              Gallery
            </Link>
            <Link to="/count" className="links">
              Count
            </Link>
            <Link to="/form" className="links">
              Form
            </Link>
            <Link to="/movingDot" className="links">
              MovingDot
            </Link>
            <Link to="/form2" className="links">
              Form2
            </Link>
            <Link to="/form3" className="links">
              Form3
            </Link>
            <Link to="/list" className="links">
             List
            </Link>
            <Link to="/list2" className="links">
              List2
            </Link>
            <Link to="/shapeEditor" className="links">
             ShapeEditor
            </Link>
            <Link to="/counterList" className="links">
              CounterList
            </Link>
            <Link to="/list3" className="links">
              List3
            </Link>
            <Link to="/list4" className="links">
              List4
            </Link>
            <Link to="/bucketList" className="links">
             BucketList
            </Link>
          </div>

          <div className="card-menu">
            <h3 className="title">Aula 4</h3>
            <Link to="/city" className="links">
              Exemplo 1: City quiz
            </Link>
            <Link to="/ticket" className="links">
              Exemplo 2: Form Ticket
            </Link>
            <Link to="/accordion" className="links">
              Exemplo 3: Componente Accordion
            </Link>
            <Link to="/contact" className="links">
              Exemplo 4: Contact list
            </Link>
          </div>

          <div className="card-menu">
            <h3 className="title">Aula 5</h3>
            <Link to="/calculadora" className="links">
              Calculadora
            </Link>
          </div>

          <div className="card-menu">
            <h3 className="title">Aula 6</h3>
            <Link to="/memoria" className="links">
              Memory Game
            </Link>
          </div>
    </div>

  );
}
