interface DefaultProps {
  children: React.ReactNode;
  background?: "muted" | "default";
  grid?: boolean;
  gridCols?: number;
  gridRows?: number;
}

interface GridProps extends DefaultProps {
  grid: true;
}

type Props = DefaultProps | GridProps;
const MainSectionContainer: React.FC<Props> = ({
  children,
  background = "default",
  grid,
  gridCols = 1,
  gridRows,
}) => {
  return (
    <section
      className={`w-full py-12 md:py-24 lg:py-32 ${
        background === "muted" && "bg-muted-light dark:bg-muted-dark"
      }`}
    >
      <div
        className={`container px-4 md:px-6 mx-auto ${
          grid && ` grid items-center gap-6 lg:grid-cols-${gridCols} lg:gap-10 `
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default MainSectionContainer;
