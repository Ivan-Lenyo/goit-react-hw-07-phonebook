import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import PropTypes from 'prop-types';
import { getVisibleContacts } from '../../redux/phoneBook/phoneBook-selectors';

const ContacsList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(phoneBookActions.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <span>
            {name} : {number}
          </span>
          <button
            type="submit"
            className={s.button}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContacsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};

export default ContacsList;
