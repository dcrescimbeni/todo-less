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
  flex-basis: clamp(350px, 35vw, 550px);
  margin-left: -50%;

  /* flex-basis: clamp(650px, 30vw, 800px);
  margin-left: -85px;
  margin-right: -100%; */
  /* border: 1px solid red; */
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
  margin-left: 15px;
`;
