import React, { useEffect } from "react";
import {
  FiAlertCircle as ErrorIcon,
  FiCheckCircle as SuccessIcon,
  FiInfo as InfoIcon,
  FiXCircle as CloseIcon,
} from "react-icons/fi";
import { Container } from "./Toast.styles";
import makeClassName from "../../utils/makeClassName";

const icons = {
  info: <InfoIcon size="24px" />,
  success: <SuccessIcon size="24px" />,
  error: <ErrorIcon size="24px" />,
};

interface ToastProps {
  message: {
    id: string;
    type: "info" | "success" | "error";
    title: string;
    description: string;
  };
  duration?: number;
  onClose?(id: string): void;
  showCloseButton?: boolean;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

const Toast: React.FC<ToastProps> = (props) => {
  const {
    message,
    duration = 3000,
    onClose,
    showCloseButton,
    className,
    ...rest
  } = props;

  useEffect(() => {
    if (onClose) {
      const timer = setTimeout(() => {
        onClose(message.id);
      }, duration);

      return () => {
        clearTimeout(timer);
      };
    }
    return;
  }, [message.id]);

  return (
    <Container
      type={message.type}
      hasDescription={!!message.description}
      key={message.id}
      className={makeClassName("toast", className)}
      {...rest}
    >
      {icons[message.type || "info"]}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>
      {showCloseButton && (
        <button type="button" onClick={() => onClose && onClose(message.id)}>
          <CloseIcon fontSize="18px" />
        </button>
      )}
    </Container>
  );
};

export { Toast };
