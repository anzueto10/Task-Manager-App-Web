import { KeyFeature } from "@/types";
import KeyFeatureCard from "../cards/KeyFeatureCardGrid";

interface Props {
  keyFeatures: Array<KeyFeature>;
}
const KeyFeaturesContainerGrid: React.FC<Props> = ({ keyFeatures }) => {
  return (
    <section className="mx-auto grid max-w-5xl py-12 items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
      {keyFeatures.map((value, key) => (
        <KeyFeatureCard keyFeature={value} key={key} />
      ))}
    </section>
  );
};

export default KeyFeaturesContainerGrid;
