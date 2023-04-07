import * as React from "react";
import { Hidden } from "@mui/material";
import HomeDesktop, { HomeMobile } from "@/homeWelcome";
import Map from "@/Map";

import { FactsMobile } from "@/Facts";
import FactsDesktop from "@/Facts";
import BusStopsDesktop, { BusStopsMobile } from "@/BusStops";


export default function Home() {
  return (
    <>
      <Hidden mdUp>
        <HomeMobile />
        <FactsMobile />
        <BusStopsMobile />
      </Hidden>
      <Hidden mdDown>
        <HomeDesktop />
        <FactsDesktop/>
        <BusStopsDesktop />
      </Hidden>      
        <Map />
    </>
  );
}
