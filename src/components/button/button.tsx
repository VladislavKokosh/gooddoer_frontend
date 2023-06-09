import { IButtonProps } from "./button.types";
import "./button.scss";

const Button: React.FC<IButtonProps> = ({ title, onClick }) => {
  return (
    <div className="button-ui" onClick={onClick}>
      {title}
    </div>
  );
};

export { Button };
