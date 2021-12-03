import { useState } from 'react';

import styled from 'styled-components';
import OptionsButton from '../OptionsButton/OptionsButton';
import EditPrompt from '../EditPrompt/EditPrompt';

export default function TaskCard({
  element,
  handleEdit,
  handleDelete,
  handleToggledTask,
}) {
  const [editVisible, setEditVisible] = useState(false);

  function toggleEdit() {
    setEditVisible(!editVisible);
  }

  return (
    <>
      <Wrapper>
        <TaskWrapper onDoubleClick={toggleEdit} completed={element.completed}>
          <ColorCode
            color={element.color}
            onClick={(e) => handleToggledTask(element.id, !element.completed)}
          ></ColorCode>
          <ElementDescription>{element.description}</ElementDescription>
          <ElementDuration>
            {element.duration} {element.duration > 1 ? 'hours' : 'hour'}
          </ElementDuration>
          <OptionsButton
            element={element}
            handleDelete={handleDelete}
            toggleEdit={toggleEdit}
          ></OptionsButton>
        </TaskWrapper>
        <EditPrompt
          element={element}
          handleEdit={handleEdit}
          toggleEdit={toggleEdit}
          handleDelete={handleDelete}
          editVisible={editVisible}
        ></EditPrompt>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const TaskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  height: 100%;
  opacity: ${(props) => (props.completed ? '0.7' : '1')};
`;

const EditWrapper = styled.p`
  opacity: 0.5;
`;

const ColorCode = styled.div`
  height: 22px;
  width: 22px;
  border-radius: 50%;
  border: 3px solid #${(props) => props.color};
  display: inline-block;
  flex-shrink: 0;
  margin-right: 10px;
`;

const ElementDescription = styled.p`
  margin: 0px;
  padding: 0px;
  font-size: 16px;
  margin-right: auto;
`;

const ElementDuration = styled.p`
  margin: 0px;
  padding: 0px;
  color: #adb5bd;
  font-size: 14px;
`;
