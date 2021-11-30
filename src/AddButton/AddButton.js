import styled from 'styled-components';

export default function AddButton({ showDialog, setShowDialog }) {
  return (
    <Wrapper>
      <AddButtonFull
        type="button"
        value="Add"
        onClick={(e) => setShowDialog(true)}
      ></AddButtonFull>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const AddButtonFull = styled.input``;
