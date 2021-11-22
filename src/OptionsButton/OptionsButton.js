import styled from 'styled-components';

export default function OptionsButton({ optionsVisible }) {
  return (
    <Wrapper visible={optionsVisible}>
      <Button>
        <Dot></Dot>
        <Dot></Dot>
        <Dot></Dot>
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${(props) => (props.visible ? '' : 'display: none;')}
`;

const Button = styled.div`
  height: 25px;
  width: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #adb5bd;
`;
