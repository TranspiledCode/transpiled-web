// ToggleSwitch
import React, { useState } from 'react';
import styled from '@emotion/styled';
import withRotation from '../utils/withRotation';

// Define default colors
const defaultBarColor = '#a8a8a8';
const defaultKnobColor = '#545454';

const Switch = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  width: 25px;
  height: 5px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) =>
    props.backgroundColor ?? props.theme?.text ?? defaultBarColor};
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 15px;
    width: 15px;
    left: -4px;
    bottom: -5px;
    background-color: ${(props) =>
      props.knobColor ?? props.theme?.primaryColor ?? defaultKnobColor};
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider}:before {
    transform: translateX(17px);
  }
`;

const ToggleSwitch = ({ onToggle, backgroundColor, knobColor, rotation }) => {
  const [isToggled, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!isToggled);
    if (onToggle) {
      onToggle(!isToggled);
    }
  };

  // Apply rotation using the withRotation HOC
  const RotatedSwitch = withRotation(rotation, Switch);

  return (
    <RotatedSwitch>
      <Input type='checkbox' checked={isToggled} onChange={handleToggle} />
      <Slider backgroundColor={backgroundColor} knobColor={knobColor} />
    </RotatedSwitch>
  );
};

export default ToggleSwitch;
