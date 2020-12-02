import React from 'react';
import Button from "../Button"
import {Container} from "./FeedbackOptionStyledComponent"

export default function FeedbackOption({ options, onButtonClick }) {
  const [good, neutral, bad] = options;

  return (
    <Container>
        <Button name = {good} callBack ={onButtonClick}/>
        <Button name = {neutral} callBack ={onButtonClick}/>
        <Button name = {bad} callBack ={onButtonClick}/>
    </Container>
  );
}
