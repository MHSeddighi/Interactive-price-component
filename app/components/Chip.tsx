import React, { memo } from "react";
import Typography from "./Typography";

interface ChipProps {
  label?: string;
  className?: string;
  text?: string;
}

const Chip: React.FC<ChipProps> = ({ label, className, text = "" }) => {
  return (
    <div className="flex items-center gap-2 justify-center">
      {label && <Typography type="bodySmall">{label}</Typography>}
      <div
        className={`flex items-center justify-center rounded-4xl p-1 px-2 ${className}`}
      >
        {text}
      </div>
    </div>
  );
};

Chip.displayName = "Chip";

export default memo(Chip);
