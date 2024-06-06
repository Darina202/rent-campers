import styles from './reviews.module.css';
import { useSelector } from 'react-redux';
import { selectAllCampers } from '../../redux/campers/campers-selectors';
import BookingForm from 'components/BookingForm/BookingForm';
import icons from '../../img/icons.svg';

const Reviews = ({ reviews }) => {
  const { isLoading, error } = useSelector(selectAllCampers);

  const item = reviews.map(
    ({ reviewer_name, reviewer_rating, comment }, index) => {
      const ratingIcons = [];
      for (let i = 0; i < reviewer_rating; i++) {
        ratingIcons.push(
          <svg key={i} className={styles.starIcon}>
            <use href={`${icons}#icon-star`}></use>
          </svg>
        );
      }

      return (
        <li key={index} className={styles.item}>
          <div className={styles.head}>
            <div className={styles.round}>
              <p className={styles.letter}>{reviewer_name.slice(0, 1)}</p>
            </div>
            <div>
              <h3 className={styles.author}>{reviewer_name}</h3>
              {ratingIcons}
            </div>
          </div>
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
