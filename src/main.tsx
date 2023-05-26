import React from "react";
import ReactDOM from "react-dom/client";
import { ProgressBar } from "./ProgressBar/ProgressBar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProgressBar
      totalTasks={32}
      completedTasks={9}
      tasksProgressBarTiers={[
        {
          title: "Lite",
          tasks: 11,
        },
        {
          title: "Pro",
          tasks: 18,
        },
        {
          title: "Legend",
          tasks: 28,
        },
      ]}
    />
  </React.StrictMode>
);
