import icons from '../../img/icons.svg';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { selectCamperById } from '../../redux/campers/campers-selectors';
import styles from './modal.module.css';
import MainDesc from './MainDesc/MainDesc';
import AddDesc from './AddDesc/AddDesc';

Modal.setAppElement('#root');

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
      closeTimeoutMS={200}
    >
      <button className={styles.close} onClick={onRequestClose}>
        <svg className={styles.closeIcon}>
          <use href={`${icons}#icon-close`}></use>
        </svg>
      </button>
      <MainDesc camper={camper} />
      <AddDesc camper={camper} />
    </Modal>
  );
};

export default CamperModal;
