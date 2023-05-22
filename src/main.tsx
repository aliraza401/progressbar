import React from "react";
import ReactDOM from "react-dom/client";
import { ProgressBar } from "./ProgressBar/ProgressBar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProgressBar
      totalTasks={35}
      proTasks={18}
      heroTasks={25}
      legendTasks={32}
      completedTasks={8}
    />
  </React.StrictMode>
);
