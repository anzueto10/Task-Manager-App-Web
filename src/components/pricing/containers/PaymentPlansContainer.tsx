import { PAYMENT_PLANS } from "@/consts";
import PaymentPlanCard from "../cards/PaymentPlanCard";

const PaymentPlansContainer = () => {
  return (
    <section className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
      {Object.entries(PAYMENT_PLANS).map(([key, value]) => (
        <PaymentPlanCard key={key} paymentPlan={value} />
      ))}
    </section>
  );
};

export default PaymentPlansContainer;
