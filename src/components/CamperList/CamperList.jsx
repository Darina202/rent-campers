// import { requestFetchCamper } from 'api/campers-api';
import styles from './camper-list.module.css';
import CamperListItem from '../CamperListItem/CamperListItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCampers } from '../../redux/campers/campers-selectors';
import { fetchCamper } from '../../redux/campers/campers-operations';

const CamperList = () => {
  const { isLoading, error, items } = useSelector(selectAllCampers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCamper());
  }, [dispatch]);

  console.log(items.form);
  const elements = items.map(
    ({ _id, name, rating, price, location, description, details, gallery }) => {
      return (
        <CamperListItem
          key={_id}
          name={name}
          rating={rating}
          price={price}
          location={location}
          description={description}
          details={details}
          gallery={gallery}
        />
      );
    }
  );

  return (
    <div className={styles.container}>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      <ul className={styles.list}>{elements}</ul>
    </div>
  );
};
export default CamperList;
