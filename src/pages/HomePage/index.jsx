import { createRef, useEffect, useState } from 'react';
import {
  Contacts,
  DesertLove,
  DesertMenu,
  Goal,
  Greetings,
  Header,
  HeroSection,

  Testimonials,
} from '../../components';

const HomePage = () => {
  const [selectedLink, setSelectedLink] = useState('Главная');
  const navigationData = [
    'Главная',
    'Начинки тортов',
    'Обо мне',
    'Контакты',
  ];
  const refs = navigationData.reduce((acc, value) => {
    acc[value] = createRef();
    return acc;
  }, {});
  useEffect(() => {
    refs[selectedLink].current.scrollIntoView({
      behavior: 'smooth',
    });
  }, [selectedLink]);
  return (
    <>
      <Header data={navigationData} setSelectedLink={setSelectedLink} innerRef={refs['Главная']}/>
      <HeroSection innerRef={refs['Главная']}/>
      <Greetings innerRef={refs['Обо мне']}/>
      <DesertMenu innerRef={refs['Начинки тортов']}/>
      <DesertLove />
      <Goal />
      <Testimonials />
      <Contacts innerRef={refs['Контакты']}/>
    </>
  );
};
export default HomePage;
