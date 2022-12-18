import { useState } from "react";
import Statistics from "./Statistics/Statistics.jsx";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions.jsx";
import Section from "./Section/Section.jsx";
import Notification from "./Notification/Notification.jsx";
import "./globalStyles.css"


export const App = () => {

  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleReviewClick = (whichButtonWasClicked) => {
    switch (whichButtonWasClicked) {
      case "Good": setState((prevState) => ({
        ...prevState,
        good: prevState.good + 1,
      }));
        break;
      case "Neutral": setState((prevState) => ({
        ...prevState,
        neutral: prevState.neutral + 1,
      }));
        break;
      case "Bad": setState((prevState) => ({
        ...prevState,
        bad: prevState.bad + 1,
      }));
        break;
      default: return 0;
    }
  };

  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  }

  const countPositiveFeedbackPercentage = () => {
    return ((state.good / countTotalFeedback()) * 100);
  }



  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column'
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          handleReviewClick={handleReviewClick}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0
          ? <Statistics
            {...state}
            total={countTotalFeedback()}
            percentage={countPositiveFeedbackPercentage()}
          />
          : <Notification message="There is no feedback" />}
      </Section>
    </div >
  );
};
