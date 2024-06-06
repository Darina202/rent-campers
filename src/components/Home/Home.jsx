import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Welcome to AdventureCampers!</h1>
      <p className={styles.text}>
        Discover the freedom of the open road with our top-of-the-line camper
        rentals. Whether you're planning a weekend getaway or an extended road
        trip, we have the perfect vehicle to suit your needs. Explore Ukraine in
        comfort and style with AdventureCampers!
      </p>
    </div>
  );
};
export default Home;
