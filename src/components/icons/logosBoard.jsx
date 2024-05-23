const logosBoard = ({ name, icon }) => {
  return (
    <label>
      <input type="radio" name="logo" value={name} />
      {icon}
    </label>
  );
};

export default logosBoard;
