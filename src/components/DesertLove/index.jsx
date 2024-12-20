import style from './DesertLove.module.scss';
import { Button, SectionTitle } from '../index';
import pancakes2 from './../../images/pancakes2.png';
const DesertLove = () => {
  return (
    <div className={style.about_section}>
      <div className={style.content_wrapper}>
        <div className={style.photo}>
          <img src={pancakes2} alt="pancakes" />
        </div>

        <div className={style.text_content}>
          <SectionTitle number={'03'} title={'Десерты с любовью'} />
          <p className={style.subheading}>
            Попробуйте десерты ручной работы в Москве
          </p>
          <div className={style.description}>
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
