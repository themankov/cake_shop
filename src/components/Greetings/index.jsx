import { SectionTitle } from '../index';
import style from './Greetings.module.scss';
import girl from '../../images/girl.jpg';
import cake2 from '../../images/cake2.jpg';
import pancakes from '../../images/pancakes.png';
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
            <img src={pancakes} alt="Пирожные" />
          </div>
          <img
            src={donut}
            alt="Печенье"
            className={`${style.decor} ${style.cookie}`}
          />
        </div>

        <div className={style.text_content}>
          <div className={style.title}><SectionTitle number={'01'} title={'Познакомимся'} /></div>
          
          <p className={style.subheading}>Меня зовут Анна и Я Кондитер</p>
          <p className={style.description}>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris arcu
            quisque montes nulla placerat feugiat. Senectus nibh tempor et
            cubilia urna ut donec. Rutrum dictum condimentum consectetur
            condimentum dolor orci rhoncus.
            <br />
            <br />
            Cursus egestas bibendum sociosqu habitasse per. Libero himenaeos
            ipsum condimentum condimentum nam justo hac. Suspendisse interdum
            blandit tellus; lobortis quisque ultricies turpis.
            <br />
            <br />
            Augue vivamus ac porttitor sapien venenatis orci phasellus mauris
            lacus. Libero arcu curabitur nullam, viverra sodales pulvinar.
            Pulvinar nunc interdum volutpat consectetur ut netus faucibus fusce.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Greetings;
