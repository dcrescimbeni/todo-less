import styled from 'styled-components';

export default function HourTicks() {
  return (
    <>
      <MainWrapper></MainWrapper>
    </>
  );
}

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #51cf66;
  position: relative;
  z-index: 0;
  left: -100px;
`;
