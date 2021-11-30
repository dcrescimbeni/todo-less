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

  return (
    <Dialog isOpen={editVisible} onDismiss={toggleEdit} aria-label="Edit task">
      <button className="close-button" onClick={toggleEdit}>
        <span aria-hidden>x</span>
      </button>
      <MainWrapper>
        <DescriptionHelper>Edit task</DescriptionHelper>
        <InformationWrapper>
          <DescriptionInput
            key={element.id}
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          ></DescriptionInput>
          <HourWrapper>
            <HourInput
              type="text"
              value={newDuration}
              onChange={(e) => setNewDuration(e.target.value)}
            ></HourInput>
            <HourIndicator> hours</HourIndicator>
          </HourWrapper>
        </InformationWrapper>
        <ButtonWrapper>
          <SaveButton
            type="button"
            value="Save"
            onClick={handleSaveEdit}
          ></SaveButton>
          <CancelButton
            type="button"
            value="Cancel"
            onClick={toggleEdit}
          ></CancelButton>
          <DeleteButton
            type="button"
            value="Delete"
            onClick={(e) => {
              handleDelete(element.id);
            }}
          ></DeleteButton>
        </ButtonWrapper>
      </MainWrapper>
    </Dialog>
  );
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  padding: 15px;
  border: 2px solid #dee2e6;
  border-radius: 5px;
`;

const DescriptionHelper = styled.p`
  font-size: 12px;
  color: #adb5bd;
  display: block;
  margin: 5px;
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
  font-size: 20px;
  font-weight: bold;
  color: #212529;
  padding: 15px 5px;
  border: 0px;
`;

const HourInput = styled.input`
  font-weight: bold;
  font-size: 16px;
  width: 2rem;
  border: 0px;
  text-align: right;
  margin-right: 5px;
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

const CancelButton = styled.input`
  background: grey;
  color: white;
  font-weight: bold;
  color: white;
  padding: 10px;
  margin-right: 5px;
  border: 0px;
  border-radius: 5px;
  flex-grow: 1;
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

const HourWrapper = styled.div`
  display: flex;
  align-items: center;
`;
