import React, { forwardRef, memo, useRef } from "react";

interface ToggleSwitchProps {
  defaultValue?: boolean;
  defaultChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  defaultValue = false,
  defaultChecked,
  onChange = () => {},
  disabled = false,
  label,
  className,
}) => {
  const id = `switch-${React.useId()}`;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <div className={`toggle-switch-container ${className || ""}`}>
      {label && (
        <label htmlFor={id} className="toggle-switch-label">
          {label}
        </label>
      )}
      <div className="toggle-switch">
        <input
          type="checkbox"
          defaultChecked={defaultChecked}
          onChange={handleChange}
          disabled={disabled}
          id={id}
          className="toggle-switch-input"
          role="switch"
        />
        <label
          htmlFor={id}
          className="toggle-switch-label-track hover:drop-shadow-md"
        >
          <span className="toggle-switch-track" />
          <span className="toggle-switch-thumb">
            <svg
              className="toggle-switch-checkmark"
              viewBox="0 0 12 12"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M3 6.5L5 8.5L9 3.5" />
            </svg>
          </span>
        </label>
      </div>
    </div>
  );
};

ToggleSwitch.displayName = "ToggleSwitch";

export default memo(ToggleSwitch);
