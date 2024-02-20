import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const transitionTime = '0.2s';

const ProgressBarContainer = styled.div`
  height: 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.white};
  border-radius: 2px;
  margin: 10px 0;
  position: relative;
  cursor: pointer;
`;

const ProgressBarFiller = styled.div`
  height: 100%;
  width: ${({ width }) => `${width}%`};
  background-color: ${({ theme }) => theme.primary};
  border-radius: 2px;
  transition: width ${transitionTime} ease-out;
`;

const Playhead = styled.div`
  width: 1rem;
  height: 1.8rem;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 2px;
  position: absolute;
  top: -4px;
  left: ${({ width }) => `calc(${width}% - 2px)`};
  transition: left ${transitionTime} ease-out;
  cursor: grab;
`;

const ProgressBar = ({ progress, onClick }) => (
  <ProgressBarContainer onClick={onClick}>
    <ProgressBarFiller width={progress} />
    <Playhead width={progress} />
  </ProgressBarContainer>
);

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

ProgressBar.defaultProps = {
  onClick: null,
};

export default ProgressBar;
