import { useState } from 'react';
import styled from 'styled-components';
import OptionsButton from '../OptionsButton/OptionsButton';
import AddItem from '../AddItem/AddItem';

export default function TaskCard({
  element,
  handleToggledTask,
  handleEdit,
  handleDelete,
  showDialog,
  setShowDialog,
  editElement,
  setEditElement,
  handleAdd,
}) {
  const [editVisible, setEditVisible] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState(false);

  return (
    <>
      <Wrapper
        visible={!editVisible}
        onMouseOver={(e) => setOptionsVisible(true)}
        onMouseLeave={(e) => setOptionsVisible(false)}
      >
        <ColorCode color={element.color}></ColorCode>
        <ElementDescription>{element.description}</ElementDescription>
        <ElementDuration>{element.duration} hour</ElementDuration>
        <OptionsButton
          element={element}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          showDialog={showDialog}
          setShowDialog={setShowDialog}
          editElement={editElement}
          setEditElement={setEditElement}
        ></OptionsButton>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  width: 100%;
  height: 100%;
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
