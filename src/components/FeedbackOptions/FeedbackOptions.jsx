import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, increment }) => {
  const buttonOptions = Object.keys(options);
  return (
    <div>
      {buttonOptions.map(el => (
        <button
          className={css.button}
          key={el}
          id={el}
          type="button"
          onClick={increment}
          
        >
          {el}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
  increment: PropTypes.func,
};
