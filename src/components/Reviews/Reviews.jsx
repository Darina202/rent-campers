import styles from './reviews.module.css';
import { useSelector } from 'react-redux';
import { selectAllCampers } from '../../redux/campers/campers-selectors';
import BookingForm from 'components/BookingForm/BookingForm';

const Reviews = ({ reviews }) => {
  const { isLoading, error } = useSelector(selectAllCampers);

  const item = reviews.map(
    ({ reviewer_name, reviewer_rating, comment }, index) => {
      return (
        <li key={index} className={styles.item}>
          <h3 className={styles.author}>{reviewer_name}</h3>
          <p>{reviewer_rating}</p>
          <p className={styles.comment}>{comment}</p>
        </li>
      );
    }
  );

  return (
    <>
      {error && <p>Error {error}</p>}
      {isLoading && <p>...Loading</p>}
      <div className={styles.container}>
        {reviews?.length > 0 ? (
          <ul className={styles.list}>{item}</ul>
        ) : (
          <h3 className={styles.text}>
            We don`t have any reviews for this camper
          </h3>
        )}
        <BookingForm />
      </div>
    </>
  );
};

export default Reviews;
