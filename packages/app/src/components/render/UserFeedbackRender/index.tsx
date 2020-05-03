import React, { useContext, useState, useEffect, useCallback } from "react";
import Snack from "../../core/FeedbackSnack";
import EmitterContext from "../../../contexts/emitter";

const UserFeedbackContainer = () => {
  const emitter = useContext(EmitterContext);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<
    "success" | "info" | "warning" | "error" | undefined
  >(undefined);
  const [message, setMessage] = useState("");

  const onShowUserFeedback = useCallback((event: any) => {
    setSeverity(event.severity);
    setMessage(event.message);
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!emitter) return;
    emitter.on("user_feedback", onShowUserFeedback);
    return () => {
      emitter.off("user_feedback", onShowUserFeedback);
    };
  }, [emitter, onShowUserFeedback]);

  const handleCloseClick = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snack
      onClose={handleClose}
      onCloseClick={handleCloseClick}
      open={open}
      severity={severity}
      message={message}
    ></Snack>
  );
};

export default UserFeedbackContainer;
