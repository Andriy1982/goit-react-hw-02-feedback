import React from 'react';
import PropTypes from 'prop-types';
import { Description } from './NotificationStyledComponent';

function Notification({ message }) {
  return <Description>{message}</Description>;
}

Notification.defaultProps = {
  message: 'No feedback given',
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
