import { Link } from 'react-router-dom';

const CamperPage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="features">Features</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </div>
  );
};
export default CamperPage;
