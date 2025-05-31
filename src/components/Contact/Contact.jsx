import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.item}>
      <p className={css.text}>
        {name}: <span className={css.number}>{number}</span>
      </p>
      <button className={css.button} onClick={handleDelete}>
        Видалити
      </button>
    </li>
  );
}
