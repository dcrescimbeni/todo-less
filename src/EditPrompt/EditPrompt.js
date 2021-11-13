import { useState } from 'react';
import styled from 'styled-components';

//TODO: Add edit color

export default function EditPrompt({
  element,
  handleEdit,
  visible,
  toggleEdit,
}) {
  const [newDescription, setNewDescription] = useState(element.description);
  const [newDuration, setNewDuration] = useState(element.duration);

  function handleSaveEdit() {
    handleEdit(element.id, newDescription, newDuration);
    toggleEdit();
  }

  return (
    <Wrapper visible={visible}>
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
  ${(props) => (props.visible ? '' : 'display: none;')}
`;

const DescriptionInput = styled.input``;

const SaveButton = styled.input``;

const HourInput = styled.input``;
