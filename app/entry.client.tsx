import { HydratedRouter } from "react-router/dom";
import { hydrateRoot } from "react-dom/client";

hydrateRoot(document, <HydratedRouter />, {
  onRecoverableError(error, info) {
    console.error("Recoverable error", error);
    if (info?.componentStack) {
      console.error(info.componentStack);
    }
  },
});
