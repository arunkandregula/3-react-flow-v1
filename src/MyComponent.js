import React from 'react';
import PropTypes from 'prop-types';

class MyComponent extends React.Component {
  static propTypes = {
    foo: PropTypes.number.isRequired,
    bar: PropTypes.string,
  };

  render() {
    return <div>{this.props.bar}</div>;
  }
}

export default MyComponent;
