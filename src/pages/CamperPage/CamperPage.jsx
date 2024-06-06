import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';

const CamperPage = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to="features">Features</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </Container>
  );
};
export default CamperPage;
