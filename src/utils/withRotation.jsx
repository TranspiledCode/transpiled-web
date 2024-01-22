// withRotation HOC
import React from 'react';

function withRotation(degrees, WrappedComponent) {
  return function WithRotation(props) {
    const rotationStyles = {
      transform: `rotate(${degrees}deg)`,
    };

    return (
      <div style={rotationStyles}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withRotation;
