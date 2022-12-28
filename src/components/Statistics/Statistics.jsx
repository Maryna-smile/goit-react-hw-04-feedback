import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const feedbacks = total();
  return (
    <>
      {feedbacks > 0 ? (
        <ul className={css.ul}>
          <li className={css.li}>Good:{good}</li>
          <li className={css.li}>Neutral:{neutral}</li>
          <li className={css.li}>Bad:{bad}</li>
          <li className={css.li}>Total:{total()}</li>
          <li className={css.li}>Positive feedback: {positivePercentage()}%</li>
        </ul>
      ) : (
        <Notification />
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
