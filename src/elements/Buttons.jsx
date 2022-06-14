import React from 'react';
import styled from 'styled-components';

function Buttons(props) {
    const {
        width,
        height,
        children,
        bg,
        _onClick,
        is_circle,
        size,
        is_animation,
        is_disabled,
    } = props;

    const styles = {
        width,
        height,
        bg,
        is_circle,
        size,
        is_animation,
        is_disabled,
    };

    return (
        <Btn {...styles} onClick={_onClick} disabled={is_disabled}>
            {children}
        </Btn>
    );
}

Buttons.defaultProps = {
    width: '100%',
    height: '30px',
    text: '버튼',
    bg: '#ffffff',
    _onClick: () => { },
    is_circle: null,
    size: '14px',
    is_animation: null,
    is_disabled: false,
};

const Btn = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bg};
  border: solid;
  color: #f9b937;
  font-weight: 850;
  padding: 0 10px;
    cursor: pointer;
  ${(props) =>
        props.is_circle ? `border-radius: 50%;` : `border-radius: 5px;`}
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.size};
  ${(props) =>
        props.is_animation
            ? `
  transition-duration: 0.5s;
  &:hover {
    transform: rotate(180deg);
  }
  `
            : ''};
  ${(props) => (props.is_disabled ? 'opacity:.3;' : 'opacity:1;')}
`;
export default Buttons;
