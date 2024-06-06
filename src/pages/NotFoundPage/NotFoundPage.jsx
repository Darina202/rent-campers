import { Link } from 'react-router-dom';
import styles from './not-found-page.module.css';
import Container from '../../components/Container/Container';

const NotFoundPage = () => {
  return (
    <Container>
      <div className={styles.container}>
        <h1 className={styles.title}>Not Found Page</h1>
        <Link to="/" className={styles.link}>
          To home page
        </Link>
      </div>
    </Container>
  );
};
export default NotFoundPage;
