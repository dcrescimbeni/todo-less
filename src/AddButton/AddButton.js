import styled from 'styled-components';

export default function AddButton({
  visible,
  setAddButtonVisible,
  showDialog,
  setShowDialog,
}) {
  return (
    <Wrapper visible={visible}>
      <AddButtonFull
        type="button"
        value="Add"
        onClick={(e) => setShowDialog(true)}
      ></AddButtonFull>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${(props) => (props.visible ? '' : 'display:none')}
`;

const AddButtonFull = styled.input``;
