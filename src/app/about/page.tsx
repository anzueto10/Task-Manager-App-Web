import TryAndLearnButtons from "@/components/ui/button/TryAndLearnButtons";
import MainMainContainer from "@/components/ui/containers/MainMainContainer";
import MainSectionContainer from "@/components/ui/containers/MainSectionContainer";
import MainFooter from "@/components/ui/footers/MainFooter";
import MainNavBar from "@/components/ui/navbars/NavBar";
import Image from "next/image";

const AboutPage = () => {
  return (
    <MainMainContainer notPaddingY>
      <MainSectionContainer grid gridCols={2}>
        <section className="flex flex-col justify-center space-y-4">
          <article className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              About Tasker
            </h1>
            <p className="max-w-[600px] text-mutedForeground-light dark:text-mutedForeground-dark md:text-xl">
              Tasker is a powerful task management app that helps you stay
              organized and productive. Manage projects, track tasks, and
              collaborate with your team.
            </p>
            <p className="max-w-[600px] text-mutedForeground-light dark:text-mutedForeground-dark md:text-xl">
              Our mission is to help individuals and teams streamline their
              workflow and achieve their goals more efficiently. With Tasker,
              you can focus on what matters most and leave the organizational
              tasks to us.
            </p>
          </article>
          <TryAndLearnButtons />
        </section>
        <Image
          src="https://res.cloudinary.com/dmdjzoset/image/upload/v1721000585/tasker/team/ifuknhro89jwzh5lnx5x.png"
          width={700}
          height={700}
          alt="About Tasker"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
        />
      </MainSectionContainer>
      <MainSectionContainer background="muted">
        <article className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-background-light dark:bg-background-dark px-3 py-1 text-sm">
              Our Story
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              How Tasker Came to Be
            </h2>
            <p className="max-w-[900px] text-mutedForeground-light dark:text-mutedForeground-dark md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Tasker was founded in 2020 by a team of productivity enthusiasts
              who were frustrated with the lack of user-friendly task management
              tools on the market. We set out to create a solution that would
              help individuals and teams streamline their workflows and achieve
              their goals more efficiently.
            </p>
          </div>
        </article>
        <article className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Image
            src="https://res.cloudinary.com/dmdjzoset/image/upload/v1721000154/tasker/team/fnuwwhcsr8vx9y0jm4et.webp"
            width="550"
            height="310"
            alt="Our Team"
            className="mx-auto shadow-lg aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Our Team</h3>
              <p className="text-mutedForeground-light dark:text-mutedForeground-dark">
                Tasker is built by a passionate team of developers, designers,
                and project managers who are dedicated to helping you and your
                team work more efficiently.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Our Values</h3>
              <p className="text-mutedForeground-light dark:text-mutedForeground-dark">
                At Tasker, we believe in simplicity, collaboration, and
                continuous improvement. We strive to create a product that is
                intuitive, powerful, and adaptable to your team's needs.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Our Commitment</h3>
              <p className="text-mutedForeground-light dark:text-mutedForeground-dark">
                We are committed to providing our users with the best possible
                experience. We are constantly working to improve Tasker and add
                new features to help you and your team be more productive.
              </p>
            </div>
          </div>
        </article>
      </MainSectionContainer>
      <MainSectionContainer grid gridCols={2}>
        <article className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Why Choose Tasker?
          </h2>
          <p className="max-w-[600px] text-mutedForeground-light dark:text-mutedForeground-dark md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Tasker is designed to help you and your team work more efficiently.
            With its intuitive interface and powerful features, you'll be able
            to focus on what matters most.
          </p>
        </article>
        <TryAndLearnButtons position="right" />
      </MainSectionContainer>
    </MainMainContainer>
  );
};

export default AboutPage;
