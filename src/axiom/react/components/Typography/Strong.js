import React, { Component } from 'react';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';

export class Strong extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const {children} = this.props;

    return (
      <strong {...this.props}>
        {children}
      </strong>
    );
  }
}

export default enhance(Strong)(
  addDisplayName('Strong'),
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);