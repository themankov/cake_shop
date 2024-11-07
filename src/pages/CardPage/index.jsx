import { useEffect, useState } from 'react';
import { Button } from '../../components';
import style from './CardPage.module.scss'
import { useParams } from 'react-router-dom';
import { prepareDisplayData } from '../../utils/getData';
export const CardPage=()=>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 
    useEffect(() => {
    const fetchData = async () => {
        try {
            const fetchedData = await prepareDisplayData('/cakes.json');
            setData(fetchedData);
        } catch (error) {
            console.error("Ошибка загрузки данных:", error);
        } finally {
            setIsLoading(false);

        }
    };

    fetchData();
}, []);

    const {id}=useParams();
    if (isLoading) {
        return <div>Загрузка...</div>; // показать сообщение, пока данные загружаются
    }
    const { name, imageUrl, description } = data.find(
            (item, index) => {
              return String(item.id) === String(id);
            }
          );


    
    
return(
    <>
    <div className={style.content}>
    <div className={style.cake_image}>
        <img src={imageUrl} alt={name}/>
    </div>
    <div className={style.cake_info}>
        <h2>{name}</h2>
        <ul className={style.cake_description}>
          {description.map((item,index)=>{
            return(
                <li key={index}>{item}</li>
            )
          })}
        </ul>
        
    </div>
</div>
<div className={style.buttons}>
            <Button/>
            <Button/>
        </div>
</>
)
}
export default CardPage