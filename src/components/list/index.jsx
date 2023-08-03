import React, { useContext } from "react";

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import ItemList from "../item";
import { ListToDo } from "./styles";

import { DataContext } from "../../context";

const List = () => {
  const { data } = useContext(DataContext);

  return (
    <ListToDo>
      <TransitionGroup>
          {data.map((item) => (
             <CSSTransition
              key={item.id}
              timeout={500}
              classNames="item"
           >
            <ItemList item={item} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </ListToDo>
  );
};

export default List;
