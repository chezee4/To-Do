import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { DataContext } from "../../context";

import FormComponent from "../form";
import Header from "../header";
import List from "../list";

import "../../style/index.scss";

function App() {
  const [data, setData] = useState([[]]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data"));
    storedData.length
      ? setData(storedData)
      : setData([
          {
            id: uuidv4(),
            isChecked: false,
            text: "Поїсти",
            chips: [
              { id: uuidv4(), value: "#1" },
              { id: uuidv4(), value: "must-have" },
            ],
          },
          {
            id: uuidv4(),
            isChecked: false,
            text: "Поспати",
            chips: [
              { id: uuidv4(), value: "#1" },
              { id: uuidv4(), value: "must-have" },
            ],
          },
          {
            id: uuidv4(),
            isChecked: false,
            text: "Подивитись Фільм",
            chips: [{ id: uuidv4(), value: "пріоритет" }],
          },
          {
            id: uuidv4(),
            isChecked: false,
            text: "Ту-ту-ту!",
            chips: [
              { id: uuidv4(), value: "Ту-ту-ту!" },
              { id: uuidv4(), value: "ту-ту" },
            ],
          },
          {
            id: uuidv4(),
            isChecked: false,
            text: "A-B-F",
            chips: [{ id: uuidv4(), value: "D-U-W" }],
          },
          {
            id: uuidv4(),
            isChecked: false,
            text: "Q-I-R",
            chips: [{ id: uuidv4(), value: "E-O-0" }],
          },
        ]);
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  console.log(data);
  return (
    <DataContext.Provider value={{ data, setData }}>
      <div className="App">
        <div className="container">
          <Header />
          <FormComponent />
          <List />
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
