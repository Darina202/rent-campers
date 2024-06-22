import FavoriteList from '../../components/FavoriteList/FavoriteList';
import Container from '../../components/Container/Container';
import styles from './favorite-page.module.css';
import FilterBar from '../../components/FilterBar/FilterBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { resetCampers } from '../../redux/campers/campers-slice';

const FavoritePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
    dispatch(resetCampers());
  }, [dispatch]);

  return (
    <Container>
      <div className={styles.container}>
        <FilterBar />
        <FavoriteList />
      </div>
    </Container>
  );
};
export default FavoritePage;
