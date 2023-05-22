import styled from "styled-components";

export const ProgressBarMarker = styled.div<{ position: number }>`
  position: absolute;
  bottom: -10%; // Adjust the top position to prevent overflow at the top: ;
  left: ${(props) => `${props.position}%`};
  height: 110%;
  border-left: 2px solid darkgray;
`;

export const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 44px;
  background: gray;
  position: relative;
  overflow: visible; 
`;

export const ProgressBarItem = styled.div<{ completed: number }>`
  height: 100%;
  width: ${(props) => `${props.completed}%`};
  background: lightblue;
`;

export const TaskCounter = styled.div`
  position: absolute;
  bottom: -20px;
  left: 5px;
  color: white;
`;

export const Label = styled.div<{ position: number }>`
  position: absolute;
  bottom: -32px;
  left: ${(props) => `${props.position}%`};
  text-align: center;
`;

export const LabelTitle = styled.div`
  font-size: 0.85em;
`;

export const LabelTasks = styled.div`
  font-size: 0.7em;
  white-space: nowrap;
`;

export const ScoreCard = styled.div`
  position: absolute;
  top: 22%;
  left: 1%;
  font-size: 22px;
  font-weight: 700;
`;
