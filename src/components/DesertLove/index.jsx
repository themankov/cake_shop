import style from './DesertLove.module.scss';
import { Button, SectionTitle } from '../index';
import pancakes2 from './../../images/pancakes2.jpg';
const DesertLove = () => {
  return (
    <div className={style.about_section}>
      <div className={style.content_wrapper}>
        <div className={style.photo}>
          <img src={pancakes2} alt="pancakes" />
        </div>

        <div className={style.text_content}>
          <SectionTitle
            number={'03'}
            title={'Высокие стандарты качества и сервиса'}
          />

          <div className={style.description}>
            Я готовлю только из натуральных, высококачественных продуктов.
            Pаботaю с маpкaми: 
            <br />
            <br />
            Чудское oзерo, Петмoл, Экомилк, Zealаndia, Нoсhlаnd, Gаlbаni,
            Cаllеbаut, Siсао, Сасао Веrry, Тоmеr, Rаvifruit, АGRОВАR. На сайте
            вы можете увидеть разнообразие начинок и заказать практически любой
            индивидуальный дизайн по своему образцу.
            <br />
            <br />
            Доставка по Москве и МО.
          </div>
          <div className={style.btn_container}>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DesertLove;
