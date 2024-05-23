import css from './SearchBox.module.css';

const SearchBox = ({ onFilter, value }) => {
  return (
    <div className={css.search}>
      <p className={css.text}>You can find contact by name</p>
      <input
        type="text"
        value={value}
        onChange={event => onFilter(event.target.value)}
        className={css.input}
      />
    </div>
  );
};

export default SearchBox;
