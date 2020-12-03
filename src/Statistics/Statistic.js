import React, {Component}from 'react';
import Notification from '../Notification';

import PropTypes from 'prop-types'
import {List, Title, ListItem } from './StatisticStyledComponent'

export default class Statistic extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        const {feedbackTotal,feedbackPercentage,good,bad,neutral} = this.props;
        return (
            <section>
          <Title>Statistics</Title>
          {!feedbackTotal ? (
            /* <p>
           "No feedback given"/
        </p> */
              <Notification message= "No feedback given"/>
          ) : (
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
                )}
            </section>
        )
          }
}
