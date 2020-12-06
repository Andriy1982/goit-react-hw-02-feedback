import React from 'react';
import PropTypes from 'prop-types';
import {Container, Title} from './SectionStyledComponent';

const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;