import React from "react";
import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import CropSquareRoundedIcon from '@mui/icons-material/CropSquareRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import AssuredWorkloadRoundedIcon from '@mui/icons-material/AssuredWorkloadRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupRounded';
import { WidthFull } from "@mui/icons-material";

export function FactsMobile() {
    const theme = useTheme();
    return (
        <Box pb={6} sx={{ backgroundColor: theme.palette.primary.main }}>
            <Container>
                <Grid container rowSpacing={6}>
                    <Grid item xs={12}>
                        <Paper elevation={4}>
                            <Box p={5}>
                                <Typography variant="h6">
                                <GroupsRoundedIcon sx={{ mr: "0.5rem" }}/>
                                    Liczba ludności
                                    </Typography>
                                <Typography variant="body1" gutterBottom>
                                    1 598 osób
                                </Typography>
                                <Typography variant="h6"><CropSquareRoundedIcon sx={{ mr: "0.5rem" }}/>Powierzchnia</Typography>
                                <Typography variant="body1" gutterBottom>
                                    15,35 km²
                                </Typography>
                                <Typography variant="h6"><VerifiedRoundedIcon sx={{ mr: "0.5rem" }}/>Sołtys</Typography>
                                <Typography variant="body1" gutterBottom>
                                    Anetta Steltmann
                                </Typography>
                                <Typography variant="h6"><AssuredWorkloadRoundedIcon sx={{ mr: "0.5rem" }}/>Rada Sołecka</Typography>
                                <Typography variant="body1" >
                                    Marek Łudziński - przewodniczący
                                </Typography>
                                <Typography variant="body1" >
                                    Julita Joachimowska - sekretarz
                                </Typography>
                                <Typography variant="body1" >
                                    Iwona Maj-Imbirska
                                </Typography>
                                <Typography variant="body1" >
                                    Helena Bielska
                                </Typography>
                                <Typography variant="body1" >
                                    Wiesława Paluch
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default function FactsDesktop() {
    const theme = useTheme();
    return (
        <>
            <Box pb={6} sx={{ backgroundColor: theme.palette.primary.main }}>
                <Container fixed>
                    <Grid container rowSpacing={6} columnSpacing={7}>
                        <Grid item xs={6}>
                            <Paper elevation={4}>
                                <Box p={5}>
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <PeopleOutlineRoundedIcon />
                                        <Typography variant="h6">Liczba ludności</Typography>
                                    </Stack>
                                    <Typography variant="h5" gutterBottom>
                                        1 598 osób
                                    </Typography>
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <CropSquareRoundedIcon />
                                        <Typography variant="h6">Powierzchnia</Typography>
                                    </Stack>
                                    <Typography variant="h5" gutterBottom>
                                        15,35 km²
                                    </Typography>
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <VerifiedRoundedIcon />
                                        <Typography variant="h6">Sołtys</Typography>
                                    </Stack>
                                    <Typography variant="h5" gutterBottom>
                                        Anetta Steltmann
                                    </Typography>

                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper elevation={4} sx={{ height: "100%" }}>
                                <Box p={5}>
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <AssuredWorkloadRoundedIcon />
                                        <Typography variant="h6">Rada Sołecka</Typography>
                                    </Stack>
                                    <Typography variant="h5" >
                                        Marek Łudziński - przewodniczący
                                    </Typography>
                                    <Typography variant="h5" >
                                        Julita Joachimowska - sekretarz
                                    </Typography>
                                    <Typography variant="h5" >
                                        Iwona Maj-Imbirska
                                    </Typography>
                                    <Typography variant="h5" >
                                        Helena Bielska
                                    </Typography>
                                    <Typography variant="h5" >
                                        Wiesława Paluch
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

