import { useState } from 'react';
import styled from 'styled-components';
import EditPrompt from '../EditPrompt/EditPrompt';
import AddItem from '../AddItem/AddItem';

// TODO: edit all the fields
// TODO: style components

export default function TaskBlock({ element, handleToggledTask, handleEdit }) {
  const [editVisible, setEditVisible] = useState(false);

  function toggleEdit() {
    setEditVisible(!editVisible);
  }
  return (
    <>
      <TaskWrapper>
        <InformationWrapper visible={!editVisible}>
          <CheckBox
            type="checkbox"
            name="completedStatus"
            id="completedStatus"
            color={element.color}
            checked={element.completed}
            onChange={(e) => handleToggledTask(element.id, e.target.checked)}
          />
          <TaskDescription onClick={toggleEdit}>
            {element.description}
          </TaskDescription>
          <TaskDuration>{element.duration} hour</TaskDuration>
        </InformationWrapper>
        <EditPrompt
          key={element.id}
          element={element}
          handleEdit={handleEdit}
          visible={editVisible}
          toggleEdit={toggleEdit}
        >
          <AddItem></AddItem>
        </EditPrompt>
      </TaskWrapper>
    </>
  );
}

const TaskWrapper = styled.div`
  height: 60px;
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

const InformationWrapper = styled.div`
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: ${(props) => (props.status ? 0.3 : 1)};
  ${(props) => (props.visible ? '' : 'display: none;')}
`;
