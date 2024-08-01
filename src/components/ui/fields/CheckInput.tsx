interface Props {
  setValue: (value: boolean) => void;
  value: boolean;
}

const CheckInput: React.FC<Props> = ({ setValue, value }) => {
  return <input id="checked-checkbox" type="checkbox" className="w-4 h-4" />;
};

export default CheckInput;
