import CamperList from 'components/CamperList/CamperList';
import FilterBar from 'components/FilterBar/FilterBar';
import styles from './catalog-page.module.css';
import Container from '../../components/Container/Container';

const CatalogPage = () => {
  return (
    <Container>
      <div className={styles.container}>
        <FilterBar />
        <CamperList />
      </div>
    </Container>
  );
};
export default CatalogPage;
