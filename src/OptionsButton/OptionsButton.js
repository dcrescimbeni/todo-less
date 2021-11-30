import styled from 'styled-components';
import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button';
import '@reach/menu-button/styles.css';

import './OptionsButton.css';

export default function OptionsButton({ element, handleDelete, toggleEdit }) {
  return (
    <Wrapper>
      <Menu>
        <MenuButton>Options</MenuButton>
        <MenuList>
          <MenuItem onSelect={toggleEdit}>Edit</MenuItem>
          <MenuItem onSelect={(e) => handleDelete(element.id)}>Delete</MenuItem>
        </MenuList>
      </Menu>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
