export interface ProgressBarProps {
  totalTasks: number;
  completedTasks: number;
  tasksProgressBarTiers: {
    title: string;
    tasks: number;
  }[];
}
