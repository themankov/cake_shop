import { useState } from 'react';
import style from './Testimonials.module.scss';
import SectionTitle from '../SectionTitle';
import { testimonialsData } from './../../data/Testimonials';
import BackArr from '../../images/left_arrow.svg';
import ForwardArr from '../../images/right_arrow.svg';
import testimonials from '../../images/testimonials.png';

const Testimonials = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  let length = testimonialsData.length;
  const goBack = () => {
    return selectedItem === 0
      ? setSelectedItem(length - 1)
      : setSelectedItem((prevItem) => {
          return prevItem - 1;
        });
  };

  const goForward = () => {
    return selectedItem === length - 1
      ? setSelectedItem(0)
      : setSelectedItem((item) => {
          return item + 1;
        });
  };
  return (
    <div className={style.about_section}>
      <div className={style.content_wrapper}>
        <div className={style.photo}>
          <img src={testimonials} alt="pancakes" />
        </div>

        <div className={style.text_content}>
          <SectionTitle title={'Отзывы клиентов'}  number={'05'}/>
          <p className={style.subheading}>Люди любят десерты!</p>
          <p className={style.description}>
            {testimonialsData[selectedItem].review}
          </p>
          <div className={style.sub_description}>
            <h1 className={style.name}>
              {testimonialsData[selectedItem].name}
            </h1>
            <div className={style.arrows}>
              <img src={BackArr} alt="arrow_left" onClick={goBack} />
              <img src={ForwardArr} alt="arrow_right" onClick={goForward} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
