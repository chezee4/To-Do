import React, { useContext, useState } from "react";

import { DataContext } from "../../context";

import {
  TextContainer,
  Item,
  Input,
  Change,
  Delete,
  Tools,
  CheckBoxSpan,
  CheckBoxInput,
  CheckboxWrapper,
  Content,
  Label,
} from "./styles";
import Chips from "../chips";
import deleteicon from "./delete.svg";
import editicon from "./edit.png";

const ItemList = ({ item }) => {
  const [text, setText] = useState("");
  const [id, setId] = useState(null);
  const { data, setData } = useContext(DataContext);

  const editToDo = (itemId, itemText) => {
    setId(itemId);
    setText(itemText);
  };

  const sendingСhanges = (e, itemId) => {
    if (e.key === "Enter") {
      const updatedItems = data.map((item) =>
        item.id === itemId ? { ...item, text: e.target.value } : item
      );
      setData(updatedItems);
      setId(null);
    }
  };

  const handleKeyDown = (e) => {
    setText(e.target.value);
  };

  const deleteCase = (itemId) => {
    const updatedItems = data.filter((item) => item.id !== itemId);
    setData(updatedItems);
  };

  const idItem = item.id;
  const changeMarcker = () => {
    const newData = data.map((item) =>
      item.id === idItem ? { ...item, isChecked: !item.isChecked } : item
    );
    setData(newData);
  };

  return (
    <Item>
      <CheckboxWrapper>
        <Label>
          <CheckBoxInput
            type="checkbox"
            checked={item.isChecked}
            onChange={changeMarcker}
          />
          <CheckBoxSpan isChecked={item.isChecked} />
        </Label>
      </CheckboxWrapper>
      <Content>
        {id === item.id ? (
          <Input
            className="input"
            type="text"
            value={text}
            onChange={handleKeyDown}
            onKeyDown={(e) => sendingСhanges(e, item.id)}
          />
        ) : (
          <TextContainer isChecked={item.isChecked}>{item.text}</TextContainer>
        )}
        <Chips chips={item.chips || []} comparison={false} />
      </Content>
      <Tools>
        <Change onClick={() => editToDo(item.id, item.text)}>
          <img src={editicon} alt="fee" />
        </Change>
        <Delete onClick={() => deleteCase(item.id)}>
          <img src={deleteicon} alt="fefe" />
        </Delete>
      </Tools>
    </Item>
  );
};

export default ItemList;
