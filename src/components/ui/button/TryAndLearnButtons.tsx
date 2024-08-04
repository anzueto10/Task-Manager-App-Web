import Link from "next/link";
import Button from "@/components/ui/button/Button";
import { PositionTypesButton } from "@/types";

interface Props {
  position?: PositionTypesButton;
}

const TryAndLearnButtons: React.FC<Props> = ({ position = "left" }) => {
  return (
    <div
      className={`flex flex-row gap-2 ${
        position === "left"
          ? "mr-auto"
          : position === "right"
            ? "ml-auto"
            : position === "bottom"
              ? "mt-auto"
              : position === "top" && "mb-auto"
      }`}
    >
      <Link href="/app/">
        <Button>Try Tasker</Button>
      </Link>
      <Link href="/documentation/">
        <Button variable="outline">Learn More</Button>
      </Link>
    </div>
  );
};

export default TryAndLearnButtons;
