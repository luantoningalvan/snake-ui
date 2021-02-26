import React from "react";
import { BannerContainer } from "./Banner.styles";

interface BannerProps {
  title: string;
  color: "info" | "success" | "error" | "warning";
}

export const Banner: React.FC<BannerProps> = (props) => {
  const { title, color } = props;
  return <BannerContainer color={color}>{title}</BannerContainer>;
};

export default Banner;
