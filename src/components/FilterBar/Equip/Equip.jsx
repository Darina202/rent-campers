import styles from './equip.module.css';
import icons from '../../../img/icons.svg';

const Equip = () => {
  const equip = [
    {
      icon: 'ac',
      title: 'AC',
      backendName: 'airConditioner',
    },

    {
      icon: 'automatic',
      title: 'Automatic',
      backendName: 'automatic',
    },
    {
      icon: 'kitchen',
      title: 'Kitchen',
      backendName: 'kitchen',
    },
    {
      icon: 'tv',
      title: 'TV',
      backendName: 'TV',
    },
    {
      icon: 'shower',
      title: 'Shower/WC',
      backendName: 'bathroom',
    },
  ];
  const elements = equip.map(({ icon, title, backendName }) => {
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
      <p className={styles.title}>Vehicle equipment</p>
      <ul className={styles.equipList}>{elements}</ul>
    </div>
  );
};
export default Equip;
