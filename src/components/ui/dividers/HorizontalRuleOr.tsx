const HorizontalRuleOr = () => {
  return (
    <div className="inline-flex relative items-center justify-center w-full my-5">
      <hr className="w-full h-px my-3" />
      <span
        className={
          "absolute px-5 font-medium -translate-x-1/2 left-1/2 bg-background-light dark:bg-background-dark"
        }
      >
        Or
      </span>
    </div>
  );
};

export default HorizontalRuleOr;
