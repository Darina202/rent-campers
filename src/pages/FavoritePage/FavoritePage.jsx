import FavoriteList from '../../components/FavoriteList/FavoriteList';
import Container from '../../components/Container/Container';
import styles from './favorite-page.module.css';
import FilterBar from '../../components/FilterBar/FilterBar';

const FavoritePage = () => {
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
