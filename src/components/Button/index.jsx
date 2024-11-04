import style from './Button.module.scss';
import { Link } from 'react-router-dom';
const Button = () => {
  return (
    <Link to="https://t.me/username" className={style.button}>
      <div className={`${style.svg_background} ${style.telegram}`}></div>
      Написать в Telegram
    </Link>
  );
};
export default Button;
