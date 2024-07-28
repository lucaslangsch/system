
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { cookies } from 'next/headers'


export default function ButtonAppBar() {
  const cookieStore = cookies()
  const user = cookieStore.get('currentUser')

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Olá, { user?.value }
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
