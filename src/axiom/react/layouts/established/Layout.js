import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

export default class Layout extends Component {
  static childContextTypes = {
    showSidebar: PropTypes.func,
    hideSidebar: PropTypes.func,
    toggleSidebar: PropTypes.func,
  };

  getChildContext() {
    return {
      showSidebar: ::this.showSidebar,
      hideSidebar: ::this.hideSidebar,
      toggleSidebar: ::this.toggleSidebar,
    };
  }

  componentWillMount() {
    this.hideSidebar();
  }

  showSidebar() {
    this.setState({ open: true });
  }

  hideSidebar() {
    this.setState({ open: false });
  }

  toggleSidebar() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { className, children } = this.props;
    const { open } = this.state;
    const classes = classnames(
      className,
      'ax-layout', {
        'ax-layout--open': open,
      }
    );

    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
}