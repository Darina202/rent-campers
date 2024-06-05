import { useId, useState } from 'react';
import styles from './booking-form.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  bookingDate: '',
  comment: '',
};

const BookingForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...INITIAL_STATE });
  };

  const nameId = useId();
  const emailId = useId();
  const dateId = useId();
  const commemtId = useId();

  const { name, email, bookingDate, comment } = state;

  return (
    <div className={styles.booking}>
      <h2>Book your campervan now</h2>
      <p>Stay connected! We are always ready to help you.</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="nameId">Name</label>
          <input
            value={name}
            name="name"
            id={nameId}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="emailId">Email</label>
          <input
            value={email}
            type="email"
            name="email"
            id={emailId}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="passwordId">Booking date</label>
          <input
            value={bookingDate}
            type="date"
            name="bookingDate"
            id={dateId}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="passwordId">Comment</label>
          <input
            value={comment}
            type="text"
            name="comment"
            id={commemtId}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.button}>
          Send
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
