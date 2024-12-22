import { prepareDisplayData } from '../../utils/getData';
import style from './Button.module.scss';
import { Link } from 'react-router-dom';
const Button = ({ innerContent }) => {
  return (
    <Link
      className={style.button}
      to={
        innerContent === 'telegram'
          ? 'https://t.me/79296575226'
          : 'https://wa.me/79296575226'
      }
    >
      <div
        className={`${style.svg_background} ${
          innerContent === 'telegram' ? style.telegram : style.whatsapp
        }`}
      ></div>
      {innerContent === 'telegram'
        ? 'Написать в Telegram'
        : 'Написать в Whatsapp'}
    </Link>
  );
};
export default Button;
