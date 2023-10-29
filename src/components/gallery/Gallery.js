import Filter from "../filter/Filter";
import "./gallery.scss";
import { useEffect, useMemo, useState } from "react";

const Gallery = ({ data, filterText }) => {
  const [photos, setPhotos] = useState([]);
  const [value, setValue] = useState(null);
  useMemo(() => {
    setPhotos(
      data.filter(photo => {
        const textCondition =
          photo.alt.toLowerCase().includes(filterText) ||
          photo.photographer.toLowerCase().includes(filterText);

        switch (value) {
          case "large photos":
            return textCondition && photo.width >= 3000;
          case "small photos":
            return textCondition && photo.width <= 3000 && photo.width >= 2000;
          case "tiny photos":
            return textCondition && photo.width <= 2000;
          default:
            return textCondition;
        }
      })
    );
  }, [data, filterText, value]);
  const getItemState = index => index % 2 === 0;

  const onSelectValue = value => {
    setValue(value);
    console.log(value);
  };

  return (
    <section className="gallery">
      <div className="gallery__wrapper">
        <h2 className="gallery__title">Gallery</h2>
        <Filter onSelectValue={onSelectValue} />
        <div className="gallery__images">
          {photos.map((photo, i) => {
            const item = getItemState(i);
            let classNames = "gallery__images-item";

            if (!item && window.innerWidth >= 992) {
              classNames += " reverse";
            } 
            return (
              <div className={classNames}>
                <div className="gallery__img">
                  <img
                    key={i}
                    src={photo.src.medium}
                    alt={photo.photographer}
                  />
                </div>
                <div className="gallery__descr">
                  <h3>Title: {photo.alt}</h3>
                  <h3>Author: {photo.photographer}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
