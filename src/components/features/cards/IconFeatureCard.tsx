import { IconKeyFeature } from "@/types";

interface Props {
  feature: IconKeyFeature;
}
const IconFeatureCard: React.FC<Props> = ({ feature }) => {
  return (
    <article className="flex flex-col items-center justify-center space-y-4">
      <span className="h-12 w-12 text-primary-light dark:text-primary-dark ">
        <feature.Icon stroke={2} />
      </span>

      <h3 className="text-xl font-bold">{feature.title}</h3>
      <p className="text-mutedForeground-light dark:text-mutedForeground-dark text-center">
        {feature.description}
      </p>
    </article>
  );
};

export default IconFeatureCard;
