import { Task } from "@/types";
import TagContainer from "@/components/tasks/tags/TagContainer";

interface Props {
  task: Task;
}

const TaskCard: React.FC<Props> = ({ task }) => {
  const { description, image, tags, createdAt, title, status } = task;
  return (
    <li className="mt-2 ring-offset-background-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 py-4 dark:ring-offset-background-dark rounded-lg border border-border-light bg-card-light text-foreground-light shadow-sm p-4 dark:text-primary-dark dark:bg-card-dark dark:border-border-dark">
      <section className="flex items-center justify-between">
        <header>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-muted-foreground text-foreground-light dark:text-secondaryForeground-dark">
            {description}
          </p>
        </header>
        <main className="flex items-center gap-2">
          <span className="text-mutedForeground-light dark:text-mutedForeground-dark">
            Date: {createdAt}
          </span>
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background-light border-input-light bg-background-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent-light hover:text-accentForeground-light h-9 rounded-md px-3 dark:ring-offset-background-dark dark:border-input-dark dark:hover:bg-accent-dark dark:hover:text-accentForeground-dark dark:bg-background-dark">
            {status}
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background-light border-input-light bg-background-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent-light hover:text-accentForeground-light h-9 rounded-md px-3 dark:ring-offset-background-dark dark:border-input-dark dark:hover:bg-accent-dark dark:hover:text-accentForeground-dark dark:bg-background-dark">
            Edit
          </button>
        </main>
      </section>
      <section className="mt-4">
        <img
          src={image}
          alt={title}
          width="300"
          height="200"
          className="rounded-md"
          style={{ aspectRatio: "300 / 200", objectFit: "cover" }}
        />
      </section>
    </li>
  );
};

export default TaskCard;
