import styled from 'styled-components';
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuPopover,
  MenuLink,
} from '@reach/menu-button';
import '@reach/menu-button/styles.css';

import './OptionsButton.css';

export default function OptionsButton({ optionsVisible }) {
  return (
    <Wrapper>
      <Menu>
        <MenuButton>Options</MenuButton>
        <MenuList>
          <MenuItem>Edit</MenuItem>
          <MenuItem>Delete</MenuItem>
        </MenuList>
      </Menu>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
