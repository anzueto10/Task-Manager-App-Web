import { useMemo } from "react";
import bgColors from "../../constants/logoBgColors";
import useCreater from "../../hooks/useCreater";

/* eslint-disable react/prop-types */
const LogoBoardInput = ({ name, logo }) => {
  const Logo = logo;
  const { logoSelect, setLogoSelect } = useCreater();

  const selectedColor = useMemo(
    () => bgColors[Math.floor(Math.random() * bgColors.length)],
    []
  );

  const handleChange = (e) => setLogoSelect(e.target.value);

  {
    /*(logoSelect === name && selectLogo !== undefined) || selectLogo !== null
      ? selectLogo === name && true
      : false;
 */
  }

  const select = logoSelect === name ? true : false;

  return (
    <label
      className={`text-black p-2 rounded-full border-2  border-solid ${
        select ? "border-2 border-sky-400 border-solid" : "border-transparent"
      }`}
      style={{
        backgroundColor: selectedColor,
      }}
    >
      <input
        checked={select}
        type="radio"
        name="logo"
        value={name}
        onChange={handleChange}
        hidden
      />
      <Logo />
    </label>
  );
};

export default LogoBoardInput;
