import React, { useState } from "react";
import { FlipSwitchWrapper } from "./Switcher.styles";
import makeClassName from "../../utils/makeClassName";

interface SwitcherProps {
  initialValue?: boolean;
  onChange?(newValue: boolean): void;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

const Switcher: React.FC<SwitcherProps> = ({
  onChange = () => {},
  initialValue,
  className,
  ...rest
}) => {
  const label = `switch-${Math.floor(Math.random() * 1000)}`;
  const [state, setState] = useState<boolean>(initialValue || false);

  const handleChange = () => {
    setState((prev: boolean) => !prev);
    onChange(!state);
  };

  return (
    <FlipSwitchWrapper
      className={makeClassName("switcher", className)}
      {...rest}
    >
      <input
        type="checkbox"
        checked={state}
        className="checkbox"
        id={label}
        onChange={handleChange}
      />

      <label htmlFor={label}>
        <div className="switch-inner" />
        <div className="switch" />
      </label>
    </FlipSwitchWrapper>
  );
};

export { Switcher };
