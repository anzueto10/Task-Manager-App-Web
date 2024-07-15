import { Privacy } from "@/types";

interface Props {
  privacy: Privacy;
  bg: "muted" | "default";
}
const PrivacyCard: React.FC<Props> = ({ privacy, bg }) => {
  return (
    <section
      className={`py-12 md:py-16 lg:py-20 ${
        bg === "muted" && "bg-muted-light dark:bg-muted-dark"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
          {privacy.title}
        </h2>
        <p className="mt-4 max-w-[700px] text-mutedForeground-light dark:text-mutedForeground-dark md:text-lg">
          {privacy.header}
        </p>
        <ul className="mt-4 space-y-2 text-mutedForeground-light dark:text-mutedForeground-dark md:text-lg">
          <li>
            <strong>Account Information:</strong> Your name, email address, and
            password.
          </li>
          <li>
            <strong>Project and Task Data:</strong> The details of the projects
            and tasks you create, including titles, descriptions, due dates, and
            attachments.
          </li>
          <li>
            <strong>Collaboration Data:</strong> The names and email addresses
            of any team members you invite to collaborate on your projects.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about how you use the
            Tasker application, such as the pages you visit, the actions you
            take, and the time spent on the platform.
          </li>
        </ul>
        <p className="mt-4 max-w-[700px] text-mutedForeground-light dark:text-mutedForeground-dark md:text-lg">
          {privacy.footer}
        </p>
      </div>
    </section>
  );
};

export default PrivacyCard;
