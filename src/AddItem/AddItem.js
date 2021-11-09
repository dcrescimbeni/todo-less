import ColorPicker from '../ColorPicker/ColorPicker';
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
        <ColorPickerList></ColorPickerList>
      </PickerWrapper>
      <AddTaskButton type="button" value="Add" onClick={handleAdd} />
    </MainWrapper>
  );
}

function ColorPickerList() {
  return (
    <ListboxInput defaultValue="blue">
      <ListboxButton />
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
  width: 50px;
  border: 0px;
`;

const PickerWrapper = styled.div`
  display: flex;
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
