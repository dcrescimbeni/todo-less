import { useState } from 'react';
import styled from 'styled-components';

//TODO: Can't make listbox to work inside Edit component...

export default function EditPrompt({ element, handleEdit, toggleEdit }) {
  const [newDescription, setNewDescription] = useState(element.description);
  const [newDuration, setNewDuration] = useState(element.duration);

  function handleSaveEdit() {
    handleEdit(element.id, newDescription, newDuration);
    toggleEdit();
  }

  return (
    <Wrapper>
      <ColorWrapper>
        <ColorOrb color={element.color}></ColorOrb>
      </ColorWrapper>
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

      <SaveButton
        type="button"
        value="Save"
        onClick={handleSaveEdit}
      ></SaveButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DescriptionInput = styled.input`
  margin-left: auto;
  flex-grow: 1;
`;

const SaveButton = styled.input`
  background: #3b82f6;
  color: white;
  font-weight: bold;
  color: white;
  border: 0px;
  border-radius: 5px;
  margin: 5px;
  padding: 7px 14px;
`;

const HourInput = styled.input`
  width: 2rem;
  margin: 0px 5px;
  padding-right: 5px;
  text-align: right;
`;

const ColorOrb = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #${(props) => props.color};
  margin-right: 5px;
`;

const ColorWrapper = styled.div`
  display: flex;
  margin-right: 16px;
  align-items: center;
`;

const HourIndicator = styled.div`
  font-size: 12px;
  color: #adb5bd;
  margin: 0px 5px;
`;
