import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, increment }) => {
  return (
    <div>
      {options.map(el => (
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
