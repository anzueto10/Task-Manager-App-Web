import KeyFeaturesContainer from "@/components/home/containers/KeyFeaturesContainer";
import MainSectionContainer from "@/components/ui/containers/MainSectionContainer";
import TestimonialsContainer from "@/components/home/containers/TestimonialsContainer";
import SendMail from "@/components/home/forms/SendMail";
import { HOME_PAGE_TEXTS, KEY_FEATURES } from "@/consts";
import Image from "next/image";
import Link from "next/link";
import TryAndLearnButtons from "@/components/ui/button/TryAndLearnButtons";
import MainMainContainer from "@/components/ui/containers/MainMainContainer";

const HomePage = () => {
  return (
    <MainMainContainer notPaddingY>
      <MainSectionContainer>
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <article className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              {HOME_PAGE_TEXTS.MAIN_TITLE}
            </h1>
            <p className="text-mutedForeground-light dark:text-mutedForeground-dark md:text-lg max-w-[600px]">
              {HOME_PAGE_TEXTS.MAIN_SUBTITLE}
            </p>

            <TryAndLearnButtons />
          </article>

          <Image
            className="mx-auto aspect-video overflow-hidden rounded-xl sm:w-full lg:order-last lg:aspect-square dark:hidden"
            alt="Tasker Image"
            src="https://res.cloudinary.com/dmdjzoset/image/upload/v1718737744/tasker/svg/hjbl0dznlvdaagq6ad46.svg"
            width={550}
            height={550}
          />
          <Image
            className="mx-auto aspect-video overflow-hidden rounded-xl sm:w-full lg:order-last lg:aspect-square hidden dark:block"
            alt="Tasker Image"
            src="https://res.cloudinary.com/dmdjzoset/image/upload/v1720913740/tasker/svg/hiftrh7pwbsry3t9sv18.svg"
            width={550}
            height={550}
          />
        </div>
      </MainSectionContainer>

      <MainSectionContainer background="muted">
        <article className="flex flex-col items-center justify-center space-y-2 text-center">
          <p className="inline-block rounded-lg px-3 py-1 text-sm">
            Key Features
          </p>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Manage Your Tasks with Ease
          </h2>
          <p className="max-w-[900px] text-mutedForeground-light dark:text-mutedForeground-dark md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Tasker provides a comprehensive set of tools to help you stay on top
            of your projects and tasks. From project management to task tracking
            and collaboration, Tasker has you covered.
          </p>
        </article>

        <article className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Image
            src="https://res.cloudinary.com/dmdjzoset/image/upload/v1718737744/tasker/svg/cibltue99w16aryb3obt.svg"
            width="550"
            height="310"
            alt="Project Management"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
          <KeyFeaturesContainer
            keyFeatures={Object.entries(KEY_FEATURES.HOME_FEATURES).map(
              ([key, value]) => ({
                description: value.description,
                title: value.title,
              })
            )}
          />
        </article>
      </MainSectionContainer>
      <MainSectionContainer grid gridCols={2}>
        <article className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Streamline Your Workflow with Tasker
          </h2>
          <p className="max-w-[600px] text-mutedForeground-light dark:text-mutedForeground-dark md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Tasker is designed to help you and your team work more efficiently.
            With its intuitive interface and powerful features, you'll be able
            to focus on what matters most.
          </p>
        </article>
        <article className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
          <TryAndLearnButtons position="right" />
        </article>
      </MainSectionContainer>

      <MainSectionContainer background="muted">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <article className="space-y-2">
            <h5 className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Testimonials
            </h5>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              What Our Users Say
            </h2>
            <p className="max-w-[900px] text-mutedForeground-light dark:text-mutedForeground-dark md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our satisfied customers and see how Tasker has helped
              them streamline their workflow.
            </p>
          </article>
          <article>
            <TestimonialsContainer />
          </article>
        </div>
      </MainSectionContainer>
      <MainSectionContainer grid>
        <article className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center">
            Ready to Streamline Your Workflow?
          </h2>
          <p className="mx-auto max-w-[600px] text-mutedForeground-light dark:text-mutedForeground-dark md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
            Sign up for Tasker today and experience the difference it can make
            in your team's productivity.
          </p>
        </article>
        <article className="mx-auto w-full max-w-sm space-y-2">
          <SendMail />
          <p className="text-xs text-mutedForeground-light dark:text-mutedForeground-dark text-center">
            Sign up to start your free trial.{" "}
            <Link
              href="#"
              className="underline underline-offset-2"
              prefetch={false}
            >
              Terms &amp; Conditions
            </Link>
          </p>
        </article>
      </MainSectionContainer>
    </MainMainContainer>
  );
};

export default HomePage;
