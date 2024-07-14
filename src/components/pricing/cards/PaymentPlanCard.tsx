import Button from "@/components/ui/button/Button";
import { PaymentPlan } from "@/types";
import Link from "next/link";
import PaymentPlansFeaturesContainer from "../containers/PaymentPlansFeaturesContainer";

interface Props {
  paymentPlan: PaymentPlan;
}

const PaymentPlanCard: React.FC<Props> = ({ paymentPlan }) => {
  return (
    <article className="bg-background-light dark:bg-background-dark rounded-lg border text-cardForeground-light dark:text-cardForeground-dark bg-background p-6 shadow-lg">
      <header className="flex flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
          {paymentPlan.name}
        </h3>
        <p className="text-sm text-mutedForeground-light dark:text-mutedForeground-dark">
          {paymentPlan.description}
        </p>
      </header>
      <main className="p-6">
        <header className="space-y-2">
          <p className="text-4xl font-bold">
            {typeof paymentPlan.price === "number"
              ? `$${paymentPlan.price}`
              : paymentPlan.price}
          </p>
          {paymentPlan.period.length > 0 && (
            <p className="text-mutedForeground-light dark:text-mutedForeground-dark">
              per {paymentPlan.period.filter(Boolean).join("/")}
            </p>
          )}
        </header>
        <hr className="my-6 shrink-0 bg-border-light dark:bg-border-dark h-[1px] w-full" />

        <PaymentPlansFeaturesContainer
          paymentPlanFeatures={paymentPlan.features}
        />
      </main>
      <footer className="flex items-center p-6">
        <Link href={paymentPlan.CTA.url}>
          <Button size="xlarge">{paymentPlan.CTA.text}</Button>
        </Link>
      </footer>
    </article>
  );
};

export default PaymentPlanCard;
