// import styles from './camper-list.module.css';
// import CamperListItem from '../CamperListItem/CamperListItem';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectAllCampers } from '../../redux/campers/campers-selectors';
// import { fetchCamper } from '../../redux/campers/campers-operations';

// const CamperList = () => {
//   const { isLoading, error, items } = useSelector(selectAllCampers);
//   const [page, setPage] = useState(1);
//   const [hiddenBtn, setHiddenBtn] = useState(false);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchCamper(page));
//   }, [dispatch, page]);

//   useEffect(() => {
//     if (page > Math.ceil(items.length / 4)) {
//       setHiddenBtn(false);
//     } else {
//       setHiddenBtn(true);
//     }
//   }, [page, items]);

//   // console.log(page);
//   const loadMore = () => {
//     setPage(page + 1);
//   };

//   const elements = items.map(
//     ({
//       _id,
//       name,
//       rating,
//       price,
//       location,
//       description,
//       details,
//       gallery,
//       adults,
//       transmission,
//       engine,
//       reviews,
//     }) => {
//       return (
//         <CamperListItem
//           key={_id}
//           id={_id}
//           name={name}
//           rating={rating}
//           price={price}
//           location={location}
//           description={description}
//           details={details}
//           gallery={gallery}
//           adults={adults}
//           transmission={transmission}
//           engine={engine}
//           reviews={reviews}
//         />
//       );
//     }
//   );

//   return (
//     <div className={styles.container}>
//       {isLoading && <p>...Loading</p>}
//       {error && <p>{error}</p>}
//       {items && <ul className={styles.list}>{elements}</ul>}
//       {items && hiddenBtn && (
//         <button type="button" className={styles.loadBtn} onClick={loadMore}>
//           Load more
//         </button>
//       )}
//     </div>
//   );
// };
// export default CamperList;

// src/components/CamperList/CamperList.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamper } from '../../redux/campers/campers-operations';
import { selectAllCampers } from '../../redux/campers/campers-selectors';
import CamperListItem from '../CamperListItem/CamperListItem';
import CamperModal from '../Modal/Modal';
import styles from './camper-list.module.css';

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
    if (page < Math.ceil(items.length / 4)) {
      setHiddenBtn(true);
    } else {
      setHiddenBtn(false);
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
      <ul className={styles.list}>{elements}</ul>
      {hiddenBtn && (
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
