import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import { Badge, BadgeGroup, Strong } from 'bw-axiom';

class BadgeExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Badge: PropTypes.object.isRequired,
      BadgeGroup: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      Badge: components.Badge,
      BadgeGroup: components.BadgeGroup,
    };

    const initialProps = {
      Badge: {
        color: 'rose',
      },
      BadgeGroup: {

      },
    };

    const initialPropOptions = {
      BadgeGroup: {
        children: {
          count: 3,
          max: Infinity,
          min: 1,
        },
      },
    };

    return (
      <ExampleConfig
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <BadgeGroup { ...initialProps.BadgeGroup }>
          <Badge { ...initialProps.Badge }>
            <Strong>100</Strong>%
          </Badge>
        </BadgeGroup>
      </ExampleConfig>
    );
  }
}

module.exports = [ BadgeExample ];
