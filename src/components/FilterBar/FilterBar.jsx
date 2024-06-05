import styles from './filter-bar.module.css';
import icons from '../../img/icons.svg';
import Equip from './Equip/Equip.jsx';
import VehicleType from './VehicleType/VehicleType';

const FilterBar = () => {
  return (
    <form>
      <div className={styles.container}>
        <div className={styles.location}>
          <label htmlFor="location">Location</label>
          <div className={styles.placeholder}>
            <input
              name="location"
              id="location"
              className={styles.locInput}
              placeholder="Kyiv, Ukraine"
            />
            <svg className={styles.locIcon}>
              <use href={`${icons}#icon-location`}></use>
            </svg>
          </div>
        </div>
        <div>
          <p className={styles.filters}>Filters</p>
          <Equip />
        </div>
        <div>
          <VehicleType />
        </div>
      </div>
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
};
export default FilterBar;
