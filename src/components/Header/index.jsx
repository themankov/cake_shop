
import style from './Header.module.scss';
import { useState } from 'react';

const Header = ({data,  setSelectedLink, innerRef}) => {
  const [showBar, setShowBar] = useState(false);
  const showNavBar = () => {
    setShowBar((state) => {
      return !state;
    });
  };
  const dataLi = data.map((item, index, arr) => {
    return (
      <li
        onClick={() => {
          setSelectedLink(item);
        }}
      >
        {item}
      </li>
    );
  });
  return (
    <header className={style.header}>
      <div className={style.header_logo}>
        <h1 >Cakes Smakaeva</h1>
      </div>
      <nav className={style.header_nav}>
        <ul>
          {dataLi}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
