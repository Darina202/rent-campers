import styles from './camper-list-item.module.css';
import icons from '../../img/icons.svg';

const CamperListItem = ({
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
}) => {
  console.log(details);
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
                  className={styles.like}
                  // onClick={toggleFavoriteProducts}
                  // className={`${scss.likeIcon} ${
                  //   isDublicateProduct && scss.likeIconPressed
                  // }`}
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
          <button type="button" className={styles.button}>
            Show more
          </button>
        </div>
      </li>
    </div>
  );
};
export default CamperListItem;
