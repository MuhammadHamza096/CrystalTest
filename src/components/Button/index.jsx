import "./button.scss";
import Button from "@mui/material/Button";

const CustomButton = ({
  text,
  variant,
  className,
  onClick,
  disabled,
}) => {
  return (
    <div className="">
      <Button
        variant={variant}
        className={`${className} button`}
        size="small"
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </Button>
    </div>
  );
};

export default CustomButton;
