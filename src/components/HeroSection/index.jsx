import style from './HeroSection.module.scss';
import { Button } from './../index';
import macaroon_red from '../../images/macaron_red.png';
import macaroon_white from '../../images/macaroon_white.png';
import macaroon_rose from '../../images/macaron_rose.png';
import cake from '../../images/cake.png';
import blueberry from '../../images/blueberry.png';
import blueberry2 from '../../images/blueberry2.png';
import rasberry from '../../images/rasberry.png';
import blackberry from '../../images/blackberry.png';
const HeroSection = ({ innerRef }) => {
  return (
    <div className={`${style.hero} section`} ref={innerRef} id="Главная">
      <h2>Торты на заказ в Москве</h2>
      <h1 className={style.hero_title}>
        CAKES <br /> SMAKAEVA
      </h1>
      <div className={style.hero_subtitle}>Кондитер Анна Смакаева</div>
      <div className={style.hero_buttons}>
        <Button innerContent={'telegram'}/>
        <Button />
      </div>
      <img
        src={macaroon_red}
        alt="Макарон"
        className={`${style.decor} ${style.macaron_red}`}
      />
      <img
        src={macaroon_white}
        alt="Макарон"
        className={`${style.decor} ${style.macaron_white}`}
      />
      <img
        src={macaroon_rose}
        alt="Макарон"
        className={`${style.decor} ${style.macaron_rose}`}
      />
      <img src={cake} alt="Торт" className={`${style.decor} ${style.cake}`} />
      <img
        src={blueberry}
        alt="Ягода"
        className={`${style.decor} ${style.blueberry}`}
      />
      <img
        src={blueberry2}
        alt="Ягода"
        className={`${style.decor} ${style.blueberry2}`}
      />
      <img
        src={rasberry}
        alt="Ягода"
        className={`${style.decor} ${style.rasberry}`}
      />
      <img
        src={blackberry}
        alt="Ягода"
        className={`${style.decor} ${style.blackberry}`}
      />
    </div>
  );
};
export default HeroSection;
