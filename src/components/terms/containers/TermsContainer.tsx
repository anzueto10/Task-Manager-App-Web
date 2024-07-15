import { TERMS_OF_SERVICE } from "@/consts";
import TermOfServiceCard from "../cards/TermOfServiceCard";

const TermsContainer = () => {
  return (
    <main className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      {Object.entries(TERMS_OF_SERVICE).map(([key, value]) => (
        <TermOfServiceCard term={value} key={key} />
      ))}
    </main>
  );
};

export default TermsContainer;
