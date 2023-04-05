import * as React from 'react';
import { Hidden } from '@mui/material';
import HomeDesktop, {HomeMobile } from '@/homeWelcome';



export default function Home() {
  return (
    <>

    <Hidden mdUp>
      <HomeMobile />
    </Hidden>
    <Hidden mdDown>
      <HomeDesktop />
    </Hidden>
    </>
      
  );
}