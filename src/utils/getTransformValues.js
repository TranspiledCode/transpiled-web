// src/utils/getTransformValues.js

/**
 * Determines the initial and final transform values based on the direction.
 *
 * @param {string} direction - The direction of the animation ('up', 'down', 'left', 'right').
 * @param {string} customInitialTransform - If passed, use this as the initial transform.
 * @param {string} customFinalTransform - If passed, use this as the final transform.
 * @returns {object} - The initial and final transform values.
 */
const getTransformValues = (
  direction,
  customInitialTransform,
  customFinalTransform,
) => {
  const transforms = {
    up: { initial: 'translateY(50px)', final: 'translateY(0)' },
    down: { initial: 'translateY(-50px)', final: 'translateY(0)' },
    left: { initial: 'translateX(50px)', final: 'translateX(0)' },
    right: { initial: 'translateX(-50px)', final: 'translateX(0)' },
  };

  const defaultTransforms = transforms[direction] || transforms['up'];

  return {
    initialTransform: customInitialTransform || defaultTransforms.initial,
    finalTransform: customFinalTransform || defaultTransforms.final,
  };
};

export default getTransformValues;
