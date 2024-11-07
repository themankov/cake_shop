import style from './Skeleton.module.scss';

const SkeletonCard = () => {
    return (
        <div className={style.dessert_item}>
            <div className={style.image_container}>
                <div className={style.skeleton_image}></div>
            </div>
            <div className={style.skeleton_text}></div>
            <div className={style.skeleton_description}></div>
            <div className={style.skeleton_description}></div>
            <div className={style.skeleton_description}></div>
        </div>
    );
};

export default SkeletonCard;
