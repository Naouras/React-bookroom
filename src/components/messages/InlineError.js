import React from 'react';
import PropTypes from 'prop-types';

const InlineError = () => <span style={{color: "#ae5856"}}>{this.props.text}</span>

InlineError.prototype ={
    text: PropTypes.string.isRequired
};

export default InlineError;