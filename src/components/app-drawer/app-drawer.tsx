import React, { StatelessComponent } from 'react';
import {
  Drawer,
  DrawerHeader,
  DrawerContent,
} from 'rmwc/Drawer';
import {
  ListItem,
  ListItemText,
} from 'rmwc/List';

export interface AppDrawerProps {
  isOpen?: boolean;
  toggleOpen?(): void;
}

const AppDrawer: StatelessComponent<AppDrawerProps> = ({ isOpen, toggleOpen }) => (
  <Drawer temporary open={isOpen} onClose={toggleOpen}>
    <DrawerHeader>
      DrawerHeader
    </DrawerHeader>
    <DrawerContent>
      <ListItem>
        <ListItemText>Cookies</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Pizza</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Icecream</ListItemText>
      </ListItem>
    </DrawerContent>
  </Drawer>
);

export default AppDrawer;
