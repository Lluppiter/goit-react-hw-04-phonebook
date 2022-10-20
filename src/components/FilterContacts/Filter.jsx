import styles from '../FilterContacts/Filter.module.css';
import PropTypes from 'prop-types';

export const Input = ({ filterContact }) => {
  const onChange = (e) => {
    filterContact(e.target.value)
  }

  return (
    <div className={styles.filter}>
      <p className={styles.filterTxt}>Find contacts by name</p>
      <input
        className={styles.filterInput}
        name="filter"
        onChange={onChange}
      />
    </div>
  );
};
Input.propTypes = {
  filterContact: PropTypes.func.isRequired,
};
