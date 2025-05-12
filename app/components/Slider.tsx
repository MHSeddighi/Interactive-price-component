import React, { forwardRef, useEffect, useMemo, useRef, useState } from "react";
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
  const [parentWidth, setParentWidth] = useState<number>(0);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(+e.target.value);
    onChange(e.target.value);
  };

  const parentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;

    const updateWidth = () => {
      setParentWidth(parent.getBoundingClientRect().width);
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(parent);

    return () => resizeObserver.disconnect();
  }, []);

  const fillWidth = useMemo(() => {
    return value !== undefined
      ? ((value - min) / (max - min)) * parentWidth + 32
      : ((defaultValue - min) / (max - min)) * parentWidth + 32;
  }, [value]);

  return (
    <div className={`slider-container ${className || ""}`}>
      {label && (
        <label htmlFor={id} className="slider-label">
          {label}
        </label>
      )}
      <div className="slider" ref={parentRef}>
        <div className="slider-track">
          <span
            className="slider-fill"
            style={{ transform: `translateX(${fillWidth}px)` }}
          />
        </div>
        <input
          type="range"
          defaultValue={defaultValue}
          value={value}
          onChange={handleChange}
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
          className="slider-thumb"
          style={{
            pointerEvents: "none",
            transform: `translateX(${fillWidth}px)`,
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
