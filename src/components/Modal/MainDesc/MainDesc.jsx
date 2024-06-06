import styles from './main-desc.module.css';
import icons from '../../../img/icons.svg';

const MainDesc = ({ camper }) => {
  const { name, rating, price, location, description, gallery, reviews } =
    camper;
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.title}>{name}</p>
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
        <p className={styles.price}>{`€${price}`}</p>
      </div>

      <ul className={styles.gallery}>
        {gallery.map((image, index) => (
          <li key={index} className={styles.thumb}>
            <img src={image} alt={name} className={styles.image} />
          </li>
        ))}
      </ul>
      <p className={styles.desc}>{description}</p>
    </div>
  );
};
export default MainDesc;
