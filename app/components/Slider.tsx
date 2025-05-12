import React, { forwardRef, useMemo, useState } from "react";
import SVGIcon from "./SVGIcon";

interface SliderProps {
  defaultValue?: number;
  value?: number;
  onChange?: (newValue: string) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
  min?: number;
  max?: number;
  step?: number;
}

const Slider: React.FC<SliderProps> = ({
  defaultValue = 0,
  onChange = () => {},
  disabled = false,
  label,
  className,
  min = 0,
  max = 100,
  step = 1,
}) => {
  const id = `slider-${React.useId()}`;
  const [value, setValue] = useState(defaultValue);
  const fillWidth = useMemo(() => {
    return value !== undefined
      ? ((value - min) / (max - min)) * 100
      : ((defaultValue - min) / (max - min)) * 100;
  }, [value]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(+e.target.value);
    onChange(e.target.value);
  };

  // const handleOnDragStart = (
  //   e: React.MouseEvent<HTMLInputElement> | React.TouchEvent<HTMLInputElement>
  // ) => {
  //   setValue(Number((e.target as HTMLInputElement).value));
  // };

  return (
    <div className={`slider-container ${className || ""}`}>
      {label && (
        <label htmlFor={id} className="slider-label">
          {label}
        </label>
      )}
      <div className="slider">
        <div className="slider-track">
          <span className="slider-fill" style={{ width: `${fillWidth}%` }} />
        </div>
        <input
          type="range"
          defaultValue={defaultValue}
          value={value}
          onChange={handleChange}
          // onMouseMove={handleOnDragStart}
          disabled={disabled}
          id={id}
          className="slider-input"
          min={min}
          max={max}
          step={step}
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value ?? defaultValue}
        />
        <div
          className="slider-thumb hover:drop-shadow-md"
          style={{
            left: `calc(${fillWidth}% - 12px)`,
          }}
        >
          <SVGIcon
            icon="arrow-left"
            className="text-white"
            width={"24px"}
            height={"24px"}
          />
          <SVGIcon
            icon="arrow-right"
            className="text-white"
            width={"24px"}
            height={"24px"}
          />
        </div>
      </div>
    </div>
  );
};

Slider.displayName = "Slider";

export default Slider;
