import style from './Goal.module.scss';
import cake_goal from './../../images/cake_goal.png';
import { SectionTitle } from '../index';
const Goal = () => {
  return (
    <div className={style.about_section}>
      <div className={style.content_wrapper}>
        <div className={style.text_content}>
          <SectionTitle number={'04'} title={'Моя цель'}/>
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
        <div className={style.photo}>
          <img src={cake_goal} alt="pancakes" />
        </div>
      </div>
    </div>
  );
};
export default Goal;
