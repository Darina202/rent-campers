import styles from './camper-list-item.module.css';
import icons from '../../img/icons.svg';
import { selectFavoriteCampers } from '../../redux/favorite/favorite-selectors';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCamperToFavorite,
  deleteCamperFromFavorite,
} from '../../redux/favorite/favorite-slice';

const CamperListItem = ({ item, onClick }) => {
  const {
    _id,
    name,
    rating,
    price,
    location,
    description,
    details,
    gallery,
    adults,
    transmission,
    engine,
    reviews,
  } = item;

  const favoriteCampers = useSelector(selectFavoriteCampers);
  const dispatch = useDispatch();

  const isCamper = favoriteCampers.some(({ _id }) => _id === item._id);

  const toggleFavoriteCamper = () => {
    if (!isCamper) {
      dispatch(addCamperToFavorite(item));
    } else {
      dispatch(deleteCamperFromFavorite(_id));
    }
  };

  return (
    <div className={styles.card}>
      <li className={styles.item}>
        <div className={styles.thumb}>
          <img className={styles.image} src={gallery[0]} alt="" />
        </div>
        <div className={styles.info}>
          <div className={styles.title}>
            <p>{name}</p>
            <div className={styles.price}>
              <p>{`€${price}`}</p>
              <button className={styles.likeBtn}>
                <svg
                  onClick={toggleFavoriteCamper}
                  className={`${styles.like} ${
                    isCamper ? styles.likeActiv : ''
                  }`}
                >
                  <use href={`${icons}#icon-like`}></use>
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.rate}>
            <div className={styles.rating}>
              <svg className={styles.starIcon}>
                <use href={`${icons}#icon-star`}></use>
              </svg>
              <p
                className={styles.rateText}
              >{`${rating}(${reviews.length} Reviews)`}</p>
            </div>
            <div className={styles.rating}>
              <svg className={styles.locationIcon}>
                <use href={`${icons}#icon-location`}></use>
              </svg>
              <p>{location}</p>
            </div>
          </div>
          <p className={styles.desc}>{description}</p>
          <ul className={styles.categoryList}>
            <li className={styles.categoryItem}>
              <svg className={styles.icon}>
                <use href={`${icons}#icon-users`}></use>
              </svg>
              {`${adults} adults`}
            </li>
            <li className={styles.categoryItem}>
              <svg className={styles.transIcon}>
                <use href={`${icons}#icon-automatic`}></use>
              </svg>
              <p className={styles.text}>{transmission}</p>
            </li>
            <li className={styles.categoryItem}>
              <svg className={styles.icon}>
                <use href={`${icons}#icon-petrol`}></use>
              </svg>
              <p className={styles.text}>{engine}</p>
            </li>
            <li className={styles.categoryItem}>
              <svg className={styles.transIcon}>
                <use href={`${icons}#icon-kitchen`}></use>
              </svg>
              <p className={styles.text}>kitchen</p>
            </li>
            <li className={styles.categoryItem}>
              <svg className={styles.transIcon}>
                <use href={`${icons}#icon-bed`}></use>
              </svg>
              {`${details.beds} beds`}
            </li>
            <li className={styles.categoryItem}>
              <svg className={styles.icon}>
                <use href={`${icons}#icon-ac`}></use>
              </svg>
              <p className={styles.text}>AC</p>
            </li>
          </ul>
          <button type="button" className={styles.button} onClick={onClick}>
            Show more
          </button>
        </div>
      </li>
    </div>
  );
};
export default CamperListItem;
