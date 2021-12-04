import { useState } from 'react';
import styled from 'styled-components';
import { Dialog } from '@reach/dialog';
import { Listbox, ListboxOption } from '@reach/listbox';

export default function EditPrompt({
  element,
  handleEdit,
  toggleEdit,
  handleDelete,
  editVisible,
}) {
  const [newDescription, setNewDescription] = useState(element.description);
  const [newDuration, setNewDuration] = useState(parseInt(element.duration));
  const [newColor, setNewColor] = useState('3B82F6');

  const [errorArray, setErrorArray] = useState([]);
  let nextErrorArray = [];

  function handleSaveEdit() {
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
      handleEdit(element.id, newDescription, newDuration, newColor);
      toggleEdit();
    }
  }

  function handleClose() {
    toggleEdit();
    nextErrorArray = [];
    setErrorArray(nextErrorArray);
    setNewDescription(element.description);
    setNewDuration(element.duration);
    setNewColor(element.color);
  }

  return (
    <Dialog isOpen={editVisible} onDismiss={handleClose} aria-label="Edit task">
      <CloseButtonWrapper>
        <button className="close-button" onClick={handleClose}>
          <span aria-hidden>+</span>
        </button>
      </CloseButtonWrapper>
      <MainWrapper>
        <InformationWrapper>
          <DescriptionHelper>Edit task</DescriptionHelper>
          <DescriptionInput
            key={element.id}
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          ></DescriptionInput>
          <PickerWrapper>
            <HourWrapper>
              <HourInput
                type="number"
                min="1"
                value={newDuration}
                onChange={(e) => setNewDuration(parseInt(e.target.value))}
              ></HourInput>{' '}
              {newDuration > 1 ? 'hours' : 'hour'}
            </HourWrapper>

            <ColorWrapper>
              <ColorOrb color={newColor}></ColorOrb>
              <Listbox
                onChange={(e) => {
                  setNewColor(e);
                }}
                defaultValue={element.color}
              >
                <ListboxOption value="3B82F6">Blue</ListboxOption>
                <ListboxOption value="EF4444">Red</ListboxOption>
                <ListboxOption value="10B981">Green</ListboxOption>
                <ListboxOption value="F59E0B">Yellow</ListboxOption>
              </Listbox>
            </ColorWrapper>
          </PickerWrapper>
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
            onClick={handleClose}
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

// Main

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 20px;
`;

const CloseButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

const PickerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0px;
`;

// Task

const InformationWrapper = styled.div`
  border-bottom: 1px solid #adb5bd;
`;

// Task > Description

const DescriptionHelper = styled.p`
  font-size: 12px;
  color: #adb5bd;
  display: block;
  margin-bottom: 10px;
`;

const DescriptionInput = styled.input`
  font-size: 20px;
  font-weight: bold;
  color: #212529; // Why it doesn't apply?
  border: 0px;
  width: calc(100% - 5px);
  background-color: #f3f4f6;
  padding: 10px 5px;
  border-radius: 5px;
`;

// Task > Duration

const HourWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const HourInput = styled.input`
  font-weight: bold;
  font-size: 16px;
  color: #212529;
  width: 3rem;
  border: 0px;
  border-radius: 5px;
  text-align: right;
  padding-top: 4px;
  padding-right: 5px;
  margin-right: 3px;
  background-color: #f3f4f6;
`;

// Task > Color

const ColorWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ColorOrb = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background: #${(props) => props.color};
  margin-right: 5px;
`;

// Buttons

const ButtonWrapper = styled.div`
  display: flex;
  margin: 15px 0px;
`;

const SaveButton = styled.input`
  background: #3b82f6;
  color: white;
  font-weight: bold;
  border: 0px;
  border-radius: 5px;
  flex-grow: 5;
  margin-right: 5px;
  padding: 10px 0px;
`;

const CancelButton = styled.input`
  background: #4b5563;
  color: white;
  font-weight: bold;
  border: 0px;
  border-radius: 5px;
  flex-grow: 1;
  margin: 0px 5px;
  padding: 10px 0px;
`;

const DeleteButton = styled.input`
  background: #ef4444;
  color: white;
  font-weight: bold;
  border: 0px;
  border-radius: 5px;
  flex-grow: 1;
  margin: 0px 5px;
  padding: 10px 0px;
`;
