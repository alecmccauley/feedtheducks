import React, { FunctionComponent } from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

interface SnackProps {
  open: boolean;
  onClose: () => void;
  onCloseClick: () => void;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

export function FeedbackBar(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Snack: FunctionComponent<SnackProps> = ({
  open,
  onClose,
  message,
  severity,
  onCloseClick,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{
        horizontal: "center",
        vertical: "bottom",
      }}
    >
      <FeedbackBar onClose={onCloseClick} severity={severity}>
        {message}
      </FeedbackBar>
    </Snackbar>
  );
};

export default Snack;
