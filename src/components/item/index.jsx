import React from "react";
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

const ItemList = ({
  item,
  value,
  handleKeyDown,
  Enter,
  Edit,
  DeleteItem,
  id,
  data,
  setData
}) => {


  const idItem = item.id;
  const changeMarcker = () => {
    const newData = data.map((item) =>
      item.id === idItem ? { ...item, isChecked: !item.isChecked } : item
    );
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData)); 
  };
  
  
  return (
    <Item key={item.id}>
      <CheckboxWrapper>
        <Label>
          <CheckBoxInput
            type="checkbox"
            checked={item.isChecked}
            onChange={changeMarcker}
          />
          <CheckBoxSpan  isChecked={item.isChecked}/>
        </Label>
      </CheckboxWrapper>
      <Content>
        {id === item.id ? (
          <Input
            className="input"
            type="text"
            value={value}
            onChange={handleKeyDown}
            onKeyDown={(e) => Enter(e, item.id)}
          />
        ) : (
          <TextContainer isChecked={item.isChecked}>{item.text}</TextContainer>
        )}
        <Chips chips={item.chips || []} />
      </Content>
      <Tools>
        <Change onClick={() => Edit(item.id, item.text)}>
          <img src={editicon} alt="fee" />
        </Change>
        <Delete onClick={() => DeleteItem(item.id)}>
          <img src={deleteicon} alt="fefe" />
        </Delete>
      </Tools>
    </Item>
  );
};

export default ItemList;
