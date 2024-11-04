import style from './Contacts.module.scss';
import geo from './../../images/geo.svg';
import whatsapp from './../../images/whatsapp.svg';
import phone from '../../images/phone.svg';
import { SectionTitle } from '../index';
const Contacts = () => {
  return (
    <div classNameName={style.contact_section}>
      <div className={style.contact_container}>
        <div className={style.contact_info}>
          <SectionTitle />
          <p className={style.description}>
            Lorem ipsum dolor amet, consectetur adipiscing elit. Mauris arcu
            quisque montes nulla placerat feugiat. Senectus nibh tempor et
            cubilia ur ut donec.
          </p>
        </div>

        <div className={style.contact_details}>
          <SectionTitle />
          <ul>
            <li>
              <img src={geo} alt="geo" /> <h1>Москва</h1>
            </li>
            <li>
              <img src={whatsapp} alt="whatsapp" />
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
