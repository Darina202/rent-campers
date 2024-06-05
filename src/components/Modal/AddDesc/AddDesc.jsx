import styles from './add-desc.module.css';
import Reviews from '../../Reviews/Reviews';
import Features from '../../Features/Features';
import { useState } from 'react';

const AddDesc = ({ camper }) => {
  const { reviews } = camper;
  const [activeSection, setActiveSection] = useState(null);

  const handleFeaturesClick = () => {
    setActiveSection('features');
  };

  const handleReviewsClick = () => {
    setActiveSection('reviews');
  };

  return (
    <>
      <div className={styles.addDescBtn}>
        <button
          className={`${styles.addDescLink} ${
            activeSection === 'features' ? styles.activeButton : ''
          }`}
          onClick={handleFeaturesClick}
        >
          Features
        </button>
        <button
          className={`${styles.addDescLink} ${
            activeSection === 'reviews' ? styles.activeButton : ''
          }`}
          onClick={handleReviewsClick}
        >
          Reviews
        </button>
      </div>

      <>
        {activeSection === 'features' && <Features camper={camper} />}
        {activeSection === 'reviews' && <Reviews reviews={reviews} />}
      </>
    </>
  );
};
export default AddDesc;
