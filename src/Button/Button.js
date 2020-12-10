import React from 'react';
import PropTypes from 'prop-types';
import { ButtonFeedback } from './ButtonStyledComponent';

function Button({ name, callBack }) {
  return (
    <ButtonFeedback name={name} type="button" onClick={callBack}>
      {name}
    </ButtonFeedback>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  callBack: PropTypes.func,
};

export default Button;
