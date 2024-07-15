import { PRIVACY_SECTIONS } from "@/consts";
import PrivacyCard from "../cards/PrivacyCard";

const PrivacysContainer = () => {
  return (
    <>
      {Object.entries(PRIVACY_SECTIONS).map(([key, value], index) => (
        <PrivacyCard
          key={key}
          privacy={value}
          bg={index % 2 !== 0 ? "default" : "muted"}
        />
      ))}
    </>
  );
};

export default PrivacysContainer;
