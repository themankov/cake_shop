import './App.css';
import MainLayout from './layouts/MainLayout';
import { AdminPage, CardPage, HomePage, MenuPage } from './pages';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<CardPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Route>
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  )
}

export default App;
