import style from './Goal.module.scss';
import cake_goal from './../../images/cake_goal.png';
import { SectionTitle } from '../index';
const Goal = () => {
  return (
    <div className={style.about_section}>
      <div className={style.content_wrapper}>
        <div className={style.text_content}>
          <div className={style.title}>
            <SectionTitle number={'04'} title={'Ценовая политика'} />
          </div>

          <p className={style.description}>
            <h2>Торты от 2 кг:</h2>
            <ul>
              <li>
                <h4>Бисквитные торты:</h4> от <strong>3000 руб. за кг</strong>.
                <ul>
                  <li>
                    Декор: велюр (шоколад), мастика, изомальт, живые или
                    вафельные цветы, кремовый декор, роспись.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Муссовый торт "Клубничный мохито":</h4>{' '}
                <strong>3000 руб. за кг</strong>.
                <ul>
                  <li>Декор: шоколадный или ягодный.</li>
                  <li>Покрытие: велюр или зеркальная глазурь.</li>
                </ul>
              </li>
              <li>
                <h4>Медовик домашний и Наполеон:</h4> без декора —{' '}
                <strong>1600 руб. за кг</strong>.
              </li>
            </ul>

            <h2>Бенто-торты:</h2>
            <h4>Базовые варианты:</h4>
            <ul>
              <li>Начинки: сливочно-творожный с ягодами, медовик.</li>
              <li>Декор: надпись или маленький рисунок.</li>
              <li>Комплектация: подарочная упаковка (ленточка, ложечка).</li>
            </ul>
            <p>
              <strong>Размеры и цены:</strong>
            </p>
            <ul>
              <li>
                S (350–400 гр., 2 порции): от <strong>1000 руб.</strong>
              </li>
              <li>
                M (600–750 гр., 3–4 порции): от <strong>1500 руб.</strong>
              </li>
              <li>
                L (900–1000 гр., 5–6 порций): от <strong>1900 руб.</strong>
              </li>
            </ul>

            <h4>Дополнительные начинки:</h4>
            <ul>
              <li>
                Сникерс,Фисташка-малина,Вишня-шоколад,Красный
                бархат,Лимон-ваниль
              </li>
            </ul>
            <p>
              <strong>Размеры и цены с дополнительными начинками:</strong>
            </p>
            <ul>
              <li>
                S (350–400 гр., 2 порции): от <strong>1100 руб.</strong>
              </li>
              <li>
                M (600–750 гр., 3–4 порции): от <strong>1600 руб.</strong>
              </li>
              <li>
                L (900–1000 гр., 5–6 порций): от <strong>2000 руб.</strong>
              </li>
            </ul>

            <h2>Меренговый рулет:</h2>
            <p>
              Цена от <strong>1600 руб.</strong>. Стоимость зависит от начинки и
              декора.
            </p>

            <h2>Прочие десерты:</h2>
            <p>
              Остальные десерты можно заказать от <strong>900 руб.</strong>.
            </p>
          </p>
        </div>
        <div className={style.photo}>
          <img src={cake_goal} alt="pancakes" />
        </div>
      </div>
    </div>
  );
};
export default Goal;
