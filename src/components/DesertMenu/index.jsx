import { Link } from 'react-router-dom';
import { DesertCard, SectionTitle,SkeletonCard } from '../index';
import style from './DesertMenu.module.scss';
import { useEffect, useState } from 'react';
import { prepareDisplayData } from '../../utils/getData';

const DesertMenu = ({innerRef}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
        const fetchedData = await prepareDisplayData('/cakes.json');
        setData(fetchedData); 
    };

    fetchData();
}, []);
    
 
  return (
    <div className={style.dessert_menu} ref={innerRef}>
      <SectionTitle title={'Десерт Меню'} number={'02'}/>

      <div className={style.dessert_grid}>
       {data.length > 0 ? data.map((item) => (
                     <DesertCard
                         key={item.id}
                         id={item.id}
                         description={item.description}
                         img={item.imageUrl}
                         name={item.name}
                     />
                 )) : (
                     new Array(8).fill(0).map(()=>{
                       return <SkeletonCard/>
                     })
                 )}

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
