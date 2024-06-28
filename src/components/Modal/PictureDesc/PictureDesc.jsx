import styles from './picture-desc.module.css';

const PictureDesc = ({ camper }) => {
  const { name, description, gallery } = camper;
  return (
    <>
      <ul className={styles.gallery}>
        {gallery.map((image, index) => (
          <li key={index} className={styles.thumb}>
            <img src={image} alt={name} className={styles.image} />
          </li>
        ))}
      </ul>
      <p className={styles.desc}>{description}</p>
    </>
  );
};
export default PictureDesc;
