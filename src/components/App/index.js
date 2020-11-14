import React, { useState } from "react";
import Button from "../Button";
import comma from "../utils/comma";
import "./App.css";

const App = () => {
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

  const buttonClickHandler = (content) => () => {
    const num = parseFloat(value);

    if (content === "C") {
      setValue("0");
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === "+/-") {
      setValue((num * -1).toString());
      return;
    }

    if (content === "%") {
      setValue((num / 100).toString());
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === ".") {
      if (value.includes(".")) return;

      setValue(value + ".");
      return;
    }

    if (content === "+") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("+");
      return;
    }
    if (content === "−") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("−");
      return;
    }
    if (content === "×") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("×");
      return;
    }
    if (content === "÷") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("÷");
      return;
    }

    if (content === "=") {
      if (!operator) return;

      if (operator === "+") {
        setValue((memory + parseFloat(value)).toString());
      } else if (operator === "−") {
        setValue((memory - parseFloat(value)).toString());
      } else if (operator === "×") {
        setValue((memory * parseFloat(value)).toString());
      } else if (operator === "÷") {
        setValue((memory / parseFloat(value)).toString());
      }
      setMemory(null);
      setOperator(null);
      return;
    }

    if (value[value.length - 1] === ".") {
      setValue(value + content);
    } else {
      setValue(parseFloat(num + content).toString());
    }
  };

  return (
    <div className="App">
      <div className="header"></div>
      <div className="show">{comma(value)}</div>
      <div className="Buttons">
        <Button
          onBtnClick={buttonClickHandler}
          content="C"
          type="specialfunction"
        />
        <Button
          onBtnClick={buttonClickHandler}
          content="+/-"
          type="specialfunction"
        />
        <Button
          onBtnClick={buttonClickHandler}
          content="%"
          type="specialfunction"
        />
        <Button onBtnClick={buttonClickHandler} content="÷" type="operator" />
        <Button onBtnClick={buttonClickHandler} content="7" />
        <Button onBtnClick={buttonClickHandler} content="8" />
        <Button onBtnClick={buttonClickHandler} content="9" />
        <Button onBtnClick={buttonClickHandler} content="×" type="operator" />
        <Button onBtnClick={buttonClickHandler} content="4" />
        <Button onBtnClick={buttonClickHandler} content="5" />
        <Button onBtnClick={buttonClickHandler} content="6" />
        <Button onBtnClick={buttonClickHandler} content="−" type="operator" />
        <Button onBtnClick={buttonClickHandler} content="1" />
        <Button onBtnClick={buttonClickHandler} content="2" />
        <Button onBtnClick={buttonClickHandler} content="3" />
        <Button onBtnClick={buttonClickHandler} content="+" type="operator" />
        <Button onBtnClick={buttonClickHandler} content="0" />
        <Button onBtnClick={buttonClickHandler} content="." />
        <Button onBtnClick={buttonClickHandler} content="=" type="operator" />
      </div>
    </div>
  );
};

export default App;
