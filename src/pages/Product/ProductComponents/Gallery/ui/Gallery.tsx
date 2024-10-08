import { useKeenSlider } from "keen-slider/react";
import { ThumbnailPlugin } from "../ThumbnailPlugin";
import "keen-slider/keen-slider.min.css";
import style from "./Gallery.module.css";

interface IProps {
  images: string[];
  name: string;
}

export const Gallery = ({ images, name }: IProps) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  });

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      breakpoints: {
        "(max-width: 1200px)": {
          slides: {
            perView: 4,
            spacing: 10,
          },
        },
        "(max-width: 480px)": {
          slides: {
            perView: 3,
            spacing: 10,
          },
        },
      },
      initial: 0,
      slides: {
        perView: 6,
        spacing: 20,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <div className={style.wrapper}>
      <div ref={sliderRef} className="keen-slider">
        {images.map((img, i) => (
          <div key={i} className={`keen-slider__slide ${style.slide}`}>
            <img className={style.img} src={img} alt={name} />
          </div>
        ))}
      </div>

      {images?.length > 1 && (
        <div ref={thumbnailRef} className={`keen-slider ${style.thumbnail}`}>
          {images.map((img, i) => (
            <div key={i} className={`keen-slider__slide ${style.slide}`}>
              <img className={style.img} src={img} alt={name} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
