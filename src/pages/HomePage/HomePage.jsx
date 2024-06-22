import styles from './home-page.module.css';
import Home from 'components/Home/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { resetCampers } from '../../redux/campers/campers-slice';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
    dispatch(resetCampers());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Home />
    </div>
  );
};
export default HomePage;
