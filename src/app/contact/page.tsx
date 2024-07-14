import SendContact from "@/components/contact/forms/SendContact";
import Button from "@/components/ui/button/Button";
import Input from "@/components/ui/fields/Input";
import TextArea from "@/components/ui/fields/TextArea";
import MainFooter from "@/components/ui/footers/MainFooter";
import MainNavBar from "@/components/ui/navbars/NavBar";

const ContactPage = () => {
  return (
    <>
      <MainNavBar />
      <main className="w-full py-12 md:py-24 lg:py-32 flex-grow flex flex-col items-center justify-center">
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
      </main>
      <MainFooter />
    </>
  );
};

export default ContactPage;
