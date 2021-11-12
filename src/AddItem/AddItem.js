import {
  Listbox,
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxList,
  ListboxOption,
} from '@reach/listbox';
import '@reach/listbox/styles.css';
import './AddItem.css';

import styled from 'styled-components';

export default function AddItem({
  handleAdd,
  taskDescription,
  handleDescriptionChange,
  taskDuration,
  handleDurationChange,
  taskColor,
  handleColorChange,
}) {
  return (
    <MainWrapper>
      <DescriptionHelper>Add task</DescriptionHelper>
      <DescriptionInput
        type="text"
        value={taskDescription}
        name="itemDescription"
        id="itemDescription"
        placeholder="Description"
        onChange={handleDescriptionChange}
        autoComplete="off"
      />
      <PickerWrapper>
        <DurationWrapper>
          <DurationInput
            type="text"
            value={taskDuration}
            name="itemDuration"
            id="itemDuration"
            placeholder="Duration"
            onChange={handleDurationChange}
            autoComplete="off"
          />
          hour
        </DurationWrapper>
        <ColorPickerList
          taskColor={taskColor}
          handleColorChange={handleColorChange}
        ></ColorPickerList>
      </PickerWrapper>
      <AddTaskButton type="button" value="Add" onClick={handleAdd} />
    </MainWrapper>
  );
}

function ColorPickerList(taskColor, handleColorChange) {
  return (
    <ListboxInput
      // value={taskColor}
      defaultValue={taskColor}
      onChange={(e) => handleColorChange(e)}
    >
      {console.log(taskColor)}
      {console.log(handleColorChange)}
      <ColorWrapper>
        {/* TODO: change color dynamically */}
        <ColorBlob color="3B82F6"></ColorBlob>
        <ListboxButton />
      </ColorWrapper>
      <ListboxPopover>
        <ListboxList>
          <ListboxOption value="blue">
            <ColorOrb color="3B82F6"></ColorOrb> Blue
          </ListboxOption>
          <ListboxOption value="red">
            <ColorOrb color="EF4444"></ColorOrb> Red
          </ListboxOption>
          <ListboxOption value="green">
            <ColorOrb color="10B981"></ColorOrb> Green
          </ListboxOption>
          <ListboxOption value="yellow">
            <ColorOrb color="F59E0B"></ColorOrb> Yellow
          </ListboxOption>
        </ListboxList>
      </ListboxPopover>
    </ListboxInput>
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
  display: inline-block;
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

const ColorBlob = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #${(props) => props.color};
  margin-right: 5px;
`;

const DurationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ColorWrapper = styled.div`
  display: flex;
  margin-right: 16px;
`;
