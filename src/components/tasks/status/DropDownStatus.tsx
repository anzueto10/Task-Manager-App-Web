interface Props {
  onClick: () => void;
}

const DropDownStatus: React.FC<Props> = ({ onClick }) => {
  return <button onClick={onClick}></button>;
};

export default DropDownStatus;
