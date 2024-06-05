import MainMenu from './MainMenu/MainMenu';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import CatalogPage from 'pages/CatalogPage/CatalogPage';
import CamperPage from 'pages/CamperPage/CamperPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import Container from './Container/Container';

export const App = () => {
  return (
    <div>
      <MainMenu />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<CamperPage />} />
          {/* <Route path="/catalog/:camperId" element={<OneMoviePage />}>
          <Route path="features" element={<MainMenu />} />
          <Route path="reviews" element={<MainMenu />} />
        </Route> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {/* <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={< />} />
          <Route path="/favorites" element={< />} />
          <Route path="/catalog/:camperId" element={<OneMoviePage />}>
            <Route path="features" element={<MainMenu />} />
            <Route path="reviews" element={<MainMenu />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense> */}
      </Container>
    </div>
  );
};
