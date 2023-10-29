import { useState, useEffect } from "react";
import axios from "axios";

const usePhotoGallery = () => {
  const _apiBase = "https://api.pexels.com/v1/curated?page=2&per_page=200";
  const _apiKey = "KaqgDnivLZ2BcCImsrTwlmpLugAFROS1NOkX9Kl3S1tBsyOJSv5xzBoH";

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(_apiBase, {
          headers: {
            Authorization: _apiKey,
          },
        });
        setPhotos(response.data.photos.filter(el=>el.alt && el.photographer));
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, [photos]);

  return {photos};
};

export default usePhotoGallery;
