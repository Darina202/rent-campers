import styles from './add-desc.module.css';
import icons from '../../../img/icons.svg';
import BookingForm from 'components/BookingForm/BookingForm';
import Reviews from '../../Reviews/Reviews';

const AddDesc = ({ camper }) => {
  const {
    details,
    adults,
    children,
    transmission,
    form,
    engine,
    length,
    width,
    height,
    tank,
    consumption,
    reviews,
  } = camper;
  console.log(camper);
  return (
    <div className={styles.container}>
      <Reviews reviews={reviews} />
      <div></div>
      <BookingForm />
    </div>
  );
};
export default AddDesc;
