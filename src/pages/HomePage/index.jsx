import { createRef, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  Contacts,
  DesertLove,
  DesertMenu,
  Goal,
  Greetings,
  HeroSection,

  Testimonials,
} from '../../components';

const HomePage = () => {
  const { selectedLink, navigationData } = useOutletContext();
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
