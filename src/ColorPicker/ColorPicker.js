import styled from 'styled-components';

export default function ColorPicker() {
  return (
    <MainWrapper>
      <ColorItem color={'red'}></ColorItem>
      <ColorItem color={'blue'}></ColorItem>
      <ColorItem color={'green'}></ColorItem>
      <ColorItem color={'yellow'}></ColorItem>
    </MainWrapper>
  );
}

function ColorItem({ color }) {
  return <div>{color}</div>;
}

const MainWrapper = styled.div`
  background-color: red;
`;
