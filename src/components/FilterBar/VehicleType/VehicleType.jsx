import styles from './vehicle-type.module.css';
import icons from '../../../img/icons.svg';

const VehicleType = () => {
  const type = [
    {
      icon: 'van',
      title: 'Van',
      backendName: 'panelTruck',
    },
    {
      icon: 'fully-integrated',
      title: 'Fully Integrated',
      backendName: 'fullyIntegrated',
    },
    {
      icon: 'alcove',
      title: 'Alcove',
      backendName: 'alcove',
    },
  ];

  const elements = type.map(({ icon, title, backendName }) => {
    return (
      <div key={icon} className={styles.itemCheckbox}>
        <input
          type="checkbox"
          id={icon}
          value={backendName}
          className={styles.visuallyHidden}
        />
        <label htmlFor={icon} className={styles.itemLabel}>
          <svg
            className={`${styles.itemIcon} ${
              title === 'AC' && styles.itemIconFill
            }`}
          >
            <use href={`${icons}#icon-${icon}`}></use>
          </svg>
          {title}
        </label>
      </div>
    );
  });

  return (
    <div>
      <p className={styles.title}>Vehicle type</p>
      <ul className={styles.equipList}>{elements}</ul>
    </div>
  );
};
export default VehicleType;
