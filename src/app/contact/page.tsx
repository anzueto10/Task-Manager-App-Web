import SendContact from "@/components/contact/forms/SendContact";
import MainMainContainer from "@/components/ui/containers/MainMainContainer";

const ContactPage = () => {
  return (
    <MainMainContainer>
      <div className="container px-4 md:px-6">
        <section className="flex flex-col items-center justify-center space-y-4 text-center">
          <main className="space-y-2">
            <p className="inline-block rounded-lg bg-muted-light dark:bg-muted-dark px-3 py-1 text-sm">
              Contact
            </p>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="max-w-[900px] text-mutedForeground-light dark:text-mutedForeground-dark md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a question or want to learn more about Tasker? Fill out the
              form below and we'll get back to you as soon as possible.
            </p>
          </main>
        </section>
        <section className="mx-auto w-full max-w-md space-y-2 mt-8">
          <SendContact />
        </section>
      </div>
    </MainMainContainer>
  );
};

export default ContactPage;
