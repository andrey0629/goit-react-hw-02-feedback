import { Component } from 'react';
import PropTypes from 'prop-types';
import { StatisticsList } from './StyledComponents/Statistics.styled';
class Statistics extends Component {
  render() {
    return (
      <StatisticsList>
        {Object.keys(this.props).map(option => (
          <li key={option}>
            <p>
              {option}: {this.props[option]}
            </p>
          </li>
        ))}
      </StatisticsList>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
