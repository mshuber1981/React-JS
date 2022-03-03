import { useEffect, useRef } from "react";

export default function Alert({ type, msg, removeAlert, list }) {
  const dismissAlert = useRef(removeAlert);

  useEffect(
    function () {
      const timeout = setTimeout(function () {
        dismissAlert.current();
      }, 3000);

      return () => clearTimeout(timeout);
    },
    [list]
  );

  return <p className={`alert alert-${type}`}>{msg}</p>;
}
