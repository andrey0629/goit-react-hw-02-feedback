import { Component } from 'react';
import PropTypes from 'prop-types';

import { NotificationText } from './StyledComponents/Notification.styled';
class Notification extends Component {
  render() {
    const { message } = this.props;
    return <NotificationText>{message}</NotificationText>;
  }
}
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
