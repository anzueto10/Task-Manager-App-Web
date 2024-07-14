import { KeyFeature } from "@/types";

interface Props {
  keyFeature: KeyFeature;
}
const KeyFeatureCard: React.FC<Props> = ({ keyFeature }) => {
  return (
    <li className="grid gap-1">
      <h5 className="text-xl font-bold">{keyFeature.title}</h5>
      <p className="text-mutedForeground-light dark:text-mutedForegrund-dark">
        {keyFeature.description}
      </p>
    </li>
  );
};

export default KeyFeatureCard;
