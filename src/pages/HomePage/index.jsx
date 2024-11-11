import { createRef, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const refs = navigationData.reduce((acc, value) => {
    acc[value] = createRef();
    return acc;
  }, {});
  useEffect(() => {
    refs[selectedLink].current.scrollIntoView({
      behavior: 'smooth',
    });
  }, [selectedLink]);

  useEffect(() => {
    if (location.state && location.state.targetSection) {
      const sectionName = location.state.targetSection;
      const section = refs[sectionName];

      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <>
      <HeroSection innerRef={refs['Главная']} />
      <Greetings innerRef={refs['Обо мне']} />
      <DesertMenu innerRef={refs['Начинки тортов']} />
      <DesertLove />
      <Goal />
      <Testimonials />
      <Contacts innerRef={refs['Контакты']} />
    </>
  );
};
export default HomePage;
