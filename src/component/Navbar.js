import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            To-Do List
          </Typography>
          <Button color="inherit">Login
    <Stack direction="row" spacing={-2.5}>
      <Avatar>H</Avatar>
      <Avatar sx={{ bgcolor: deepOrange[800] }}>N</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[400] }}>OP</Avatar>
    </Stack>
    </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
