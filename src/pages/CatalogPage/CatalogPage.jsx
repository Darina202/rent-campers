import CamperList from 'components/CamperList/CamperList';
import FilterBar from 'components/FilterBar/FilterBar';
import styles from './catalog-page.module.css';

const CatalogPage = () => {
  return (
    <div className={styles.container}>
      <FilterBar />
      <CamperList />
    </div>
  );
};
export default CatalogPage;
