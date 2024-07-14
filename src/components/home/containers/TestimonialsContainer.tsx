import { TESTIMONIALS } from "@/consts";
import TestimonialCard from "@/components/home/cards/TestimonialCard";

const TestimonialsContainer = () => {
  return (
    <ul className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
      {Object.entries(TESTIMONIALS).map(([key, value]) => (
        <TestimonialCard key={key} testimonial={value} />
      ))}
    </ul>
  );
};

export default TestimonialsContainer;
