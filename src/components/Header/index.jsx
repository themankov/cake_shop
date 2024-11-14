import { Link, useLocation } from 'react-router-dom';
import style from './Header.module.scss';
import { useEffect, useState } from 'react';

const Header = ({ data, setSelectedLink, innerRef }) => {
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      let currentSection = null;

      const middleOfScreen = window.scrollY + window.innerHeight / 2;
      const bottomOfScreen = window.scrollY + window.innerHeight * 0.75;
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;

        // Проверяем, если это последняя секция
        if (index === sections.length - 1) {
          // Для последней секции используем нижнюю четверть экрана
          if (bottomOfScreen >= sectionTop) {
            currentSection = section.getAttribute('id');
          }
        } else {
          // Для всех остальных секций проверяем, находится ли середина экрана в пределах секции
          if (middleOfScreen >= sectionTop && middleOfScreen < sectionBottom) {
            currentSection = section.getAttribute('id');
          }
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      } else {
        setActiveSection(null); // Сбрасываем активный раздел, если не попадаем ни в один
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      
    };
  }, []);

  const showNavBar = () => {
    setShowBar((state) => {
      return !state;
    });
  };

  const dataLi = data.map((item, index, arr) => {
    if ((location.pathname === '/menu') & (item === 'Начинки тортов'))
      return (
        <Link
          onClick={() => {
            setSelectedLink(item);
            showNavBar()
          }}
          className={style.activeLink}
        >
          <li>{item}</li>
        </Link>
      );
    return (
      <Link
        to={{
          pathname: '/',
          state: { targetSection: item },
        }}
        onClick={() => {
          setSelectedLink(item);
          showNavBar()
        }}
        className={`${item === activeSection ? style.activeLink : ''}`}
      >
        <li>{item}</li>
      </Link>
    );
  });
  return (
    <header className={style.header}>
      <div className={style.header_logo}>
        <h1>Cakes Smakaeva</h1>
      </div>
      <div className={`${style.hamburger} ${showBar?style.active:''}`} onClick={showNavBar}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>
      <div className={`${style.header_nav} ${showBar?style.active:''}`}>
        <ul>{dataLi}</ul>
      </div>
    </header>
  );
};
export default Header;
