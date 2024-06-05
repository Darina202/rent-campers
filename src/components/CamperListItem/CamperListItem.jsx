import styles from './camper-list-item.module.css';

const CamperListItem = ({
  name,
  rating,
  price,
  location,
  description,
  details,
  gallery,
}) => {
  // const detList = details.forEach(element => {
  //   console.log(element);
  //   <li>
  //     <svg class="advanced-icon" width="64" height="64">
  //       <use href="./images/icons.svg#icon-alcove"></use>
  //     </svg>
  //   </li>;
  // });

  console.log(gallery);

  return (
    <div className={styles.card}>
      <li className={styles.item}>
        <div className={styles.thumb}>
          <img className={styles.image} src={gallery[0]} alt="" />
        </div>
        <div className={styles.info}>
          <div className={styles.title}>
            <h3>{name}</h3>
            <p>{price}</p>
          </div>
          <div className={styles.rate}>
            <p>{rating}</p>
            <p>{location}</p>
          </div>
          <p className={styles.desc}>{description}</p>
          {/* <ul>{detList}</ul> */}
          {/* <span className={status}>{isOnline}</span>
        <img className={styles.avatar} src={avatar} alt={name} width="48" /> */}
          <button type="button" className={styles.button}>
            Show more
          </button>
        </div>
      </li>
    </div>
  );
};
export default CamperListItem;
