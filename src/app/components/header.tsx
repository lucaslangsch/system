
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { cookies } from 'next/headers'


export async function getData() {
  'use server'
  const cookieStore = cookies()
  cookies().set('name', 'lee')
  const data = cookieStore.get('name')
  console.log(data)
}

export default function ButtonAppBar() {
  const data = getData()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Olá,
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
