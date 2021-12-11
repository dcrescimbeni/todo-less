import styled from 'styled-components';
import './HourLine.css';

export default function HourLine() {
  return (
    <Wrapper>
      <Tip></Tip>
      <Line></Line>
      <Tip className="rightTip"></Tip>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0px -4px;
  width: calc(100% + 6px);

  @media (min-width: 530px) {
    margin: 0px -5px;
  }
`;

const Tip = styled.div`
  width: 6px;
  height: 6px;
  /* border-radius: 50%; */
  background-color: red;
  margin: 0px -1px;
`;

const Line = styled.div`
  border-bottom: 2px solid red;
  width: 100%;
`;
