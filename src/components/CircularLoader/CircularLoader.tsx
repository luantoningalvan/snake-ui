import React from "react";
import { CircularLoaderContainer } from "./CircularLoader.styles";
import makeClassName from "../../utils/makeClassName";

export interface CircularLoaderProps {
  size?: number;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export const CircularLoader: React.FC<CircularLoaderProps> = ({
  size = 72,
  className,
  ...rest
}) => (
  <CircularLoaderContainer
    size={size}
    className={makeClassName("circular-loader", className)}
    {...rest}
  >
    <svg viewBox="0 0 40 40">
      <linearGradient id="spinner-gradient">
        <stop offset="0%" stopOpacity="0" />
        <stop offset="49.9%" stopOpacity="0" />
        <stop offset="50%" stopColor="#FFCC00" />
        <stop offset="100%" stopColor="#FFCC00" />
      </linearGradient>
      <circle
        r={5}
        cx={20}
        cy={20}
        fill="transparent"
        stroke="url(#spinner-gradient)"
        strokeWidth={1}
      />
    </svg>
  </CircularLoaderContainer>
);
