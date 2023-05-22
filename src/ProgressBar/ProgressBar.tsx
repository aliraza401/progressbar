import React from "react";
import {
  ProgressBarWrapper,
  ProgressBarItem,
  ProgressBarMarker,
  TaskCounter,
  Label,
  ScoreCard,
  LabelTitle,
  LabelTasks,
} from "./ProgressBar.styled";
import { ProgressBarProps } from "./ProgressBar.interface";

export const ProgressBar: React.FC<ProgressBarProps> = ({
  totalTasks,
  completedTasks,
  proTasks,
  heroTasks,
  legendTasks,
}) => {
  const completedPercent = (completedTasks / totalTasks) * 100;
  const proPercent = (proTasks / totalTasks) * 100;
  const heroPercent = (heroTasks / totalTasks) * 100;
  const legendPercent = (legendTasks / totalTasks) * 100;

  const nextLevelTasks = () => {
    if (completedTasks < proTasks) {
      return proTasks - completedTasks;
    } else if (completedTasks < heroTasks) {
      return heroTasks - completedTasks;
    } else if (completedTasks < legendTasks) {
      return legendTasks - completedTasks;
    } else {
      return 0;
    }
  };

  const message =
    nextLevelTasks() > 0
      ? `Complete ${nextLevelTasks()} tasks to reach the next level`
      : "Congratulations! You've reached the highest level";

  return (
    <div>
      <h5>
        You have completed {completedTasks} out of {totalTasks} tasks. {message}
      </h5>
      <ProgressBarWrapper>
        <ProgressBarItem completed={completedPercent} />
        <ProgressBarMarker position={proPercent} />
        <ProgressBarMarker position={heroPercent} />
        <ProgressBarMarker position={legendPercent} />
        <TaskCounter>{completedTasks}</TaskCounter>
        <ScoreCard>{completedTasks}</ScoreCard>
        <Label position={0}>
          <LabelTitle>Player</LabelTitle>
        </Label>
        <Label position={proPercent - 2}>
          <LabelTitle>Pro</LabelTitle>
          <LabelTasks>{proTasks} Tasks</LabelTasks>
        </Label>
        <Label position={heroPercent - 2}>
          <LabelTitle>Hero</LabelTitle>
          <LabelTasks>{heroTasks} Tasks</LabelTasks>
        </Label>
        <Label position={legendPercent - 2}>
          <LabelTitle>Legend</LabelTitle>
          <LabelTasks>{legendTasks} Tasks</LabelTasks>
        </Label>
      </ProgressBarWrapper>
    </div>
  );
};
