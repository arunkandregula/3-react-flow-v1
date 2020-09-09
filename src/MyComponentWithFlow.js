// @flow
import * as React from 'react';

type Props = {
  foo: number,
  bar?: string,
};

class MyComponentWithFlow extends React.Component<Props> {
  render() {
    return <div>{this.props.foo}</div>;
  }
}

export default MyComponentWithFlow;
