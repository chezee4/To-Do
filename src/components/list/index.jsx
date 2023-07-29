import React, { useState } from "react";
import ItemList from "../item";
import { ListToDo } from "./styles";

const List = ({ data, setData }) => {
  const [id, setId] = useState(null);
  const [text, setText] = useState("");

  const Edit = (itemId, itemText) => {
    setId(itemId);
    setText(itemText);
  };
  const Enter = (e, itemId) => {
    if (e.key === "Enter") {
      const updatedItems = data.map((item) =>
        item.id === itemId ? { ...item, text: e.target.value } : item
      );
      setData(updatedItems);
      localStorage.setItem("data", JSON.stringify(updatedItems));
      setId(null);
    }
  };
  const handleKeyDown = (e) => {
    setText(e.target.value);
  };
  const DeleteItem = (itemId) => {
    const updatedItems = data.filter((item) => item.id !== itemId);

    setData(updatedItems);
    localStorage.setItem("data", JSON.stringify(updatedItems));
  };
  const renderItem = data.map((item) => (
    <ItemList
      item={item}
      value={text}
      handleKeyDown={handleKeyDown}
      Enter={Enter}
      Edit={Edit}
      DeleteItem={DeleteItem}
      id={id}
      data={data}
      setData={setData} 
    />
  ));

  return <ListToDo>{renderItem}</ListToDo>;
};

export default List;
