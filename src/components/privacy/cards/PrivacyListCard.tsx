const PrivacyListCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <li>
      <strong>{title}:</strong> {description}
    </li>
  );
};

export default PrivacyListCard;
