// import ReactModal from 'react-modal';
// import icons from '../../img/icons.svg';
// import styles from './modal.module.css';

// ReactModal.setAppElement('#root');

// const Modal = ({ isOpen, onClose, id }) => {
//   return (
//     <ReactModal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       closeTimeoutMS={200}
//       overlayClassName={styles.overlay}
//       className={styles.content}
//     >
//       <button className="close" onClick={onClose}>
//         <svg className="close__icon">
//           <use href={`${icons}#icon-close`}></use>
//         </svg>
//       </button>

//       {/* <h3 className="title">{title}</h3>

//       {children} */}
//     </ReactModal>
//   );
// };

// export default Modal;

// src/components/CamperModal/CamperModal.jsx
import React from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { selectCamperById } from '../../redux/campers/campers-selectors';
import styles from './modal.module.css';

Modal.setAppElement('#root'); // Для доступності

const CamperModal = ({ isOpen, onRequestClose, camperId }) => {
  const camper = useSelector(state => selectCamperById(state, camperId));

  if (!camper) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Camper Details"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <h2>{camper.name}</h2>
      <p>{camper.description}</p>
      <h3>{camper.price}</h3>
      {/* Додаткові деталі кемпера */}
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default CamperModal;
