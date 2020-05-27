// lib
import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { useNotification } from "../useNotification";

export default function withNotification(Component) {
  return (props) => {
    const [{ isOpen, message }, showNotification] = useNotification();

    return (
      <div>
        <Component showNotification={showNotification} {...props} />
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={isOpen}
          message={message}
          key={message}
        />
      </div>
    );
  };
}
