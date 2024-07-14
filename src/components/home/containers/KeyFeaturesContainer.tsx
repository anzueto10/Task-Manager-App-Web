import { KEY_FEATURES } from "@/consts";
import KeyFeatureCard from "@/components/home/cards/KeyFeatureCard";

const KeyFeaturesContainer = () => {
  return (
    <ul className="flex flex-col justify-center space-y-4">
      {Object.entries(KEY_FEATURES).map(([key, value]) => (
        <KeyFeatureCard keyFeature={value} />
      ))}
    </ul>
  );
};

export default KeyFeaturesContainer;
