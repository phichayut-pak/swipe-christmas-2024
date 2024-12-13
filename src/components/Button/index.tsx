export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = (props: ButtonProps) => {
  const { className, children, ...rest } = props;
  const mergeClass = `font-sans bg-gradient-to-r from-[#faa98f] to-[#fd6cab] rounded-lg shadow-inner h-8 text-white font-bold ${className}`;
  return (
    <button type="button" className={mergeClass} {...rest}>
      {children}
    </button>
  );
};

export default Button;
