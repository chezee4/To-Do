import styled from "styled-components";

export const InputChipsContainer = styled.div` 
  min-height: 36px;
  margin-top: 20px;
  line-height: 1;
  font-size: 1em;
  box-shadow: 0 1px 3px rgba( 0, 0, 0.1);
  border-radius:15px;
  background:transparent;
  &,& * {
    cursor: pointer;
  }
  ` 
export const InputChipsText = styled.input` 
    display: inline-block;
    max-width: 140px;
    background: transparent;
    color: #fff;
    min-height: 36px;
    padding: 15px 0px 15px 18px;
    column-rule-color: #fff;
    border: 0;
    outline: none;
    font-size: 1.2rem;
  `