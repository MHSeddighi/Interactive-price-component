import { memo } from "react";

interface SVGIconProps {
  icon: string;
  className?: string;
}

function SVGIcon({
  icon,
  className = "",
  ...rest
}: SVGIconProps & React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...rest}>
      <use href={`icons.svg#${icon}`} />
    </svg>
  );
}

export default memo(SVGIcon);
