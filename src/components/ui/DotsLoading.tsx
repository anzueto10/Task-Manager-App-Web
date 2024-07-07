const DotsLoading = () => {
  return (
    <div className="flex space-x-2 justify-center items-center w-fit h-fit">
      <span className="sr-only">Loading...</span>
      <div className="h-4 w-4 rounded-full animate-bounce [animation-delay:-0.3s] bg-black dark:bg-white"></div>
      <div className="h-4 w-4 rounded-full animate-bounce [animation-delay:-0.15s] bg-black dark:bg-white"></div>
      <div className="h-4 w-4 rounded-full animate-bounce bg-black dark:bg-white"></div>
    </div>
  );
};

export default DotsLoading;
