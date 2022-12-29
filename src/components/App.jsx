import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export const App = () => {
  const [good, setGood] = useState (0);
  const [neutral, setNeutral] = useState (0);
  const [bad, setBad] = useState (0);

  const increment = e => {
    console.log(e.target.id)
    switch (e.target.id) {
    case 'good':
      setGood(good + 1);
      break;
    case 'neutral':
      setNeutral(neutral +1 );
      break;
    case 'bad':
      setBad(bad + 1);
      break;
      default:
      return
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round(
      ((countTotalFeedback() - (neutral + bad)) /
        countTotalFeedback()) *
        100
    );
  };

 
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={{good, neutral, bad}}
            increment={increment}
          />
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  }





// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   increment = e => {
//     const id = e.currentTarget.id;
//     this.setState(prevstate => {
//       return {
//         [id]: prevstate[id] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round(
//       ((this.countTotalFeedback() - (this.state.neutral + this.state.bad)) /
//         this.countTotalFeedback()) *
//         100
//     );
//   };

//   render() {
//     return (
//       <>
//         <Section title={' Please leave feedback'}>
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             increment={this.increment}
//           />
//         </Section>
//         <Section title={'Statistics'}>
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={this.countTotalFeedback}
//             positivePercentage={this.countPositiveFeedbackPercentage}
//           />
//         </Section>
//       </>
//     );
//   }
// }
