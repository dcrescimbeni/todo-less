import { useState } from 'react';
import styled from 'styled-components';

//TODO: Can't make listbox to work inside Edit component...

export default function EditPrompt({
  element,
  handleEdit,
  visible,
  toggleEdit,
}) {
  const [newDescription, setNewDescription] = useState(element.description);
  const [newDuration, setNewDuration] = useState(element.duration);
  const [newColor, setNewColor] = useState(element.color);

  function handleSaveEdit() {
    handleEdit(element.id, newDescription, newDuration);
    toggleEdit();
  }

  return (
    <Wrapper visible={visible}>
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
      <SaveButton
        type="button"
        value="save"
        onClick={handleSaveEdit}
      ></SaveButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${(props) => (props.visible ? 'display: flex;' : 'display: none;')}
`;

const DescriptionInput = styled.input``;

const SaveButton = styled.input``;

const HourInput = styled.input``;

const ColorOrb = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background: #${(props) => props.color};
  margin-right: 5px;
`;

const ColorWrapper = styled.div`
  display: flex;
  margin-right: 16px;
  align-items: center;
`;
