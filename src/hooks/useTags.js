import { useEffect, useId, useState } from "react";

const useTags = ({ tagsDefault }) => {
  const [tags, setTags] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const handleChangeInput = (e) => setInputValue(e.target.value);

  const addTag = (tagToAdd) => {
    //Comprobamos que no haya escrito ya ese tag
    if (tags.find((tag) => tag === tagToAdd)) return;

    //Comprobamos que no este vacio
    if (tagToAdd === "") return;

    setTags([...tags, inputValue.trim()]);
    setInputValue("");
  };

  const deleteTag = (tagToDel) => {
    setTags(tags.filter((tag) => tag !== tagToDel));
  };

  const handleKeyDown = (e) => {
    //Si la tecla que precionó es Enter o una coma, hacemos un tag
    if (e.key === "Enter" || e.key === ",") {
      //Aquí prevenimos que se envie el formulario y tambien que se escriba la coma
      e.preventDefault();
      addTag(inputValue.trim());
    }
  };

  const handleDeleteTag = (e) => {
    const tagElement = e.target.closest("[data-tag]");
    const tagToDel = tagElement.getAttribute("data-tag");
    deleteTag(tagToDel);
  };

  useEffect(() => {
    if (tagsDefault) setTags(tagsDefault);
  }, [tagsDefault]);

  const id = useId();

  return {
    tags,
    id,
    inputValue,
    handleChangeInput,
    handleDeleteTag,
    handleKeyDown,
  };
};

export default useTags;
