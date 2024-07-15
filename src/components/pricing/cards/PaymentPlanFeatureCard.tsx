import CheckIcon from "@/components/ui/icons/CheckIcon";
import XIcon from "@/components/ui/icons/XIcon";
import { PaymentPlanFeature } from "@/types";

interface Props {
  paymentPlanFeature: PaymentPlanFeature;
}

const PaymentPlanFeatureCard: React.FC<Props> = ({ paymentPlanFeature }) => {
  return (
    <li>
      <span className="mr-2 inline-block h-4 w-4">
        {paymentPlanFeature.avaible === true ? (
          <CheckIcon className="text-green-500" />
        ) : (
          paymentPlanFeature.avaible === false && (
            <XIcon className="text-red-500" />
          )
        )}
      </span>
      <span className="text-mutedForeground-light dark:text-mutedForeground-dark">
        {paymentPlanFeature.text}
      </span>
    </li>
  );
};

export default PaymentPlanFeatureCard;
