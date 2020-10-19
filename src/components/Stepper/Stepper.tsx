import React from "react";
import { generate } from "shortid";
import { Container, Step } from "./Stepper.styles";

export interface StepperProps {
  steps: {
    icon?: JSX.Element;
    label: string;
  }[];
  currentStep: any;
  onSetStep: any;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  onSetStep,
}) => (
  <Container>
    {steps.map((step, index) => (
      <Step
        key={generate()}
        checked={currentStep > index + 1}
        current={currentStep === index + 1}
      >
        <div
          className="step-content"
          role="presentation"
          onClick={() => onSetStep(index + 1)}
        >
          <div className="step-id">{step.icon || index + 1}</div>
          <span>{step.label}</span>
        </div>
      </Step>
    ))}
  </Container>
);

export default Stepper;
