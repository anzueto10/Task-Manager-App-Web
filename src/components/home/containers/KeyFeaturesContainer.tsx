import KeyFeatureCard from "@/components/home/cards/KeyFeatureCard";
import { KeyFeature } from "@/types";

interface Props {
  keyFeatures: Array<KeyFeature>;
}

const KeyFeaturesContainer: React.FC<Props> = ({ keyFeatures }) => {
  return (
    <ul className="flex flex-col justify-center space-y-4">
      {keyFeatures.map((value, key) => (
        <KeyFeatureCard keyFeature={value} />
      ))}
    </ul>
  );
};

export default KeyFeaturesContainer;
