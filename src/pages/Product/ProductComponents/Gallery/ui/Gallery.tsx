import style from "./Gallery.module.css";

interface IProps {
  thumbnails: { image: string; id: number; name: string }[];
  image: string;
  name: string;
}

export const Gallery = ({ thumbnails, image, name }: IProps) => (
  <div className={style.gallery}>
    <img className={style.image} src={image} alt={name} />
    <div className={style.thumbnails}>
      {thumbnails.map((el) => (
        <img
          key={el.id}
          className={style.imageThumbnail}
          src={el.image}
          alt={el.name}
        />
      ))}
    </div>
  </div>
);
