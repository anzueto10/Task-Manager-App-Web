import { KeyFeature } from "@/types";

interface Props {
  keyFeature: KeyFeature;
}
const KeyFeatureCardGrid: React.FC<Props> = ({ keyFeature }) => {
  return (
    <article className="grid gap-1">
      <h3 className="text-lg font-bold">{keyFeature.title}</h3>
      <p className="text-sm text-mutedForeground-light dark:text-mutedForeground-dark">
        {keyFeature.description}
      </p>
    </article>
  );
};

export default KeyFeatureCardGrid;
