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
              <HourTicker>{element}</HourTicker>
              <HourLine></HourLine>
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

const HourBlockElement = styled.div``;

const HourTicker = styled.p`
  padding: 30px;
`;

const HourLine = styled.div`
  border-bottom: 1px solid red;
  height: 1px;
  width: 100%;
`;
