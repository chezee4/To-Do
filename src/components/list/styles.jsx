import styled from "styled-components";


export const ListToDo = styled.ul`
  background-color: transparent;
  width: 100%;
  max-height: 500px;
  padding: 0px 30px 30px 30px;
  margin-top: 15px;
  padding-top: 15px;
  box-sizing: border-box;
  border: none;
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: transparent;
    border-radius: 60px;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 60px;
    background-color: #231e30;
  }
`;
