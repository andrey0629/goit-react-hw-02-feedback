import { Component } from 'react';
import PropTypes from 'prop-types';

import {
  FeedbackOptionsContainer,
  FeedbackButton,
} from './StyledComponents/FeedbackOptions.styled';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <FeedbackOptionsContainer>
        {options.map(option => (
          <FeedbackButton
            key={option}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </FeedbackButton>
        ))}
      </FeedbackOptionsContainer>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
