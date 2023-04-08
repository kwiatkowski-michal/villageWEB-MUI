import { Box, Container, Paper, Typography, useTheme } from "@mui/material";
import Script from "next/script";
import DepartureBoardRoundedIcon from '@mui/icons-material/DepartureBoardRounded';
const BusStopsDesktop = () => {
    const theme = useTheme();
    return (
        <>
        <Script src="https://jakdojade.pl/widgets/elements.js"></Script>
        <Box py={6}>
                <Container fixed>
                    <Paper sx={{ backgroundColor: "black" }} elevation={10}>
                        <Box p={2}>
                            <Typography pl={2} py={1} variant="h4" sx={{ color: "white" }}>
                            <DepartureBoardRoundedIcon sx={{ color: "white", mr: "0.5rem" }}/>
                                Komunikacja miejska
                            </Typography>
                        <jakdojade-planner-widget city-symbol="BYDGOSZCZ" locale="pl" max-res="3" theme="wtk-red"></jakdojade-planner-widget>
                        </Box>
                    </Paper>
                </Container>
            </Box>
        </>
    );
    };

const BusStopsMobile = () => {
    const theme = useTheme();
    return (
        <>
        <Script src="https://jakdojade.pl/widgets/elements.js"></Script>
        <Box py={6}>
                <Container>
                    <Paper sx={{ backgroundColor: "black" }} elevation={10}>
                        <Box p={2}>
                        <Typography pl={2} py={1} variant="h6" sx={{ color: "white", lineHeight: "1.2" }}>
                            <DepartureBoardRoundedIcon sx={{ color: "white", mr: "0.5rem" }}/>
                                Komunikacja miejska
                            </Typography>
                        <jakdojade-planner-widget city-symbol="BYDGOSZCZ" locale="pl" max-res="3" theme="wtk-red"></jakdojade-planner-widget>
                        </Box>
                    </Paper>
                </Container>
            </Box>
        </>
    );
    };
export default BusStopsDesktop;
export { BusStopsMobile };
