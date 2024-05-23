import { useEffect, useRef, useState } from "react";

const useInputImg = ({ defaultImage }) => {
  const [image, setImage] = useState(null);
  const labelBackground = useRef(null);

  const readFile = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => resolve(e.currentTarget.result);
      reader.onerror = (e) => reject(e);
    });
  };

  const handleUploadImage = async (e) => {
    try {
      const imageUrl = await readFile(e.target.files[0]);
      setImage(imageUrl);
    } catch (error) {
      console.error("Error reading file:", error);
    }
  };

  const deleteImage = () => setImage(null);

  const putBgImg = (url) => setImage(url);

  useEffect(() => {
    if (defaultImage) setImage(defaultImage);
  }, [defaultImage]);

  useEffect(() => {
    if (image) labelBackground.current.style.backgroundImage = `url(${image})`;
    else if (image === null) labelBackground.current.style.backgroundImage = "";
  }, [image]);

  return {
    image,
    handleUploadImage,
    deleteImage,
    labelBackground,
    putBgImg,
  };
};

export default useInputImg;
