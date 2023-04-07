import { Box, Container, Paper, useTheme } from "@mui/material";
import Script from "next/script";

const BusStopsDesktop = () => {
    const theme = useTheme();
    return (
        <>
        <Script src="https://jakdojade.pl/widgets/elements.js"></Script>
        <Box sx={{ backgroundColor: theme.palette.primary.main }} pb={6}>
                <Container fixed>
                    <Paper sx={{ backgroundColor: "black" }} elevation={4}>
                        <Box p={2}>
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
        <Box sx={{ backgroundColor: theme.palette.primary.main }} pb={6}>
                <Container>
                    <Paper sx={{ backgroundColor: "black" }} elevation={4}>
                        <Box p={2}>
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
