/* eslint-disable react/prop-types */
import useInputImg from "../../hooks/useInputImg";
import UploadIcon from "../icons/upload";

const ImageTaskInput = ({ defaultImage }) => {
  const { image, handleUploadImage, deleteImage, labelBackground } =
    useInputImg({
      defaultImage,
    });

  const handleDeleteImage = (e) => {
    e.preventDefault();
    deleteImage();
  };

  return (
    <label
      htmlFor="dropzone-file"
      ref={labelBackground}
      className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 xl:min-h-28 hover:opacity-70"
      style={{
        backgroundPosition: "center center",
        backgroundSize: "100%",
      }}
      title="Right Click to delete Image"
      onContextMenu={handleDeleteImage}
    >
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
        {/**  <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
        </svg> */}
        {image === null && (
          <>
            <UploadIcon />
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Task Image Optional</span>
            </p>
          </>
        )}
      </div>
      <input
        id="dropzone-file"
        type="file"
        className="hidden"
        name="image"
        onInput={handleUploadImage}
        accept="image/*"
        data-img-url={image}
      />
    </label>
  );
};

export default ImageTaskInput;
