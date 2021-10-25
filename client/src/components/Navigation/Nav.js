import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import "../../style.css"
import NavButton from './NavButton';
import AuthenticationButton from '../auth/AuthenticationButton';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> 
              <NavButton to="/habits" text ="Habits"/>
              <NavButton to="/" text ="To Do"/>
              <NavButton to="/stats" text ="Stats"/>
              <NavButton to="/partner" text ="Partner"/>
          </Typography>
          
          <AuthenticationButton/>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}