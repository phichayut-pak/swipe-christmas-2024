type QuizSelectionProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  isSelected: boolean;
};

const QuizSelectionButton = (props: QuizSelectionProps) => {
  const { children, isSelected, ...rest } = props;
  return (
    <button
      type="button"
      className={`h-9 rounded-lg text-md shadow-inner ${
        isSelected
          ? "bg-gradient-to-r from-[#E05255] to-[#F2CE67] text-white"
          : "bg-gray-200 w-5/6 mx-auto"
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default QuizSelectionButton;
