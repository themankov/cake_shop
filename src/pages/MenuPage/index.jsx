import { useEffect, useRef, useState } from 'react';
import style from './MenuPage.module.scss'
import { DesertCard, SkeletonCard } from '../../components';
import { prepareDisplayData } from '../../utils/getData';
const MenuPage=()=>{
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1); // Текущая страница
    const [displayedData, setDisplayedData] = useState([]); // Подгруженные данные для отображения
    const NewPageRef = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
        const fetchedData = await prepareDisplayData('/cakes.json');
        setData(fetchedData); 
        setDisplayedData(fetchedData.slice(0, 8));
    };

    fetchData();
}, []);

useEffect(() => {
    
    // Подгружаем дополнительные данные при изменении страницы
    const loadMoreData = () => {
        const start = (page - 1) * 8;
        const end = page * 8;
        const nextPageData = data.slice(start, end);
        debugger;
        setDisplayedData((prevData) => [...prevData, ...nextPageData]);
    };

    loadMoreData();
}, [page,data]);

const { ref, inView } = useInView({
    threshold: 1,
  });

    return(
        <div className={style.content}>
            <h2 className={style.title}>Заказывайте вкусные тортики </h2>
            <input type={style.text} placeholder='Поиск'/>
            <div className={style.dessert_grid}>
       {displayedData.length > 0 ? displayedData.map((item) => (
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

            {/* Элемент для отслеживания конца списка */}
            <div className="intersection-observer" ref={ref}></div>
        </div>
    )
}
export default MenuPage