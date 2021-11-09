import ColorPicker from '../ColorPicker/ColorPicker';

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
      <input
        type="text"
        value={taskDescription}
        name="itemDescription"
        id="itemDescription"
        placeholder="Description"
        onChange={handleDescriptionChange}
        autoComplete="off"
      />
      <input
        type="text"
        value={taskDuration}
        name="itemDuration"
        id="itemDuration"
        placeholder="Duration"
        onChange={handleDurationChange}
        autoComplete="off"
      />
      <input type="button" value="Add" onClick={handleAdd} />
      <ColorPicker></ColorPicker>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  padding: 15px;
  border: 1px solid #dee2e6;
`;

const DescriptionHelper = styled.p`
  font-size: 12px;
  color: #adb5bd;
  display: block;
`;
