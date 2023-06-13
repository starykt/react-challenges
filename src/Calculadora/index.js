import React, { useState } from "react";
import "./Calculadora.css";
import menu from "../assets/menu.png"
import { Link } from "react-router-dom";

const Calculadora = () => {
  const [displayValue, setDisplayValue] = useState("");
  const [operation, setOperation] = useState("");
  const [clearDisplay, setClearDisplay] = useState(true);

  const addDigit = (digit) => {
    setDisplayValue((prevValue) =>
      prevValue === "0" || clearDisplay ? digit : prevValue + digit
    );
    setClearDisplay(false);
  };

  const clearAll = () => {
    setDisplayValue("");
    setOperation("");
    setClearDisplay(true);
  };

  const clearLastEntry = () => {
    setDisplayValue((prevValue) => prevValue.slice(0, -1));
  };

  const addOperation = (op) => {
    if (op === "%") {
      calculatePercentage();
    } else {
      setOperation(op);
      setDisplayValue((prevValue) => prevValue + " " + op + " ");
      setClearDisplay(false);
    }
  };

  const calculatePercentage = () => {
    try {
      const value = parseFloat(displayValue);
      const result = value / 100;
      setDisplayValue(result.toString());
    } catch (error) {
      console.error("Calculation Error:", error);
      setDisplayValue("Error");
    }
    setOperation("");
    setClearDisplay(true);
  };

  const calculateResult = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      console.error("Calculation Error:", error);
      setDisplayValue("Error");
    }
    setOperation("");
    setClearDisplay(true);
  };

  const changeSign = () => {
    setDisplayValue((prevValue) => {
      const lastSpace = prevValue.lastIndexOf(" ");
      const lastValue = prevValue.slice(lastSpace + 1);
      const newLastValue = parseFloat(lastValue) * -1;
      const newValue =
        prevValue.slice(0, lastSpace + 1) + newLastValue.toString();
      return newValue;
    });
  };

  return (
    <div className="container">
      <Link to="/" className="btn-voltar">
        Voltar
      </Link>
      <div className="div-test">
        <div className="centralizar">
          <div className="calculadora">
            <div className="menu">
              <img src={menu} alt="menu" />
          </div>
            <div className="display">{displayValue || "0"}</div>
            <div className="linha">
              <button
                className={
                  clearDisplay ? "operation" : "operation clean"
                }
                onClick={clearDisplay ? clearAll : clearLastEntry}
              >
                {clearDisplay ? "AC" : "C"}
              </button>
              <button className="operation" onClick={changeSign}>
                ±
              </button>
              <button
                className="operation"
                onClick={() => addOperation("%")}
              >
                %
              </button>
              <button
                className="calculator"
                onClick={() => addOperation("/")}
              >
                ÷
              </button>
            </div>
            <div className="linha">
              <button className="number" onClick={() => addDigit("7")}>
                7
              </button>
              <button className="number" onClick={() => addDigit("8")}>
                8
              </button>
              <button className="number" onClick={() => addDigit("9")}>
                9
              </button>
              <button
                className="calculator"
                onClick={() => addOperation("*")}
              >
                ×
              </button>
            </div>
            <div className="linha">
              <button className="number" onClick={() => addDigit("4")}>
                4
              </button>
              <button className="number" onClick={() => addDigit("5")}>
                5
              </button>
              <button className="number" onClick={() => addDigit("6")}>
                6
              </button>
              <button
                className="calculator"
                onClick={() => addOperation("-")}
              >
                −
              </button>
            </div>
            <div className="linha">
              <button className="number" onClick={() => addDigit("1")}>
                1
              </button>
              <button className="number" onClick={() => addDigit("2")}>
                2
              </button>
              <button className="number" onClick={() => addDigit("3")}>
                3
              </button>
              <button
                className="calculator"
                onClick={() => addOperation("+")}
              >
                +
              </button>
            </div>
            <div className="linha">
              <button
                className="number-zero"
                onClick={() => addDigit("0")}
              >
                0
              </button>
              <button className="number" onClick={() => addDigit(".")}>
                .
              </button>
              <button className="botao-igual" onClick={calculateResult}>
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculadora;
