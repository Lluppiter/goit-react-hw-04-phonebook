import styles from '../FormAddContact/FormAddContacts.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const FormAddContact = ({addNewContact}) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  
  
  const handleInput = ({ target: { name, value } }) => {
     switch (name) {
      case 'name':
        setName(value)
        break;
      case ('number'):
        setNumber(value)
        break;
      default:
        break;
    }
  };

 const reset = () => {
   setName('')
   setNumber('')
  }
  
  const onSubmit = e => {
    e.preventDefault();
    addNewContact(name, number);
    reset();
  };
  
  return (
      <form onSubmit={onSubmit} className={styles.formContacts}>
        <div className={styles.formItem}>
          <h3 className={styles.formTitle}>Name</h3>
          <input
            onChange={handleInput}
            className={styles.formInput}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div className={styles.formItem}>
          <h3 className={styles.formTitle}>Number</h3>
          <input
            onChange={handleInput}
            className={styles.formInput}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <button className={styles.formButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
FormAddContact.propTypes = {
  addNewContact: PropTypes.func.isRequired
}
