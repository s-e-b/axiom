import React, { Component } from 'react';
import { CodeSnippet, Example } from 'style-guide';
import { Grid, GridCell, TextInput, Heading, Paragraph, shortNumber } from 'bw-axiom';

export default class ShortNumber extends Component {
  componentWillMount() {
    this.setState({
      number: 123456789,
      precision: 2,
    });
  }

  updateNumber(event) {
    this.setState({ number: parseFloat(event.target.value, 10) });
  }

  updatePrecision(event) {
    this.setState({ precision: parseInt(event.target.value, 10) });
  }

  render() {
    const { number, precision } = this.state;

    return (
      <Example name="Short number">
        <Grid>
          <GridCell>
            <TextInput
                defaultValue={ number }
                label="Number to format"
                onChange={ e => this.updateNumber(e) } />

            <TextInput
                defaultValue={ precision }
                label="Precision (decimals)"
                onChange={ e => this.updatePrecision(e) } />
          </GridCell>

          <GridCell>
            <Heading>Formatted number</Heading>
            <Paragraph>{ shortNumber(number, precision) }</Paragraph>
          </GridCell>
        </Grid>

        <CodeSnippet language="js">{`
          import { shortNumber } from 'bw-axiom';

          shortNumber(Number [, Number]);
        `}</CodeSnippet>
      </Example>
    );
  }
}
