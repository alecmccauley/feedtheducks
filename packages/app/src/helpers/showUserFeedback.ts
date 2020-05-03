import mitt from "mitt";

const showUserFeedback = (
  emitter: mitt.Emitter,
  message: string,
  severity: "success" | "info" | "warning" | "error" | undefined
) => {
  emitter.emit("user_feedback", {
    message: message,
    severity: severity,
  });
};

export default showUserFeedback;
