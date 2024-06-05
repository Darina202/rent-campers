import { useState } from 'react';
import styles from './reviews.module.css';
// import { useParams } from 'react-router-dom';
// import { requestFetchCamper } from 'api/campers-api';

const Reviews = () => {
  let item;
  const [review, setReview] = useState([]);
  console.log(setReview);
  // useEffect(() => {
  //   const fetchCamper = async () => {
  //     const review = await requestFetchCamper();
  //     setReview(review);
  //   };

  //   fetchCamper();
  // }, []);

  // const review = [];

  if (review?.length > 0) {
    return (item = review.map(
      ({ reviews }, index) => console.log(reviews)
      // <li key={index} className={styles.item}>
      //   <h3 className={styles.author}>{reviews.reviewer_name}</h3>
      //   <p>{reviews.reviewer_rating}</p>
      //   <p className={styles.comment}>{reviews.comment}</p>
      // </li>
    ));
  }

  return (
    <>
      {/* {error && <p>Error {error}</p>}
      {loading && <p>...Loading</p>} */}
      {review?.length > 0 ? (
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
