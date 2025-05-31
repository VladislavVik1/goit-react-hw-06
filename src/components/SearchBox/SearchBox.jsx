import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const filter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor="search">
        Пошук контактів:
      </label>
      <input
        className={css.input}
        id="search"
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Введіть ім’я"
      />
    </div>
  );
}
