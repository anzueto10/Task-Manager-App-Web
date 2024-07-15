import PaymentPlansContainer from "@/components/pricing/containers/PaymentPlansContainer";
import MainMainContainer from "@/components/ui/containers/MainMainContainer";

const PricingPage = () => {
  return (
    <MainMainContainer background="muted" notPaddingY>
      <div className="container px-4 md:px-6">
        <section className="flex flex-col items-center justify-center space-y-4 text-center">
          <main className="space-y-2 py-5 2xl:py-0">
            <p className="inline-block rounded-lg bg-background-light dark:bg-background-dark px-3 py-1 text-sm">
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
    </MainMainContainer>
  );
};

export default PricingPage;
