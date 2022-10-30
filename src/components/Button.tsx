type ButtonProps = {
  clickHandler: Function;
  text: string;
};

const Button: React.FC<ButtonProps> = ({ clickHandler, text }) => {
  return (
    <div
      onClick={() => clickHandler()}
      className="rounded-sm outline outline-1 hover:bg-slate-300 hover:drop-shadow-xl"
    >
      {text}
    </div>
  );
};

export default Button;
