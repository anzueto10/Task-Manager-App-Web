interface Props {
  bgColor: string;
  bgColorDark: string;
}

const HorizontalRuleForm: React.FC<Props> = ({ bgColor, bgColorDark }) => {
  return (
    <div className="inline-flex relative items-center justify-center w-full my-5">
      <hr className="w-full h-px my-3" />
      <span
        className={`absolute px-5 font-medium text-gray-900 -translate-x-1/2 ${bgColor} left-1/2 dark:text-white dark:${bgColorDark}`}
      >
        Or
      </span>
    </div>
  );
};

export default HorizontalRuleForm;
