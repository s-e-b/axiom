import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import { Candytar } from 'bw-axiom';

class CandytarExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Candytar: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      Candytar: components.Candytar,
    };

    const initialProps = {
      Candytar: {
        color: 'rose',
        picker: (colors) => colors[1],
        size: '3rem',
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <Candytar { ...initialProps.Candytar } />
      </ExampleConfig>
    );
  }
}

module.exports = [ CandytarExample ];
