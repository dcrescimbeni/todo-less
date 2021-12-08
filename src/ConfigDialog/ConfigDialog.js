import { useState } from 'react';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import styled from 'styled-components';
import './ConfigDialog.css';

export default function ConfigDialog({
  showConfigDialog,
  setShowConfigDialog,
  timeStart,
  updateStartingTime,
}) {
  const [newStartingTime, setNewStartingTime] = useState(timeStart);
  const [errorArray, setErrorArray] = useState([]);

  function closeAndCancel() {
    setShowConfigDialog(false);
  }

  let nextErrorArray = [];
  function closeAndSave() {
    // Check for correct type (numbers)
    if (typeof newStartingTime !== 'number') {
      nextErrorArray.push('It must be a number');
    }

    // Check for whole numbers only
    if (newStartingTime % 1 !== 0) {
      nextErrorArray.push('It must be an integer');
    }
    // Check for min and max values
    if (newStartingTime < 0 || newStartingTime > 23) {
      nextErrorArray.push(`It can't be less than 0 and bigger than 23`);
    }

    setErrorArray(nextErrorArray);

    if (nextErrorArray.length === 0) {
      setShowConfigDialog(false);
      updateStartingTime(newStartingTime);
    }
  }

  return (
    <Dialog
      isOpen={showConfigDialog}
      onDismiss={closeAndCancel}
      aria-label="Configuration options dialog"
      className={'configModal'}
    >
      <Wrapper>
        <InputWrapper>
          Starting time{' '}
          <InputStartingTime
            type="number"
            name="startingTimeInput"
            id="startingTimeInput"
            value={newStartingTime}
            onChange={(e) => setNewStartingTime(parseInt(e.target.value))}
          ></InputStartingTime>
        </InputWrapper>
        <ButtonsWrapper>
          <SaveButton
            type="button"
            value="Save"
            onClick={closeAndSave}
          ></SaveButton>
          <CancelButton
            type="button"
            value="Cancel"
            onClick={closeAndCancel}
          ></CancelButton>
          {errorArray.map((value) => {
            return <p>{value}</p>;
          })}
        </ButtonsWrapper>
      </Wrapper>
    </Dialog>
  );
}

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

// Input

const InputWrapper = styled.div``;

const InputStartingTime = styled.input`
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

// Buttons

const ButtonsWrapper = styled.div``;

const SaveButton = styled.input`
  background: #3b82f6;
  color: white;
  font-weight: bold;
  border: 0px;
  border-radius: 5px;
  margin-right: 5px;
  padding: 10px 0px;
  width: 70px;
`;

const CancelButton = styled.input`
  background: #4b5563;
  color: white;
  font-weight: bold;
  border: 0px;
  border-radius: 5px;
  margin-left: 5px;
  padding: 10px 0px;
  width: 50px;
`;
