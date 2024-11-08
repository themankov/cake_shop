import { useEffect, useRef, useState } from 'react';
import style from './MenuPage.module.scss'
import { DesertCard, SkeletonCard } from '../../components';
import { prepareDisplayData } from '../../utils/getData';

const PAGE_SIZE = 8;



const MenuPage=()=>{
    const [data, setData] = useState([]); // Все данные
    const [page, setPage] = useState(1); // Текущая страница
    const isMounted = useRef(false); // Флаг для проверки, был ли компонент смонтирован
    const loadMoreRef = useRef(null); // Реф для отслеживания последнего элемента
 // Флаг для проверки, есть ли еще данные для загрузки
    const fetchData = async (page, offset) => {
        const fetchedData = await prepareDisplayData('/cakes.json', page,offset);
        console.log(fetchedData);
        setData((prevData) => [...prevData, ...fetchedData]);
    };
 
 // Загрузка начальных данных при монтировании компонента
 useEffect(() => {
    window.scrollTo(0, 0);
    fetchData('menu',0);
}, []);


useEffect(() => {
    const loadMoreData =async () => {
        const offset = page * PAGE_SIZE;
         await fetchData('menu',offset);
    };

    if (page > 1) {
        loadMoreData();
    }
}, [page]);

    // Настройка IntersectionObserver для отслеживания конца списка
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && isMounted.current) {
                    setPage((prevPage) => prevPage + 1); // Увеличиваем страницу для подгрузки новых данных
                }
            },
            { threshold: 1 }
        );

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }

        return () => {
            if (loadMoreRef.current) {
                observer.unobserve(loadMoreRef.current);
            }
        };
    }, []);

    // Установка флага isMounted после первой загрузки
    useEffect(() => {
        isMounted.current = true;
    }, []);

    return(
        <div className={style.content}>
            <h2 className={style.title}>Заказывайте вкусные тортики </h2>
            <input type={style.text} placeholder='Поиск'/>
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

            {/* Элемент для отслеживания конца списка */}
            <div className="intersection-observer" ref={loadMoreRef}></div>
        </div>
    )
}
export default MenuPage