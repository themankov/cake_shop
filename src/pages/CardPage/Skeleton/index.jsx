import style from './Skeleton.module.scss'
const Skeleton=()=>{
    return(
        <>
        <div className={style.content}>
        <div className={style.cake_image}>
            <div className={style.img}></div>
        </div>
        <div className={style.cake_info}>
            <div className={style.name}></div>
            <div className={style.text}></div>
            <div className={style.text}></div>
            <div className={style.text}></div>
        </div>
    </div>
    <div className={style.buttons}>
    <div className={style.button}></div>
    <div className={style.button}></div>
            </div>
    </>
    )
}
export default Skeleton