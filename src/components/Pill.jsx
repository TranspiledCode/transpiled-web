import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const PillContainer = styled.div`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 16px;
  min-width: 50px;
  background-color: ${(props) => props.theme.neutral};
  color: ${(props) => props.theme.text};
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`;

const Pill = ({ text }) => <PillContainer>{text}</PillContainer>;

Pill.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Pill;
