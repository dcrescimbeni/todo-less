import styled from 'styled-components';

export default function HourLine() {
  return (
    <Wrapper>
      <Tip></Tip>
      <Line></Line>
      <Tip></Tip>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0px -6px;
  width: 100%;
`;

const Tip = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: red;
  margin: 0px -1px;
`;

const Line = styled.div`
  border-bottom: 2px solid red;
  width: 100%;
`;
