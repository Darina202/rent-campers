import styles from './details.module.css';

const Details = ({ form, length, width, height, tank, consumption }) => {
  return (
    <div className={styles.details}>
      <h3 className={styles.title}>Vehicle details</h3>

      <div className={styles.detailsTable}>
        <div className={styles.item}>
          <p className={styles.itemText}>Form</p>
          <p className={styles.itemText}>{form}</p>
        </div>
        <div className={styles.item}>
          <p className={styles.itemText}>Length</p>
          <p className={styles.itemText}>{length}</p>
        </div>
        <div className={styles.item}>
          <p className={styles.itemText}>Width</p>
          <p className={styles.itemText}>{width}</p>
        </div>
        <div className={styles.item}>
          <p className={styles.itemText}>Height</p>
          <p className={styles.itemText}>{height}</p>
        </div>
        <div className={styles.item}>
          <p className={styles.itemText}>Tank</p>
          <p className={styles.itemText}>{tank}</p>
        </div>
        <div className={styles.item}>
          <p className={styles.itemText}>Consumption</p>
          <p className={styles.itemText}>{consumption}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
