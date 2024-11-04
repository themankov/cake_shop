import { Link } from 'react-router-dom';
import { DesertCard, SectionTitle } from '../index';
import style from './DesertMenu.module.scss';
const DesertMenu = () => {
  return (
    <div className={style.dessert_menu}>
      <SectionTitle />

      <div className={style.dessert_grid}>
        <DesertCard />
        <DesertCard />
        <DesertCard />
        <DesertCard />
        <DesertCard />
        <DesertCard />
        <DesertCard />
        <DesertCard />
      </div>

      <div className={style.menu_button_container}>
        <Link to="#" className={style.menu_button}>
          Смотреть все меню
        </Link>
      </div>
    </div>
  );
};
export default DesertMenu;
