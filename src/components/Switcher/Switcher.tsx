import React, { useState } from "react";
import { FlipSwitchWrapper } from "./Switcher.styles";

interface SwitcherProps {
  initialValue?: boolean;
  onChange?(newValue: boolean): void;
}

const Switcher: React.FC<SwitcherProps> = ({
  onChange = () => {},
  initialValue,
  ...props
}) => {
  const label = `switch-${Math.floor(Math.random() * 1000)}`;
  const [state, setState] = useState<boolean>(initialValue || false);

  const handleChange = () => {
    setState((prev: boolean) => !prev);
    onChange(!state);
  };

  return (
    <FlipSwitchWrapper>
      <input
        type="checkbox"
        checked={state}
        className="checkbox"
        id={label}
        onChange={handleChange}
        {...props}
      />

      <label htmlFor={label}>
        <div className="switch-inner" />
        <div className="switch" />
      </label>
    </FlipSwitchWrapper>
  );
};

export { Switcher };
