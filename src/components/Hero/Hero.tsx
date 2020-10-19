import React from "react";
import { HeroContainer } from "./Hero.styles";
import makeClassName from "../../utils/makeClassName";

export interface HeroProps {
  title: string;
  description: string;
  actions: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  description,
  actions,
  className,
  ...rest
}) => (
  <HeroContainer className={makeClassName("hero", className)} {...rest}>
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>

    <div className="hero-actions">{actions}</div>
  </HeroContainer>
);
