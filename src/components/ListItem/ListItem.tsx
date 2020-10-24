import React, { useState } from "react";
import {
  ListItemContainer,
  ListItemHeader,
  ListItemIcon,
  ListItemText,
  ExpandButton,
  ExpandedList,
} from "./styles";
import makeClassName from "../../utils/makeClassName";
import { FiChevronLeft } from "react-icons/fi";

interface ListItemProps {
  label: string | React.ReactNode;
  icon?: React.ReactNode;
  current?: boolean;
  onClick?(): void;
  nested?: boolean;
  options?: {
    label: string | React.ReactNode;
    icon?: React.ReactNode;
    current?: boolean;
    onClick?(): void;
  }[];
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

const ListItem: React.FC<ListItemProps> = (props) => {
  const {
    label,
    icon,
    current,
    nested,
    onClick,
    className,
    options,
    ...rest
  } = props;
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <ListItemContainer
      current={current}
      className={makeClassName("list", className)}
      onClick={onClick}
      {...rest}
    >
      <ListItemHeader>
        {!!icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText>{label}</ListItemText>
        {options && options.length > 0 && (
          <ExpandButton
            expanded={expanded}
            onClick={() => setExpanded(!expanded)}
            icon={<FiChevronLeft size={20} />}
          />
        )}
      </ListItemHeader>
      {options && options.length > 0 && expanded && (
        <ExpandedList>
          {options?.map((option) => (
            <ListItemContainer
              current={option.current}
              onClick={onClick}
              {...rest}
            >
              <ListItemHeader nested>
                {!!option.icon && <ListItemIcon>{option.icon}</ListItemIcon>}
                <ListItemText>{option.label}</ListItemText>
              </ListItemHeader>
            </ListItemContainer>
          ))}
        </ExpandedList>
      )}
    </ListItemContainer>
  );
};
export default ListItem;
