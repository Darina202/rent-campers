import styles from './filter-bar.module.css';
import icons from '../../img/icons.svg';
import Equip from './Equip/Equip.jsx';
import VehicleType from './VehicleType/VehicleType';
import { changeFitler } from '../../redux/filter-slice';
import { useDispatch } from 'react-redux';

const FilterBar = () => {
  const dispatch = useDispatch();
  const toChangeFitler = ({ target }) => dispatch(changeFitler(target.value));

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
              placeholder="City"
              onChange={toChangeFitler}
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
