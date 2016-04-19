import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import classnames from 'classnames';
import { Button, ButtonGroup } from 'axiom/react';
import { Card, CardTitle, CardContent } from 'axiom/react';
import { Jumbotron } from 'axiom/react';
import { Layout, LayoutHeader, LayoutSidebar, LayoutMain, LayoutContent, LayoutFooter } from 'axiom/react/layouts/established';
import CodeSnippet from 'documentation/components/CodeSnippet';

export class Landing extends Component {
  render() {
    const { children, schemesState } = this.props;
    const { active: activeScheme } = schemesState;

    return (
      <Layout className={activeScheme}>
        <LayoutMain>
          <Jumbotron image="/assets/axiom-bg.jpg" color="blue-grey" overlay={true} spaced={true}>
            <LayoutContent className="ax-text--center">
              <h1><strong>Brandwatch</strong> Axiom</h1>
              <ButtonGroup>
                <Button color="primary" onClick={() => browserHistory.push('/docs')}>
                  Read the docs
                </Button>
              </ButtonGroup>
            </LayoutContent>
          </Jumbotron>

          <LayoutContent>
            <Card>
              <CardTitle title="Install" />
              <CardContent>
                <CodeSnippet language="bash">
                  npm install brandwatch/axiom --save
                </CodeSnippet>
              </CardContent>
            </Card>
          </LayoutContent>
        </LayoutMain>

        <LayoutFooter />
      </Layout>
    );
  }
}

function select(state) {
  return {
    schemesState: state.schemes,
  };
}

export default connect(select)(Landing);