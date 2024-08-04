import { PaymentPlanFeature } from "@/types";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface Props {
  paymentPlanFeature: PaymentPlanFeature;
}

const PaymentPlanFeatureCard: React.FC<Props> = ({ paymentPlanFeature }) => {
  return (
    <li className="items-center justify-start flex flex-row">
      <span className="mr-2 inline-block h-4 w-4">
        {paymentPlanFeature.avaible === true ? (
          <CheckIcon className="text-green-500" />
        ) : (
          paymentPlanFeature.avaible === false && (
            <XMarkIcon className="text-red-500" />
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
