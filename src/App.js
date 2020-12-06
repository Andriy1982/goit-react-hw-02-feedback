import React, { Component } from 'react';

import Section from './Section';
import FeedbackOption from './FeedbackOptions';
import Statistics from './Statistics';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = e => {
    const { name } = e.target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = total => {
    return Math.round((this.state.good * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const feedbackTotal = this.countTotalFeedback();
    const feedbackPercentage = this.countPositiveFeedbackPercentage(
      feedbackTotal,
    );
    return (
      <Section title="Please leave feedback">
        <FeedbackOption
          options={['good', 'neutral', 'bad']}
          onButtonClick={this.handleButtonClick}
        />
        <Statistics
          feedbackTotal={feedbackTotal}
          feedbackPercentage={feedbackPercentage}
          good={good}
          neutral={neutral}
          bad={bad}
        />
      </Section>
    );
  }
}
