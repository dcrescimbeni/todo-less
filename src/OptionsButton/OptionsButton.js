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

export default function OptionsButton({ element, handleDelete }) {
  // Handles delete confirmation
  function handleDeleteAlert(id) {
    let result = window.confirm('Do you want to delete the task?');

    if (result) {
      handleDelete(id);
    }
  }

  return (
    <Wrapper>
      <Menu>
        <MenuButton>Options</MenuButton>
        <MenuList>
          <MenuItem>Edit</MenuItem>
          <MenuItem onClick={(e) => handleDeleteAlert(element.id)}>
            Delete
          </MenuItem>
        </MenuList>
      </Menu>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
