import React from "react";
import { CardHeaderContainer } from "./CardHeader.styles";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import makeClassName from "../../utils/makeClassName";

export interface CardHeaderProps {
  title?: string | React.ReactNode;
  actions?: any[];
  customContent?: React.ReactNode;
  onClick?(): void;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  customContent,
  title,
  actions,
  className,
  ...rest
}) => (
  <CardHeaderContainer
    className={makeClassName("card-header", className)}
    {...rest}
  >
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
