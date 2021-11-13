import { useState } from 'react';
import styled from 'styled-components';
import EditPrompt from '../EditPrompt/EditPrompt';

export default function TaskContent({
  element,
  handleToggledTask,
  handleEditDescription,
}) {
  const [editVisible, setEditVisible] = useState(false);

  function toggleEdit() {
    setEditVisible(!editVisible);
  }
  return (
    <>
      <TaskWrapper>
        <CheckBox
          type="checkbox"
          name="completedStatus"
          id="completedStatus"
          color={element.color}
          checked={element.completed}
          onChange={(e) => handleToggledTask(element.id, e.target.checked)}
        />
        <TaskDescription onClick={toggleEdit} visible={!editVisible}>
          {element.description}
        </TaskDescription>
        <EditPrompt
          key={element.id}
          element={element}
          handleEditDescription={handleEditDescription}
          visible={editVisible}
          toggleEdit={toggleEdit}
        ></EditPrompt>

        <TaskDuration>{element.duration} hour</TaskDuration>
      </TaskWrapper>
    </>
  );
}

const TaskWrapper = styled.div`
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: ${(props) => (props.status ? 0.3 : 1)};
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
  ${(props) => (props.visible ? '' : 'display: none;')}
`;

const TaskDuration = styled.p`
  flex-shrink: 0;
  font-size: 12px;
  color: #adb5bd;
`;
