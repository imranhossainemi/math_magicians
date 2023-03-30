import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const Output = ({ output }) => (
  <div className="output">{output}</div>
);

Output.propTypes = {
  output: PropTypes.string.isRequired,
};

export default Output;
