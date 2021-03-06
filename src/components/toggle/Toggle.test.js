import React from 'react';
import renderer from 'react-test-renderer';
import { Toggle } from 'bw-axiom';

function onToggle(){}

describe('Toggle', () => {
  it('renders as toggled', () => {
    const tree = renderer.create(<Toggle onToggle={ onToggle } toggled={ true } />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders as not toggled', () => {
    const tree = renderer.create(<Toggle onToggle={ onToggle } toggled={ false } />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with disabled', () => {
    const tree = renderer.create(
      <Toggle
          disabled={ true }
          onToggle={ onToggle }
          toggled={ false } />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with label children', () => {
    const tree = renderer.create(
      <Toggle onToggle={ onToggle } toggled={ false }>Toggle</Toggle>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
