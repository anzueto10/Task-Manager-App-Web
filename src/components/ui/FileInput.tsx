"use client";
import Button from "./Button";
import ImageIcon from "./icons/ImageIcon";
import { ChangeEvent, useState } from "react";

interface Props {
  setImage: (image: File) => void;
  as?: any;
  name: string;
}

const FileInput: React.FC<Props> = ({ setImage, name, as: As }) => {
  const [bgImage, setBgImage] = useState<string>();
  const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.currentTarget.files?.[0];
    if (image) {
      setImage(image);
      const reader = new FileReader();
      reader.onload = () => {
        setBgImage(reader?.result as string);
      };
      reader.readAsDataURL(image);
    }
  };
  return (
    <div
      className="w-full py-9 bg-background-light dark:bg-background-dark rounded-2xl border gap-3 grid col-span-3 bg-center bg-cover bg-no-repeat"
      style={bgImage ? { backgroundImage: `url('${bgImage}'` } : {}}
    >
      <div className="w-full flex flex-col justify-center items-center text-lg">
        <ImageIcon />
        <h2 className="text-center text-foreground-light dark:text-foreground-dark text-xs leading-4 mt-2">
          PNG, JPG, JPEG
        </h2>
      </div>
      <div className="grid gap-2">
        <h4 className="text-center text-gray-900 text-sm font-medium leading-snug">
          Chose your image here
        </h4>
        <div className="flex items-center justify-center">
          <label>
            {As ? (
              <As
                type="file"
                id="dropzone-file"
                name={name}
                accept="image/png, image/jpeg"
                onInput={handleUploadImage}
                hidden={true}
              />
            ) : (
              <input
                type="file"
                id="dropzone-file"
                name={name}
                accept="image/png, image/jpeg"
                onInput={handleUploadImage}
                hidden={true}
              />
            )}

            <Button as="p">Chose Image</Button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FileInput;
