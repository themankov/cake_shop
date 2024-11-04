import style from './SectionTitle.module.scss';
const SectionTitle = () => {
  return (
    <div className={style.section_title}>
      <span className={style.number}>01</span>
      <span className={style.text}>ПОЗНАКОМИМСЯ</span>
    </div>
  );
};
export default SectionTitle;
