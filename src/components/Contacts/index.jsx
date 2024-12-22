import style from './Contacts.module.scss';
import geo from './../../images/geo.svg';
import whatsapp2 from './../../images/whatsapp2.svg';
import phone from '../../images/phone.svg';
import { SectionTitle } from '../index';
const Contacts = ({ innerRef }) => {
  return (
    <div
      className={`${style.contact_section} section`}
      ref={innerRef}
      id="Контакты"
    >
      <div className={style.contact_container}>
        <div className={style.contact_info}>
          <SectionTitle
            number={'06'}
            title={'Связаться со мной'}
            brown={'True'}
          />
          <p className={style.description}>
            Хотите сделать праздник незабываемым? Напишите мне, и мы вместе
            создадим идеальный торт специально для вашего мероприятия.
            Индивидуальный подход, вкусные начинки и стильный декор — все для
            вашего удовольствия!
          </p>
        </div>

        <div className={style.contact_details}>
          <SectionTitle number={'07'} title={'Контакты'} />
          <ul>
            <li>
              <img src={geo} alt="geo" /> <h1>Москва</h1>
            </li>
            <li>
              <img src={whatsapp2} alt="whatsapp" />
              <a href="https://wa.me/79296575226">Написать в WhatsApp</a>
            </li>
            <li>
              <img src={phone} alt="phone" />
              <a href="tel:+7(929)6575226"> +7 (929) 657 52 26</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
