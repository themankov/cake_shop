import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';
const navMenu = [
  ['Главная', '/'],
  ['Начинки тортов', '/menu'],
  ['Обо мне', '/about'],
  ['Контакты', '/contacts'],
];
const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header_logo}>
        <h1>Cakes Smakaeva</h1>
      </div>
      <nav className={style.header_nav}>
        <ul>
          {navMenu.map((item, index) => (
            <li key={index}>
              <NavLink to={item[1]} activeClassName={style.activeLink}>
                {item[0]}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
