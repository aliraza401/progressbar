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
  tasksProgressBarTiers,
}) => {
  const completedPercent = (completedTasks / totalTasks) * 100;

  const nextLevelTasks = () => {
    const nextLevel = tasksProgressBarTiers.find(
      (tier) => completedTasks < tier.tasks
    );
    return nextLevel ? nextLevel.tasks - completedTasks : 0;
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
        {tasksProgressBarTiers.map((tier) => (
          <React.Fragment key={tier.title}>
            <ProgressBarMarker position={(tier.tasks / totalTasks) * 100} />
            <Label position={(tier.tasks / totalTasks) * 100 - 2}>
              <LabelTitle>{tier.title}</LabelTitle>
              <LabelTasks>{tier.tasks} Tasks</LabelTasks>
            </Label>
          </React.Fragment>
        ))}
        <TaskCounter>{completedTasks}</TaskCounter>
        <ScoreCard>{completedTasks}</ScoreCard>
        <Label position={0}>
          <LabelTitle>Player</LabelTitle>
        </Label>
      </ProgressBarWrapper>
    </div>
  );
};
