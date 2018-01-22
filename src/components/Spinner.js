import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Spinner.css';

const Spinner = ({ size }) => {
  return <div className={`Spinner ${size}`} />;
}

Spinner.defaultProps = {
  size: 'small'
};

Spinner.propTypes = {
  size: PropTypes.string
};

export default Spinner;