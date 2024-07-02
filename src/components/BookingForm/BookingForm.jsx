import { useState } from 'react';
import styles from './booking-form.module.css';
import icons from '../../img/icons.svg';

const INITIAL_STATE = {
  name: '',
  email: '',
  bookingDate: '',
  comment: '',
};

const BookingForm = () => {
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
    if (e.target.checkValidity()) {
      setState({ ...INITIAL_STATE });
    }
  };

  const { name, email, bookingDate, comment } = state;

  return (
    <div className={styles.booking}>
      <h2 className={styles.title}>Book your campervan now</h2>
      <p className={styles.text}>
        Stay connected! We are always ready to help you.
      </p>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <input
            className={styles.input}
            value={name}
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <input
            className={styles.input}
            value={email}
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <input
            className={styles.input}
            value={bookingDate}
            type="date"
            name="bookingDate"
            placeholder="Booking date"
            onChange={handleChange}
            required
          />
          <svg className={styles.calIcon}>
            <use href={`${icons}#icon-calendar`}></use>
          </svg>
        </div>
        {/* <div className={styles.wrapper}>
          <div className={styles.dateWrapper}>
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <>
                  <DatePicker
                    {...field}
                    selected={field.value}
                    onChange={date => field.onChange(date)}
                    minDate={today}
                    dateFormat="dd.MM.yyyy"
                    className={styles.input}
                    placeholderText="Booking date"
                    inline={isOpenDatePicker}
                  />

                  <svg className={styles.dateIcon} onClick={handleClick}>
                    <use href={`${icons}#icon-calendar`}></use>
                  </svg>
                </>
              )}
            />
          </div>
          <p className={styles.error}>{errors.date?.message}</p>
        </div> */}
        <div className={styles.field}>
          <textarea
            className={styles.textarea}
            value={comment}
            type="text"
            name="comment"
            placeholder="Comment"
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className={styles.button}>
          Send
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
