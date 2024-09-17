import { useState } from "react";
import style from "./Gallery.module.css";

interface IProps {
  images: string[];
  name: string;
}

export const Gallery = ({ images, name }: IProps) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div className={style.gallery}>
      <img className={style.image} src={currentImage} alt={name} />
      <div className={style.thumbnails}>
        {images.map((image, i) => (
          <img
            key={i}
            className={style.imageThumbnail}
            src={image}
            alt={name}
            onClick={() => setCurrentImage(images[i])}
          />
        ))}
      </div>
    </div>
  );
};
