import React from "react";
import { HeroContainer } from "./Hero.styles";

export interface HeroProps {
  title: string;
  description: string;
  actions: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({ title, description, actions }) => (
  <HeroContainer>
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>

    <div className="hero-actions">{actions}</div>
  </HeroContainer>
);
