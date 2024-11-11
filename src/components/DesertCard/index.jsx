import style from './DesertCard.module.scss';
import { Link } from 'react-router-dom';
const DesertCard = ({ id, name, description, img }) => {
  return (
    <Link to={`/${id}`}>
      <div className={style.dessert_item}>
        <div className={style.image_container}>
          <img src={img} alt={name} />
        </div>
        <h3>{name}</h3>
        <ul>
          {description.map((item, index) => {
            return <li key={id}>{`-${item}`}</li>;
          })}
        </ul>
      </div>
    </Link>
  );
};
export default DesertCard;
