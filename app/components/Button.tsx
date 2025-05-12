import { memo, useMemo } from "react";

export enum ButtonType {
  Outlined = "outlined",
  Contained = "contained",
  Text = "text",
}
interface ButtonProps {
  type?: ButtonType;
  children: React.ReactNode;
  className?: string;
}

const buttonStyles = {
  [ButtonType.Outlined]:
    "border-2 border-blue-500 text-blue-500 bg-transparent rounded-4xl px-8 py-3 transition-colors duration-200",
  [ButtonType.Contained]:
    "bg-blue-500 text-white border-none rounded-4xl px-8 py-3 transition-colors duration-200",
  [ButtonType.Text]:
    "text-blue-500 bg-transparent border-none px-4 py-2 transition-colors duration-200",
};

function Button({
  type = ButtonType.Text,
  className = "",
  children,
}: ButtonProps) {
  const styles = useMemo(() => {
    return buttonStyles[type] ?? buttonStyles[ButtonType.Text];
  }, [type]);
  return <button className={styles + " " + className}>{children}</button>;
}

export default memo(Button);
