interface Props {
  term: { title: string; description: string };
}
const TermOfServiceCard: React.FC<Props> = ({ term }) => {
  return (
    <section className="mb-12 md:mb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{term.title}</h2>
      <p className="text-mutedForeground-light dark:text-mutedForeground-dark">
        {term.description}
      </p>
    </section>
  );
};

export default TermOfServiceCard;
