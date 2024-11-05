import style from './SectionTitle.module.scss';
const SectionTitle = ({title,number,brown}) => {
  return (
    <div className={style.section_title} >
      <span className={style.number}>{number}</span>
      <span className={`${style.text} ${brown? style.text_brown: ''}`}>{title}</span>
    </div>
  );
};
export default SectionTitle;
