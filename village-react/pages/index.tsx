import * as React from 'react';
import { Box, Hidden } from '@mui/material';
import HomeDesktop, {HomeMobile } from '@/homeWelcome';
import Map from '@/Map';




export default function Home() {
  return (
    <>

    <Hidden mdUp>
      <HomeMobile />
    </Hidden>
    <Hidden mdDown>
      <HomeDesktop />
    </Hidden>
    <Box>
    <Map />
    </Box>
    </>
      
  );
}