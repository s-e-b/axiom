import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';
import { breakpointIds } from '../../design-patterns/layout/_vars';

export class GridCell extends Component {
  static propTypes = {
    children: { any: true },
    fifth: { oneOf: [true, ...breakpointIds] },
    fit: { oneOf: [true, ...breakpointIds] },
    full: { oneOf: [true, ...breakpointIds] },
    half: { oneOf: [true, ...breakpointIds] },
    quarter: { oneOf: [true, ...breakpointIds] },
    shrink: { oneOf: [true, ...breakpointIds] },
    sixth: { oneOf: [true, ...breakpointIds] },
    third: { oneOf: [true, ...breakpointIds] },
    vAlign: { oneOf: ['top', 'middle', 'bottom'] },
  };

  render() {
    const {
      className,
      children,
      full,
      fit,
      shrink,
      half,
      third,
      quarter,
      fifth,
      sixth,
      vAlign,
      ...rest,
    } = this.props;

    const classes = classnames(className,
      'ax-grid__cell', {
        'ax-grid__cell--top': vAlign === 'top',
        'ax-grid__cell--middle': vAlign === 'middle',
        'ax-grid__cell--bottom': vAlign === 'bottom',
        'ax-grid__cell--full': full === true,
        'ax-grid__cell--fit': fit === true,
        'ax-grid__cell--shrink': shrink === true,
        'ax-grid__cell--half': half === true,
        'ax-grid__cell--third': third === true,
        'ax-grid__cell--quarter': quarter === true,
        'ax-grid__cell--fifth': fifth === true,
        'ax-grid__cell--sixth': sixth === true,
        [`ax-grid__cell--full--${full}`]: full && full !== true,
        [`ax-grid__cell--fit--${fit}`]: fit && fit !== true,
        [`ax-grid__cell--shrink--${shrink}`]: shrink && shrink !== true,
        [`ax-grid__cell--half--${half}`]: half && half !== true,
        [`ax-grid__cell--third--${third}`]: third && third !== true,
        [`ax-grid__cell--quarter--${quarter}`]: quarter && quarter !== true,
        [`ax-grid__cell--fifth--${fifth}`]: fifth && fifth !== true,
        [`ax-grid__cell--sixth--${sixth}`]: sixth && sixth !== true,
      },
    );

    return (
      <div { ...rest } className={ classes }>
        { children }
      </div>
    );
  }
}

export default enhance(GridCell)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);