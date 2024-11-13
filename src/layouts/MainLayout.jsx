import { Outlet } from 'react-router-dom';
import { Header } from '../components';
import { useState } from 'react';

const MainLayout = () => {
  const [selectedLink, setSelectedLink] = useState('Главная');
  const navigationData = ['Главная', 'Начинки тортов', 'Обо мне', 'Контакты'];
  return (
    <>
      <Header data={navigationData} setSelectedLink={setSelectedLink} />
      <Outlet context={{ selectedLink, navigationData }} />
    </>
  );
};
export default MainLayout;
