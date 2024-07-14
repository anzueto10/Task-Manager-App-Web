import PaymentPlansContainer from "@/components/pricing/containers/PaymentPlansContainer";
import Button from "@/components/ui/button/Button";
import CheckIcon from "@/components/ui/icons/CheckIcon";
import XIcon from "@/components/ui/icons/XIcon";
import MainNavBar from "@/components/ui/navbars/NavBar";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const PricingPage = ({}) => {
  return (
    <>
      <MainNavBar />
      <main className="w-full flex-grow flex flex-col items-center justify-center bg-muted-light dark:bg-muted-dark">
        <div className="container px-4 md:px-6">
          <section className="flex flex-col items-center justify-center space-y-4 text-center">
            <main className="space-y-2">
              <p className="inline-block rounded-lg bg-muted-light dark:bg-muted-dark px-3 py-1 text-sm">
                Pricing
              </p>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Affordable Plans for Every Team
              </h2>
              <p className="max-w-[900px] text-mutedForeground-light dark:text-mutedForeground-dark md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that best fits your team's needs and budget. Get
                started with Tasker today.
              </p>
            </main>
          </section>
          <PaymentPlansContainer />
        </div>
      </main>
    </>
  );
};

export default PricingPage;
