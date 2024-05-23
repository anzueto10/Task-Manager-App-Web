/* eslint-disable react/prop-types */
import useTags from "../../hooks/useTags";
import Close from "@mui/icons-material/Close";

const TagInput = ({ tagsDefault }) => {
  const {
    inputValue,
    tags,
    id,
    handleKeyDown,
    handleDeleteTag,
    handleChangeInput,
  } = useTags({ tagsDefault });

  return (
    <div className="w-full border-createrInput border-solid border-2 rounded-md text-white p-3 bg-transparent text-base flex  flex-wrap gap-2 py-2 px-4 overflow-x-auto focus:outline-none">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="p-1 text-sm bg-slate-600 cursor-pointer"
          onClick={handleDeleteTag}
          data-tag={tag}
        >
          {tag}
          <Close fontSize="small" />
        </span>
      ))}

      <input
        type="text"
        value={inputValue}
        className="bg-transparent active:border-0 active:outline-none appearance-none focus:border-0 focus:outline-none w-full"
        id={id}
        onChange={handleChangeInput}
        onKeyDown={handleKeyDown}
      />

      <input type="hidden" value={JSON.stringify(tags)} name="tags" />
    </div>
  );
};

export default TagInput;
