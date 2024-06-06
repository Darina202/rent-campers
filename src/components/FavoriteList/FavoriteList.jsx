import styles from './/favorite-list.module.css';
import CamperListItem from '../CamperListItem/CamperListItem';
import { selectAllCampers } from '../../redux/campers/campers-selectors';
import CamperModal from '../Modal/Modal';
import { selectFavoriteCampers } from '../../redux/favorite/favorite-selectors';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const FavoriteList = () => {
  const { isLoading, error } = useSelector(selectAllCampers);

  const [selectedCamperId, setSelectedCamperId] = useState(null);
  const favoriteCampers = useSelector(selectFavoriteCampers);

  const handleItemClick = id => {
    setSelectedCamperId(id);
  };

  const closeModal = () => {
    setSelectedCamperId(null);
  };

  const elements = favoriteCampers.map(item => (
    <CamperListItem
      key={item._id}
      item={item}
      onClick={() => handleItemClick(item._id)}
    />
  ));

  return (
    <div className={styles.container}>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      {favoriteCampers && <ul className={styles.list}>{elements}</ul>}
      {selectedCamperId && (
        <CamperModal
          isOpen={!!selectedCamperId}
          onRequestClose={closeModal}
          camperId={selectedCamperId}
        />
      )}
    </div>
  );
};

export default FavoriteList;
