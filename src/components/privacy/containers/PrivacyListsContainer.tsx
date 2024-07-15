import PrivacyListCard from "../cards/PrivacyListCard";

const PrivacyListsContainer = ({
  privacys,
}: {
  privacys: Array<{ title: string; description: string }>;
}) => {
  return (
    <ul className="mt-4 space-y-2 text-mutedForeground-light dark:text-mutedForeground-dark md:text-lg">
      {privacys.map((value, key) => (
        <PrivacyListCard
          key={key}
          description={value.description}
          title={value.title}
        />
      ))}
    </ul>
  );
};

export default PrivacyListsContainer;
