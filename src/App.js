import React, { Component } from 'react';

import Section from './Section';
import FeedbackOption from './FeedbackOptions';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = e => {
      const {name} = e.target;
    console.log(name);
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
    //   console.log(total.reduce((acc, item ) => acc + item, 0));
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
        {/* <h2>Please Leave feedback</h2> */}
        {/* <section>
          <button type="button" onClick={() => this.handleButtonClick('good')}>
            Good
          </button>
          <button
            type="button"
            onClick={() => this.handleButtonClick('neutral')}
          >
            Neutral
          </button>
          <button type="button" onClick={() => this.handleButtonClick('bad')}>
            Bad
          </button>
        </section> */}
        <section>
          <h2>Statistics</h2>
          {!feedbackTotal ? (
            <p>No feedback given</p>
          ) : (
            <ul>
              <li>
                Good: <span>{good}</span>
              </li>
              <li>
                Neutral: <span>{neutral}</span>
              </li>
              <li>
                Bad: <span>{bad}</span>
              </li>
              <li>
                Total: <span>{feedbackTotal}</span>
              </li>
              <li>
                Positive feedback: <span>{feedbackPercentage} %</span>
              </li>
            </ul>
          )}
        </section>
      </Section>
    );
  }
}
