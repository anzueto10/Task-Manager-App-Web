import { PAYMENT_PLANS } from "@/consts";
import React from "react";
import PaymentPlanFeatureCard from "@/components/pricing/cards/PaymentPlanFeatureCard";
import { PaymentPlanFeature } from "@/types";

interface Props {
  paymentPlanFeatures: Array<PaymentPlanFeature>;
}

const PaymentPlansFeaturesContainer: React.FC<Props> = ({
  paymentPlanFeatures,
}) => {
  return (
    <ul className="space-y-2 ">
      {paymentPlanFeatures.map((value, key) => (
        <PaymentPlanFeatureCard key={key} paymentPlanFeature={value} />
      ))}
    </ul>
  );
};

export default PaymentPlansFeaturesContainer;
