import React from 'react';
import renderer from 'react-test-renderer';
import ChartTableVisual from './ChartTableVisual';

function getComponent(props = {}) {
  return renderer.create(
    <ChartTableVisual { ...props }>
      Lorem Ipsum
    </ChartTableVisual>
  );
}

describe('ChartTableVisual', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
