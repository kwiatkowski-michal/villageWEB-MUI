import * as React from "react";
import { Hidden } from "@mui/material";
import HomeDesktop, { HomeMobile } from "@/homeWelcome";
import Map from "@/Map";
import Footer from "@/Footer";
import { FactsMobile } from "@/Facts";
import FactsDesktop from "@/Facts";

export default function Home() {
  return (
    <>
      <Hidden mdUp>
        <HomeMobile />
      </Hidden>
      <Hidden mdDown>
        <HomeDesktop />
      </Hidden>
      <Hidden mdUp>
        <FactsMobile />
      </Hidden>
      <Hidden mdDown>
        <FactsDesktop/>
      </Hidden>
        <Map />
        <Footer/>
    </>
  );
}
