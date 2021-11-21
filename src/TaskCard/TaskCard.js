import { useState } from 'react';
import styled from 'styled-components';
import EditPrompt from '../EditPrompt/EditPrompt';

export default function TaskCard({
  element,
  handleToggledTask,
  handleEdit,
  handleDelete,
}) {
  const [editVisible, setEditVisible] = useState(false);

  function toggleEdit() {
    setEditVisible(!editVisible);
  }

  return (
    <>
      <TaskInformationWrapper visible={!editVisible}>
        <ColorCode color={element.color}></ColorCode>
        <TaskDescriptionWrapper onDoubleClick={toggleEdit}>
          <ElementDescription>{element.description}</ElementDescription>
          <ElementDuration>{element.duration} hour</ElementDuration>
        </TaskDescriptionWrapper>
      </TaskInformationWrapper>
      <EditWrapper visible={editVisible}>
        <EditPrompt
          key={element.id}
          element={element}
          handleEdit={handleEdit}
          visible={editVisible}
          toggleEdit={toggleEdit}
          handleDelete={handleDelete}
        ></EditPrompt>
      </EditWrapper>
    </>
  );
}

const ColorCode = styled.div`
  height: 100%;
  width: 187px;
  background: #${(props) => props.color};
  display: inline-block;
  border-radius: 5px 0px 0px 5px;
  width: 18px;
  flex-shrink: 0;
`;

const TaskDescriptionWrapper = styled.div`
  display: inline-block;
  padding: 10px;
  color: #212529;
`;

const ElementDescription = styled.p`
  margin: 0px;
  padding: 0px;
  font-weight: bold;
  font-size: 20px;
`;

const ElementDuration = styled.p`
  margin: 0px;
  padding: 0px;
  color: #adb5bd;
  font-size: 14px;
`;

const EditWrapper = styled.div`
  width: 100%;
  ${(props) => (props.visible ? '' : 'display: none;')}
`;

const TaskInformationWrapper = styled.div`
  ${(props) => (props.visible ? 'display: flex;' : 'display: none;')}
`;
