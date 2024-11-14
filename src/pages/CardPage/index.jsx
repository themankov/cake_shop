import { useEffect, useState } from 'react';
import { Button } from '../../components';
import style from './CardPage.module.scss'
import { useParams } from 'react-router-dom';
import { prepareDisplayData } from '../../utils/getData';
import Skeleton from './Skeleton';
export const CardPage=()=>{
    const {id}=useParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 
    useEffect(() => {
    const fetchData = async () => {
        try {
            const fetchedData = await prepareDisplayData('/cakes.json','card',0,'',String(id));
            setData(fetchedData);
           
        } 
         finally {
            setIsLoading(false)

        }
    };

    fetchData();
}, []);

    
    if (isLoading) {
        return <Skeleton/>; // показать сообщение, пока данные загружаются
    }
    
    const { name, imageUrl, description } = data[0]
    
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
            <Button innerContent={'telegram'}/>
            <Button/>
        </div>
</>
)
}
export default CardPage