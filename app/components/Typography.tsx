import { memo, useMemo } from "react";

interface TypographyProps {
  type?: "title" | "subtitle" | "body" | "bodySmall";
  children: React.ReactNode;
  className?: string;
}

function Typography({
  type = "body",
  className = "",
  children,
}: TypographyProps) {
  const styles = useMemo(() => {
    switch (type) {
      case "title":
        return "font-bold text-black text-4xl";
      case "subtitle":
        return "font-semibold text-gray-400 text-xl";
      case "body":
        return "font-semibold text-black text-lg text-gray-400";
      case "bodySmall":
        return "font-semibold text-black text-md text-black";
    }
  }, [type]);
  return <span className={className || styles}>{children}</span>;
}

export default memo(Typography);
