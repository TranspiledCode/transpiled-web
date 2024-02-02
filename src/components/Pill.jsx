import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const PillContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.1;
  padding: 5px 10px;
  border-radius: 10px;
  min-width: 50px;
  background-color: ${(props) => props.theme.neutral};
  color: ${(props) => props.theme.text};
  font-size: 1.3rem;
  text-align: center;

  &:hover {
    color: ${(props) => props.theme.background};
  }
`;

const Pill = ({ text }) => <PillContainer>{text}</PillContainer>;

Pill.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Pill;
