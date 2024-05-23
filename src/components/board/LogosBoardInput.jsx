/* eslint-disable react/prop-types */

import LogoBoardInput from "./LogoBoardInput";

const LogosBoardInput = ({ logos, selectLogo }) => {
  return (
    <div className="flex flex-wrap justify-between">
      {logos.map((logo, index) => (
        <LogoBoardInput
          logo={logo.logo}
          name={logo.name}
          key={index}
          selectLogo={selectLogo}
        />
      ))}
    </div>
  );
};

export default LogosBoardInput;
