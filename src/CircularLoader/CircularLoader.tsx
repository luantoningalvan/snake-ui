import React from "react";
import { CircularLoaderContainer } from "./CircularLoader.styles";

interface CircularLoaderProps {
  size: number;
}

export const CircularLoader: React.FC<CircularLoaderProps> = (props) => (
  <CircularLoaderContainer {...props}>
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
