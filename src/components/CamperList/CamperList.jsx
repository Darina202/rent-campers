import styles from './camper-list.module.css';
import CamperListItem from '../CamperListItem/CamperListItem';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCampers } from '../../redux/campers/campers-selectors';
import { fetchCamper } from '../../redux/campers/campers-operations';
import CamperModal from '../Modal/Modal';

const CamperList = () => {
  const { isLoading, error, items } = useSelector(selectAllCampers);
  const [page, setPage] = useState(1);
  const [hiddenBtn, setHiddenBtn] = useState(false);
  const [selectedCamperId, setSelectedCamperId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCamper(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (page > Math.ceil(items.length / 4)) {
      setHiddenBtn(false);
    } else {
      setHiddenBtn(true);
    }
  }, [page, items]);

  const loadMore = () => {
    setPage(page + 1);
  };

  const handleItemClick = id => {
    setSelectedCamperId(id);
  };

  const closeModal = () => {
    setSelectedCamperId(null);
  };

  const elements = items.map(item => (
    <CamperListItem
      key={item._id}
      {...item}
      onClick={() => handleItemClick(item._id)}
    />
  ));

  return (
    <div className={styles.container}>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      {items && <ul className={styles.list}>{elements}</ul>}
      {items && hiddenBtn && (
        <button type="button" className={styles.loadBtn} onClick={loadMore}>
          Load more
        </button>
      )}
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

export default CamperList;
