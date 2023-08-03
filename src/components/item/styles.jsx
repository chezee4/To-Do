import styled, { css } from 'styled-components';



export const Item = styled.li`
    position: relative;
	display: flex;
	align-items: center;
    padding-bottom: 5px;
    border-bottom: 1px solid #1b1b1bd6;
    min-height: 50px;
    
    &:not(:last-child){
        margin-bottom:30px;
    }
`;
export const CheckboxWrapper = styled.div`

`

export const Input = styled.input`
	font-size: 18px;
	color: rgb(218, 219, 217);
	background-color: inherit;
    width: 300px;
	border: none;
	padding: 15px 10px 15px 10px;
	text-decoration: none;
    word-wrap: break-word;
    outline:none;

`;
export const Tools = styled.div`
    position: absolute;
    right: 0;
    
    top: 0;
	max-width: 80px;
	display: flex;
	justify-content: space-between;
    
`;

 export const Delete = styled.button`
    position: relative;
    z-index:999;
    padding: 7px 10px;
    border: none;
    background-color: rgba(100,77,237,0.08);
    border-radius: 100%;
    transition: all 0.25s linear;
    cursor: pointer;
    &:hover{
        transform:translateY(-5px);
    }
    img{
        transition: all 0.25s linear;

    }
    &:hover img{
      
       filter: hue-rotate(74deg);
    }
    
 `;
  export const Change = styled.button`
    padding: 7px 10px;
    border: none;
    background-color: rgba(100,77,237,0.08);
    border-radius: 100%;
    margin-right:5px;
    transition: all 0.25s linear;
    cursor: pointer;
    &:hover{
        transform:translateY(-5px);
    }
    img{
        max-width:25px;
        max-height:25px;
        transition: all 0.25s linear;
         
    }
    &:hover img{
      
            filter: hue-rotate(74deg);
    }
`;
export const TextContainer = styled.p`
    word-wrap: break-word;
    color: white;
    line-height: 1.6;
    font-size: 17px;
    text-decoration: ${(props) => (props.isChecked ? "line-through" : "none")};
    
`;

export const Content = styled.div`
    max-width: 300px;
    margin-inline:15px;
`
export const Label = styled.label`
    display: block;
    width: 25px;
    height: 25px;
    cursor: pointer;
`;

export const CheckBoxSpan = styled.span`
  display: block;
  width: inherit;
  height: inherit;
  border: 3px solid #434343;
  border-radius: 6px;
  transition: all 0.3s;

  ${(props) =>
    props.isChecked &&
    css`
      transform: rotate(45deg) translate(-19px, 6px);
      width: 17px;
      height: 30px;
      margin-left: 20px;
      border-color: #d0c4c4;
      border-top-color: transparent;
      border-left-color: transparent;
      border-radius: 0;
    `}
`;


export const CheckBoxInput = styled.input`
   visibility: hidden;
    display: none;
    &:checked ~ ${CheckBoxSpan} {
        transform: rotate(45deg) translate(-19px,6px);
        width: 17px;
        height: 30px;
        margin-left: 20px;
        border-color: #d0c4c4;
        border-top-color: transparent;
        border-left-color: transparent;
        border-radius: 0;
    }
`;



    