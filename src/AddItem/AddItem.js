import { useState, useRef } from 'react';
import { Listbox, ListboxOption } from '@reach/listbox';
import '@reach/listbox/styles.css';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import './AddItem.css';

import styled from 'styled-components';

export default function AddItem({ handleAdd, showDialog, setShowDialog }) {
  // Task-related useState
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDuration, setTaskDuration] = useState(1);
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [taskColor, setTaskColor] = useState('3B82F6');

  // Error handling
  const [errorArray, setErrorArray] = useState([]);
  let nextErrorArray = [];

  // Dialog config
  const inputRef = useRef();

  // Handlers
  function saveAndExit() {
    // Validation
    if (typeof taskDuration !== 'number') {
      nextErrorArray.push('It must be a number');
    }

    if (taskDuration % 1 !== 0) {
      nextErrorArray.push('It must be an integer');
    }

    if (taskDuration < 1) {
      nextErrorArray.push('It must be bigger than 1');
    }

    setErrorArray(nextErrorArray);

    // If everything's correct, save and exit
    if (nextErrorArray.length === 0) {
      handleAdd(taskDescription, taskDuration, taskCompleted, taskColor);
      setTaskDescription('');
      setTaskDuration(1);
      setTaskCompleted(false);
    }
  }

  function close() {
    setShowDialog(false);
    setTaskDescription('');
    setTaskDuration(1);
    setTaskCompleted(false);
    nextErrorArray = [];
    setErrorArray(nextErrorArray);
  }

  return (
    <Dialog
      isOpen={showDialog}
      onDismiss={close}
      aria-label="Add task"
      initialFocusRef={inputRef}
    >
      <CloseButtonWrapper>
        <button className="close-button" onClick={close}>
          <span aria-hidden>+</span>
        </button>
      </CloseButtonWrapper>
      <MainWrapper>
        <TaskInformation>
          <DescriptionHelper>Add task</DescriptionHelper>
          <DescriptionInput
            type="text"
            value={taskDescription}
            name="itemDescription"
            id="itemDescription"
            placeholder="Description"
            onChange={(e) => setTaskDescription(e.target.value)}
            autoComplete="off"
            ref={inputRef}
          />
          <PickerWrapper>
            <DurationWrapper>
              <DurationInput
                type="number"
                min="1"
                value={taskDuration}
                name="itemDuration"
                id="itemDuration"
                onChange={(e) => setTaskDuration(parseInt(e.target.value))}
                autoComplete="off"
              />
              {taskDuration > 1 ? 'hours' : 'hour'}
            </DurationWrapper>

            <ColorWrapper>
              <ColorOrb color={taskColor}></ColorOrb>
              <Listbox
                onChange={(e) => {
                  setTaskColor(e);
                }}
              >
                <ListboxOption value="3B82F6">Blue</ListboxOption>
                <ListboxOption value="EF4444">Red</ListboxOption>
                <ListboxOption value="10B981">Green</ListboxOption>
                <ListboxOption value="F59E0B">Yellow</ListboxOption>
              </Listbox>
            </ColorWrapper>
          </PickerWrapper>
        </TaskInformation>
        <ButtonsWrapper>
          <AddTaskButton type="button" value="Add" onClick={saveAndExit} />
          <CancelButton
            type="button"
            value="Cancel"
            onClick={close}
          ></CancelButton>
          {errorArray.map((element) => {
            return element;
          })}
        </ButtonsWrapper>
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

const TaskInformation = styled.div`
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
  color: #212529;
  border: 0px;
  width: calc(100% - 5px);
  background-color: #f3f4f6;
  padding: 10px 5px;
  border-radius: 5px;
`;

// Task > Duration

const DurationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DurationInput = styled.input`
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

const ButtonsWrapper = styled.div`
  display: flex;
  margin: 15px 0px;
`;

const AddTaskButton = styled.input`
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
  margin-left: 5px;
  padding: 10px 0px;
`;
