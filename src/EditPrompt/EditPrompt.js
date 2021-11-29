import { useState } from 'react';
import styled from 'styled-components';
import { Dialog } from '@reach/dialog';

export default function EditPrompt({
  element,
  handleEdit,
  toggleEdit,
  handleDelete,
  editVisible,
}) {
  const [newDescription, setNewDescription] = useState(element.description);
  const [newDuration, setNewDuration] = useState(element.duration);

  function handleSaveEdit() {
    handleEdit(element.id, newDescription, newDuration);
    toggleEdit();
  }

  console.log(editVisible);

  return (
    <Dialog isOpen={editVisible} onDismiss={toggleEdit} aria-label="Edit task">
      <InformationWrapper>
        <DescriptionInput
          key={element.id}
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        ></DescriptionInput>
        <HourInput
          type="text"
          value={newDuration}
          onChange={(e) => setNewDuration(e.target.value)}
        ></HourInput>
        <HourIndicator> hours</HourIndicator>
      </InformationWrapper>
      <ButtonWrapper>
        <SaveButton
          type="button"
          value="Save"
          onClick={handleSaveEdit}
        ></SaveButton>
        <DeleteButton
          type="button"
          value="Delete"
          onClick={(e) => {
            handleDelete(element.id);
          }}
        ></DeleteButton>
      </ButtonWrapper>
    </Dialog>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 10px;
  justify-content: space-between;
  align-items: center;
`;

const InformationWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DescriptionInput = styled.input`
  margin-left: auto;
  flex-grow: 1;
  padding: 5px;
`;

const HourInput = styled.input`
  width: 2rem;
  margin: 0px 5px;
  padding: 5px;
  text-align: right;
`;

const HourIndicator = styled.div`
  font-size: 12px;
  color: #adb5bd;
  margin: 0px 5px;
`;

const SaveButton = styled.input`
  background: #3b82f6;
  color: white;
  font-weight: bold;
  color: white;
  padding: 10px;
  margin-right: 5px;
  border: 0px;
  border-radius: 5px;
  flex-grow: 9;
`;

const DeleteButton = styled.input`
  background: #ef4444;
  color: white;
  font-weight: bold;
  color: white;
  padding: 10px;
  border: 0px;
  border-radius: 5px;
  flex-grow: 1;
`;
