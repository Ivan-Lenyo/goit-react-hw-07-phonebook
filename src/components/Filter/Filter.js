import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import PropTypes from 'prop-types';
import { getFilter } from '../../redux/phoneBook/phoneBook-selectors';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => dispatch(phoneBookActions.changeFilter(e.target.value));

  return (
    <label className={s.label}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Filter;
