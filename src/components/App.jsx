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
      {/* <Container> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<CamperPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* </Container> */}
    </div>
  );
};
