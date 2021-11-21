import styled from 'styled-components';

export default function HourTickElement({ time }) {
  return (
    <>
      <HourTickerMark>
        <Time>{time}:00</Time>
      </HourTickerMark>
    </>
  );
}

const HourTickerMark = styled.div`
  height: 70px;
  width: 100%;
  border-bottom: 1px solid #dee2e6;
  display: flex;
  align-items: center;
`;

const Time = styled.p`
  margin: 0px 0.3rem;
  font-size: 12px;
  font-weight: bold;
  color: #adb5bd;
`;
