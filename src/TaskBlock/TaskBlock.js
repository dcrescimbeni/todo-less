import { useState } from 'react';
import styled from 'styled-components';
import EditPrompt from '../EditPrompt/EditPrompt';
import AddItem from '../AddItem/AddItem';
import TaskInformation from '../TaskInformation/TaskInformation';

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
        <InformationWrapper visible={!editVisible} onClick={toggleEdit}>
          <TaskInformation
            element={element}
            handleToggledTask={handleToggledTask}
          ></TaskInformation>
        </InformationWrapper>
        <EditWrapper>
          <EditPrompt
            key={element.id}
            element={element}
            handleEdit={handleEdit}
            visible={editVisible}
            toggleEdit={toggleEdit}
          ></EditPrompt>
        </EditWrapper>
      </TaskWrapper>
    </>
  );
}

const TaskWrapper = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;

const InformationWrapper = styled.div`
  width: 100%;
  opacity: ${(props) => (props.status ? 0.3 : 1)};
  ${(props) => (props.visible ? '' : 'display: none;')}
`;

const EditWrapper = styled.div``;
