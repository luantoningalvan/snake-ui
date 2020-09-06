import React from "react";
import { CardHeaderContainer } from "./styles";
import { Button } from "../Button";
import { IconButton } from "../IconButton";

export interface CardHeaderProps {
  title?: string;
  actions?: any[];
  customContent?: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  customContent,
  title,
  actions,
  ...rest
}) => (
  <CardHeaderContainer {...rest}>
    {customContent ? (
      { customContent }
    ) : (
      <>
        <h3>{title}</h3>
        {!!actions && (
          <div className="actions">
            {actions.map(
              (action) =>
                action.show && (
                  <>
                    {action.type === "icon" ? (
                      <IconButton onClick={action.action} icon={action.label} />
                    ) : (
                      <Button onClick={action.action} color="secondary">
                        {action.label}
                      </Button>
                    )}
                  </>
                )
            )}
          </div>
        )}
      </>
    )}
  </CardHeaderContainer>
);
