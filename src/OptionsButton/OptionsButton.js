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

export default function OptionsButton({
  element,
  handleDelete,
  handleEdit,
  showDialog,
  setShowDialog,
  editElement,
  setEditElement,
}) {
  // Handles delete confirmation
  function handleDeleteAlert(id) {
    let result = window.confirm('Do you want to delete the task?');

    if (result) {
      handleDelete(id);
    }
  }

  // Handles edit
  function onEdit(element) {
    console.log(element);
    // setShowDialog(true);
    // setEditElement(element);
  }

  return (
    <Wrapper>
      <Menu>
        <MenuButton>Options</MenuButton>
        <MenuList>
          <MenuItem
            onSelect={(e) => {
              onEdit(element);
            }}
          >
            Edit
          </MenuItem>
          <MenuItem onSelect={(e) => handleDeleteAlert(element.id)}>
            Delete
          </MenuItem>
        </MenuList>
      </Menu>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
