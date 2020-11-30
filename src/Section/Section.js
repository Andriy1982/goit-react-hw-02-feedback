import React from 'react';
import {Container, Title} from './SectionStyledComponent'

const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export default Section;