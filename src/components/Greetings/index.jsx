import { SectionTitle } from '../index';
import style from './Greetings.module.scss';
import girl from '../../images/girl.jpg';
import cake2 from '../../images/cake2.jpg';
import cake3 from '../../images/cake3.jpg';
import donut from '../../images/donut.png';
import flower from '../../images/flower.png';

const Greetings = ({ innerRef }) => {
  return (
    <div
      className={`${style.about_section} section`}
      ref={innerRef}
      id="Обо мне"
    >
      <div className={style.content_wrapper}>
        <div className={style.photo_gallery}>
          <img
            src={flower}
            alt="Цветок"
            className={`${style.decor} ${style.flower}`}
          />
          <div className={`${style.card} ${style.card_1}`}>
            <img src={girl} alt="Анна" />
          </div>
          <div className={`${style.card} ${style.card_2}`}>
            <img src={cake2} alt="Торт" />
          </div>
          <div className={`${style.card} ${style.card_3}`}>
            <img src={cake3} alt="Торт" />
          </div>
          <img
            src={donut}
            alt="Печенье"
            className={`${style.decor} ${style.cookie}`}
          />
        </div>

        <div className={style.text_content}>
          <div className={style.title}>
            <SectionTitle number={'01'} title={'Познакомимся'} />
          </div>

          <p className={style.subheading}>
            Меня зовут Анна и я дипломированный кондитер!
          </p>
          <p className={style.description}>
            Я обожаю создавать сладкие шедевры! Я занимаюсь кондитерским делом и
            превращаю простые ингредиенты в торты, десерты и другие вкусные
            чудеса.
            <br />
            <br />
            Каждое мое изделие — это не просто лакомство, а маленькая история,
            созданная с любовью и вниманием к деталям. Будь то торжественный
            свадебный торт или необычный десерт для вечеринки — я готова
            воплощать Ваши самые сладкие мечты в реальность.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};
export default Greetings;
