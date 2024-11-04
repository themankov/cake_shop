import style from './DesertCard.module.scss';
import cake3 from '../../images/cake3.png';
const DesertCard = () => {
  return (
    <div className={style.dessert_item}>
      <div className={style.image_container}>
        <img src={cake3} alt="Фисташка-Малина" />
      </div>
      <h3>Фисташка-Малина</h3>
      <p>
        -Фисташковый бисквит
        <br />
        -Фисташковый крем со свежей малиной
        <br />
        -Малиновое конфи
      </p>
    </div>
  );
};
export default DesertCard;
