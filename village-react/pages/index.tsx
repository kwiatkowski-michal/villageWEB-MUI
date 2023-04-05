import * as React from "react";
import { Box, Hidden } from "@mui/material";
import HomeDesktop, { HomeMobile } from "@/homeWelcome";
import Map from "@/Map";
import Footer from "@/Footer";


export default function Home() {
  return (
    <>
      <Hidden mdUp>
        <HomeMobile />
      </Hidden>
      <Hidden mdDown>
        <HomeDesktop />
      </Hidden>
        <Map />
        <Footer/>
    </>
  );
}
