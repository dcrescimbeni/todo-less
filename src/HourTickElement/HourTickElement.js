import styled from 'styled-components';

export default function HourTickElement() {
  return (
    <>
      <HourTickerMark>1 hour</HourTickerMark>
    </>
  );
}

const HourTickerMark = styled.div`
  height: 70px;
  width: 100%;
  border-bottom: 1px solid red;
`;
