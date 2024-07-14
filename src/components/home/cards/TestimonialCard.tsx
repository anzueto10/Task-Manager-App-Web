import PersonAvatar from "@/components/ui/avatar/PersonAvatar";
import type { Testimonial } from "@/types";

interface Props {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<Props> = ({ testimonial }) => {
  return (
    <li>
      <div className="flex flex-col justify-center space-y-4 bg-background-light dark:bg-background-dark p-6 rounded-lg shadow-sm">
        <div className="flex items-start gap-4">
          <PersonAvatar />
          <div className="grid gap-1">
            <div className="flex items-center gap-2">
              <h5 className="font-bold">{testimonial.name}</h5>
              <p className="text-sm text-mutedForeground-light dark:text-mutedForeground-dark">
                {testimonial.ocupation}
              </p>
            </div>
            <p className="text-mutedForeground-light dark:text-mutedForeground-dark">
              {testimonial.message}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TestimonialCard;
