import styled from 'styled-components';

export default function TaskInformation({ element, handleToggledTask }) {
  return (
    <Wrapper>
      <CheckBox
        type="checkbox"
        name="completedStatus"
        id="completedStatus"
        color={element.color}
        checked={element.completed}
        onChange={(e) => handleToggledTask(element.id, e.target.checked)}
      />
      <TaskDescription>{element.description}</TaskDescription>
      <TaskDuration>{element.duration} hour</TaskDuration>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CheckBox = styled.input`
  appearance: none;
  border: 0.15rem solid #${(props) => props.color};
  border-radius: 50%;
  height: 20px;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 20px;
`;

const TaskDescription = styled.p`
  flex-grow: 1;
  margin-left: 20px;
  margin-right: 20px;
`;

const TaskDuration = styled.p`
  flex-shrink: 0;
  font-size: 12px;
  color: #adb5bd;
`;
