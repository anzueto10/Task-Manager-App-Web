interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}
const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button
      className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background-light border-input-light bg-background-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent-light hover:text-accentForeground-light h-9 rounded-md px-3 dark:ring-offset-background-dark dark:border-input-dark dark:hover:bg-accent-dark dark:hover:text-accentForeground-dark dark:bg-background-dark"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
