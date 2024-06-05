import BookingForm from 'components/BookingForm/BookingForm';
import Categories from './Categories/Categories';
import Details from './Details/Details';
import styles from './features.module.css';

const Features = ({ camper }) => {
  const {
    details,
    adults,
    transmission,
    engine,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = camper;

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Categories
          details={details}
          adults={adults}
          transmission={transmission}
          engine={engine}
        />
        <Details
          form={form}
          length={length}
          width={width}
          height={height}
          tank={tank}
          consumption={consumption}
        />
      </div>
      <BookingForm />
    </div>
  );
};
export default Features;
