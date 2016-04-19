import React, { PropTypes, Component } from 'react';
import { Grid, GridCell } from '../../';
import { Icon } from '../../';
import LayoutContent from './LayoutContent';
import LayoutLogo from './LayoutLogo';

export default class LayoutFooter extends Component {
  render() {
    const { children } = this.props;
    const socials = [
      { icon: 'linkedin', link: 'http://www.linkedin.com/company/brandwatch' },
      { icon: 'google-plus' },
      { icon: 'pinterest-p' },
      { icon: 'instagram' },
      { icon: 'twitter' },
      { icon: 'facebook' },
      { icon: 'youtube' },
      { icon: 'slideshare' },
    ];

    return (
      <div className="ax-layout__footer-container">
        <LayoutContent>
          <div className="ax-layout__logo">
            <LayoutLogo />
          </div>

          <div className="ax-layout__footer">
            <Grid hAlign="left" responsive={false}>
              {socials.map((social, index) =>
                <GridCell key={index} shrink={true}>
                  <Icon name={social.icon} size="lg" />
                </GridCell>
              )}
            </Grid>

            <p>Copyright © 2016 Brandwatch. All Rights Reserved.</p>
          </div>
        </LayoutContent>
      </div>
    );
  }
}