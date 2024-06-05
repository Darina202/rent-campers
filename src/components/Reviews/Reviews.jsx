import { useState } from 'react';
import styles from './reviews.module.css';
import { useSelector } from 'react-redux';
import { selectAllCampers } from '../../redux/campers/campers-selectors';

const Reviews = ({ reviews }) => {
  const { isLoading, error } = useSelector(selectAllCampers);
  const [review, setReview] = useState([]);
  console.log(reviews);

  // if (reviews?.length > 0) {
  //   return (

  const item = reviews.map(
    ({ reviewer_name, reviewer_rating, comment }, index) => {
      <li key={index} className={styles.item}>
        <h3 className={styles.author}>{reviewer_name}</h3>
        <p>{reviewer_rating}</p>
        <p className={styles.comment}>{comment}</p>
      </li>;
    }
  );

  return (
    <>
      {error && <p>Error {error}</p>}
      {isLoading && <p>...Loading</p>}
      {reviews?.length > 0 ? (
        <ul className={styles.list}>{item}</ul>
      ) : (
        <h3 className={styles.text}>
          We don`t have any reviews for this camper
        </h3>
      )}
    </>
  );
};
export default Reviews;
