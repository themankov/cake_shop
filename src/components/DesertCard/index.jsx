import style from './DesertCard.module.scss';
import cake3 from '../../images/cake3.png';
const DesertCard = ({id,name,description,img}) => {
  return (
    <div className={style.dessert_item}>
      <div className={style.image_container}>
        <img src={img} alt={name} />
      </div>
      <h3>{name}</h3>
      <ul>
        {description.map((item,index)=>{
        return(
         <li key={id}>{item}</li>
        )
        })}

      </ul>
    </div>
  );
};
export default DesertCard;
