// import { LoginForm } from './Form/Form';

import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Component } from 'react';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increment = e => {
    const id = e.currentTarget.id;
    this.setState(prevstate => {
      return {
        [id]: prevstate[id] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(
      ((this.countTotalFeedback() - (this.state.neutral + this.state.bad)) /
        this.countTotalFeedback()) *
        100
    );
  };

  render() {
    return (
      <>
        <Section title={' Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            increment={this.increment}
          />
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  }
}
