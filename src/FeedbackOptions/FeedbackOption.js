import React from 'react';
import PropTypes from 'prop-types';
import Button from "../Button"
import {Container} from "./FeedbackOptionStyledComponent";


function FeedbackOption({ options, onButtonClick }) {
  const [good, neutral, bad] = options;

  return (
    <Container>
        <Button name = {good} callBack ={onButtonClick}/>
        <Button name = {neutral} callBack ={onButtonClick}/>
        <Button name = {bad} callBack ={onButtonClick}/>
    </Container>
  );
}

FeedbackOption.defaultProps = {
  options: ['good', 'neutral', 'bad'],
};

FeedbackOption.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};


export default FeedbackOption;