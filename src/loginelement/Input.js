import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const {
    label,
    placeholder,
    _onChange,
    type,
    value,
    autoComplete,
    height,
    id = "",
    clickColor,
    disabled,
    fontSize,
    padding,
  } = props;

  const styles = {
    clickColor: clickColor,
    height: height,
    fontSize: fontSize,
    padding: padding,
  };

  return (
    <>
      <SmallText>{label}</SmallText>
      <InputField
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={_onChange}
        value={value}
        disabled={disabled}
        autoComplete={autoComplete}
        {...styles}
      />
    </>
  );
};

const SmallText = styled.small`
  color: white;
  display: flex;
  flex-direction: column;
  float: left;
`;

const InputField = styled.input`
  ::placeholder{color: white}
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #ccc;
  color: white;
  margin: 10px 0px;
  box-sizing: border-box;
  padding: 10px 0px;
  position: relative;
  ${(props) => (props.width ? `width: ${props.width};` : `width: 100%;`)};
  ${(props) => (props.height ? `height: ${props.height};` : `height: 30px;`)};
  ${(props) => (props.fontSize ? `font-size: ${props.fontSize};` : null)}
  ${(props) => (props.padding ? `padding: ${props.padding};` : null)}

  &:focus {
    outline: none;
    border-bottom: 2px solid #98ddca;
    transition-duration: 0.25s;
    ${(props) =>
      props.clickColor ? `color: ${props.clickColor}!important;` : ""};
  }
`;

export default Input;