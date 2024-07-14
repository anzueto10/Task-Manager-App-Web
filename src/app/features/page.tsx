import IconFeaturesContainer from "@/components/features/containers/IconFeaturesContainer";
import KeyFeaturesContainerGrid from "@/components/features/containers/KeyFeaturesContainerGrid";
import MainSectionContainer from "@/components/ui/containers/MainSectionContainer";
import MainFooter from "@/components/ui/footers/MainFooter";
import MainNavBar from "@/components/ui/navbars/NavBar";
import { KEY_FEATURES } from "@/consts";

const FeaturesPage = () => {
  return (
    <>
      <MainNavBar />
      <main className="w-full flex flex-col items-center">
        <MainSectionContainer>
          <section className="flex flex-col items-center justify-center space-y-4 text-center">
            <article className="space-y-2">
              <p className="inline-block rounded-lg bg-muted-light dark:bg-muted-dark px-3 py-1 text-sm">
                Features
              </p>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Powerful Features to Boost Your Productivity
              </h2>
              <p className="max-w-[900px] text-mutedForeground-light dark:text-mutedForeground-dark md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Tasker offers a suite of features to help you and your team stay
                organized and on top of your projects.
              </p>
            </article>
          </section>
          <IconFeaturesContainer />
        </MainSectionContainer>

        <MainSectionContainer background="muted">
          <section className="flex flex-col items-center justify-center space-y-4 text-center">
            <article className="space-y-2">
              <p className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Key Features
              </p>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Streamline Your Workflow
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Tasker offers a range of features to help you manage your tasks
                and projects more efficiently. From task scheduling and project
                tracking to team collaboration and reporting, Tasker has you
                covered.
              </p>
            </article>
          </section>
          <KeyFeaturesContainerGrid
            keyFeatures={[
              ...Object.entries(KEY_FEATURES.HOME_FEATURES).map(
                ([key, value]) => ({
                  description: value.description,
                  title: value.title,
                })
              ),
              ...Object.entries(KEY_FEATURES.ICON_FEATURES).map(
                ([key, value]) => ({
                  description: value.description,
                  title: value.title,
                })
              ),
            ]}
          />
        </MainSectionContainer>
      </main>
      <MainFooter />
    </>
  );
};

export default FeaturesPage;
