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
  const [newDuration, setNewDuration] = useState(parseInt(element.duration));

  const [errorArray, setErrorArray] = useState([]);

  let nextErrorArray = [];
  function handleSaveEdit() {
    // Check for correct type (number)
    if (typeof newDuration !== 'number') {
      nextErrorArray.push('It must be a number');
    }

    if (newDuration % 1 !== 0) {
      nextErrorArray.push('It must be an integer');
    }

    if (newDuration < 1) {
      nextErrorArray.push('It must be bigger than 1');
    }

    setErrorArray(nextErrorArray);

    // If everything's correct, save and exit
    if (nextErrorArray.length === 0) {
      handleEdit(element.id, newDescription, newDuration);
      toggleEdit();
    }
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
              type="number"
              min="1"
              value={newDuration}
              onChange={(e) => setNewDuration(parseInt(e.target.value))}
            ></HourInput>
            <HourIndicator> {newDuration > 1 ? 'hours' : 'hour'}</HourIndicator>
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
        {errorArray.map((element) => {
          return element;
        })}
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
  margin-bottom: 10px;
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
  font-size: 20px;
  font-weight: bold;
  color: #212529;
  padding: 15px 5px;
  border: 0px;
  width: 4rem;
  text-align: right;
`;

const HourIndicator = styled.div`
  font-size: 12px;
  color: #adb5bd;
  margin: 0px 5px;
  width: 2rem;
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
