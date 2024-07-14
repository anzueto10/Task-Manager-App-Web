import { KEY_FEATURES } from "@/consts";
import IconFeatureCard from "../cards/IconFeatureCard";

const IconFeaturesContainer = () => {
  return (
    <section className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
      {Object.entries(KEY_FEATURES.ICON_FEATURES).map(([key, value]) => (
        <IconFeatureCard key={key} feature={value} />
      ))}
    </section>
  );
};

export default IconFeaturesContainer;
