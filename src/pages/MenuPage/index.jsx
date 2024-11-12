import { useEffect, useRef, useState } from 'react';
import style from './MenuPage.module.scss';
import { DesertCard, SkeletonCard } from '../../components';
import { prepareDisplayData } from '../../utils/getData';
import useDebounce from '../../hooks/useDebounce';
const PAGE_SIZE = 8;

const MenuPage = () => {
  const [data, setData] = useState([]); // Все данные
  const [page, setPage] = useState(1); // Текущая страница
  const [inputValue, setInputValue] = useState(''); // Состояние для ввода текста

  const isInputMode = useRef(false);
  const isMounted = useRef(false); // Флаг для проверки, был ли компонент смонтирован
  const loadMoreRef = useRef(null); // Реф для отслеживания последнего элемента

  const debouncedInputValue = useDebounce(inputValue, 1000);
  // Флаг для проверки, есть ли еще данные для загрузки
  // Основная функция для получения данных
  const fetchData = async (page = 0, offset = 0, input = '') => {
    const fetchedData = await prepareDisplayData(
      '/cakes.json',
      page,
      offset,
      input
    );
    
    // Условие для загрузки данных
    if (input) {
      setData(fetchedData); // Показываем только отфильтрованные данные
    } else {
      setData((prevData) =>
        page === 0 ? fetchedData : [...prevData, ...fetchedData]
      );
      if(page===0){
        localStorage.setItem('items',JSON.stringify(data))
      }
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Обновляем значение inputValue при каждом изменении ввода
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const loadMoreData = async () => {
      const offset = page * PAGE_SIZE;
      await fetchData('menu', offset);
    };

    if (page > 1) {
      loadMoreData();
    }
  }, [page]);

  // Обновление данных при изменении debouncedInputValue
  useEffect(() => {
    if (debouncedInputValue) {
      // Если есть текст в поле поиска, фильтруем данные
      isInputMode.current = true;
      fetchData(0, 0, debouncedInputValue);
    } else {
      // Если текст отсутствует, загружаем данные по умолчанию
      const cachedData = JSON.parse(localStorage.getItem('items'));
      if(cachedData){
        setData(cachedData);
      }else{
        fetchData(0, 0); // Первая страница без фильтрации
      }
      setPage(1); // Сбрасываем страницу
    }
  }, [debouncedInputValue]);

  // Настройка IntersectionObserver для отслеживания конца списка
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && isMounted.current) {
          if (isInputMode.current) return;
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

  return (
    <div className={style.content}>
      <h2 className={style.title}>Заказывайте вкусные тортики </h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Поиск"
      />
      <div className={style.dessert_grid}>
        {data.length > 0
          ? data.map((item) => (
              <DesertCard
                key={item.id}
                id={item.id}
                description={item.description}
                img={item.imageUrl}
                name={item.name}
              />
            ))
          : new Array(8).fill(0).map(() => {
              return <SkeletonCard />;
            })}
      </div>

      {/* Элемент для отслеживания конца списка */}
      <div className="intersection-observer" ref={loadMoreRef}></div>
    </div>
  );
};
export default MenuPage;
