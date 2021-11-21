import { useState } from 'react';
import { Listbox, ListboxOption } from '@reach/listbox';
import '@reach/listbox/styles.css';
import './AddItem.css';

import styled from 'styled-components';

export default function AddItem({
  handleAdd,
  element,
  visible,
  setAddButtonVisible,
}) {
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDuration, setTaskDuration] = useState(1);
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [taskColor, setTaskColor] = useState('3B82F6');

  if (element) {
    setTaskDescription(element.description);
    setTaskDuration(element.duration);
    setTaskCompleted(element.completed);
    setTaskColor(element.color);
  }

  return (
    <MainWrapper visible={visible}>
      <DescriptionHelper>Add task</DescriptionHelper>
      <DescriptionInput
        type="text"
        value={taskDescription}
        name="itemDescription"
        id="itemDescription"
        placeholder="Description"
        onChange={(e) => setTaskDescription(e.target.value)}
        autoComplete="off"
      />
      <PickerWrapper>
        <DurationWrapper>
          <DurationInput
            type="text"
            value={taskDuration}
            name="itemDuration"
            id="itemDuration"
            onChange={(e) => setTaskDuration(e.target.value)}
            autoComplete="off"
          />
          hour
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
      <AddTaskButton
        type="button"
        value="Add"
        onClick={(e) => {
          handleAdd(taskDescription, taskDuration, taskCompleted, taskColor);
          setTaskDescription('');
          setTaskDuration(1);
          setTaskCompleted(false);
        }}
      />
      <CancelButton type="button" value="Cancel" onClick={(e)=> setAddButtonVisible(visible)}></CancelButton>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  ${(props) => (props.visible ? 'display: flex' : 'display:none')};
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

const DescriptionInput = styled.input`
  font-size: 20px;
  font-weight: bold;
  color: #212529;
  padding: 15px 5px;
  border: 0px;
`;

const DurationInput = styled.input`
  font-weight: bold;
  font-size: 16px;
  width: 2rem;
  border: 0px;
  text-align: right;
  margin-right: 5px;
`;

const PickerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ColorOrb = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background: #${(props) => props.color};
  margin-right: 5px;
`;

const AddTaskButton = styled.input`
  background: #3b82f6;
  color: white;
  font-weight: bold;
  color: white;
  padding: 10px;
  margin-top: 20px;
  border: 0px;
  border-radius: 5px;
`;

const CancelButton = styled.input``;

const DurationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ColorWrapper = styled.div`
  display: flex;
  margin-right: 16px;
  align-items: center;
`;
