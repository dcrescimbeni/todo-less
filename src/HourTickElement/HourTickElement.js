import styled from 'styled-components';

export default function HourTickElement({ time }) {
  return (
    <>
      <HourTickerMark>{time}:00</HourTickerMark>
    </>
  );
}

const HourTickerMark = styled.div`
  height: 70px;
  width: 100%;
  border-bottom: 1px solid red;
`;
