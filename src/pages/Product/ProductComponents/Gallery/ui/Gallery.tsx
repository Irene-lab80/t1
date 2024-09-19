import { useState } from "react";
import style from "./Gallery.module.css";
import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";
import { ThumbnailPlugin } from "../ThumbnailPlugin";

interface IProps {
  images: string[];
  name: string;
}

export const Gallery = ({ images, name }: IProps) => {
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 3, spacing: 5 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 3, spacing: 10 },
        },
      },
      slides: { perView: 3 },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <div className={style.wrapper}>
      <div ref={ref} className="keen-slider">
        {images.map((image, i) => (
          <div key={i} className="keen-slider__slide">
            <img className={style.image} src={image} alt={name} />
          </div>
        ))}
      </div>
      {images?.length > 1 && (
        <div ref={thumbnailRef} className={`'keen-slider' ${style.thumbnails}`}>
          {images.map((image, i) => (
            <div key={i} className="keen-slider__slide">
              <img
                className={`${style.imageThumbnail} ${
                  currentSlide === i ? style.imageThumbnailActive : ""
                }`}
                src={image}
                alt={name}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
