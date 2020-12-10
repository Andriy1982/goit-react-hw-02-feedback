import React, { Component } from 'react';
import Notification from '../Notification';

import PropTypes from 'prop-types';
import { List, Title, ListItem } from './StatisticStyledComponent';

export default class Statistic extends Component {
  static propTypes = {
    feedbackTotal: PropTypes.number.isRequired,
    feedbackPercentage: PropTypes.number.isRequired,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  };

  render() {
    const {
      feedbackTotal,
      feedbackPercentage,
      good,
      bad,
      neutral,
    } = this.props;

    if (!feedbackTotal) return <Notification message="No feedback given" />;
    else
      return (
        <section>
          <Title>Statistics</Title>
          <List>
            <ListItem>
              Good: <span>{good}</span>
            </ListItem>
            <ListItem>
              Neutral: <span>{neutral}</span>
            </ListItem>
            <ListItem>
              Bad: <span>{bad}</span>
            </ListItem>
            <ListItem>
              Total: <span>{feedbackTotal}</span>
            </ListItem>
            <ListItem>
              Positive feedback: <span>{feedbackPercentage} %</span>
            </ListItem>
          </List>
        </section>
      );
  }
}
