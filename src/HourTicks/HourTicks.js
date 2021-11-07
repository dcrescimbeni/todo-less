import styled from 'styled-components';

export default function HourTicks() {
  let startingTime = 9;
  let endingTime = 18;
  let hours = [];
  for (let i = startingTime; i <= endingTime; i++) {
    hours.push(i);
  }

  return (
    <>
      <MainWrapper>
        {hours.map((element, index) => {
          return (
            <HourBlockElement key={index}>
              <HourTicker>{element}:00</HourTicker>
            </HourBlockElement>
          );
        })}
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;
  left: -100px;
`;

const HourBlockElement = styled.div`
  border-bottom: 1px solid #adb5bd;
  height: 68px;
  display: flex;
  align-items: center;

  &:first-of-type {
    border-top: 1px solid #adb5bd;
  }
`;

const HourTicker = styled.p`
  font-weight: bold;
  font-size: 12px;
  color: #adb5bd;
  margin-left: 6px;
`;
