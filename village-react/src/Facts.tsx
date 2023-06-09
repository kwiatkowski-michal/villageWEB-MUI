import React from "react";
import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import CropSquareRoundedIcon from '@mui/icons-material/CropSquareRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import AssuredWorkloadRoundedIcon from '@mui/icons-material/AssuredWorkloadRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupRounded';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import NewMeeting from "./Meeting";

export function FactsMobile() {
    const theme = useTheme();
    return (
        <Box pb={6} sx={{ backgroundColor: theme.palette.primary.main }}>
            <Container>
                <Grid container rowSpacing={6}>
                    <Grid item xs={12}>
                        <Paper elevation={4}>
                            <Stack p={5} gap={2}>
                                <Box>
                                    <Typography sx={{ lineHeight: "1.2" }} variant="h6">
                                        <GroupsRoundedIcon sx={{ mr: "0.5rem" }} />
                                        Liczba ludności
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        1 598 osób
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{ lineHeight: "1.2" }}><CropSquareRoundedIcon sx={{ mr: "0.5rem" }} />Powierzchnia</Typography>
                                    <Typography variant="body1" gutterBottom>
                                        15,35 km²
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{ lineHeight: "1.2" }}><VerifiedRoundedIcon sx={{ mr: "0.5rem" }} />Sołtys</Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Anetta Steltmann
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{ lineHeight: "1.2" }}><AssuredWorkloadRoundedIcon sx={{ mr: "0.5rem" }} />Rada Sołecka</Typography>
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
                                <Box>
                                    <Typography variant="h6" sx={{ lineHeight: "1.2" }}><EventAvailableRoundedIcon sx={{ mr: "0.5rem" }} />Najblisze spotkanie</Typography>
                                    <NewMeeting></NewMeeting>
                                </Box>
                            </Stack>
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
                            <Paper elevation={4} sx={{ height: "100%" }}>
                            <Stack p={5} gap={2}>
                                <Box>
                                    <Typography sx={{ lineHeight: "1.2" }} variant="h6">
                                        <GroupsRoundedIcon sx={{ mr: "0.5rem" }} />
                                        Liczba ludności
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        1 598 osób
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{ lineHeight: "1.2" }}><CropSquareRoundedIcon sx={{ mr: "0.5rem" }} />Powierzchnia</Typography>
                                    <Typography variant="body1" gutterBottom>
                                        15,35 km²
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{ lineHeight: "1.2" }}><VerifiedRoundedIcon sx={{ mr: "0.5rem" }} />Sołtys</Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Anetta Steltmann
                                    </Typography>
                                </Box>

                            </Stack>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper elevation={4}>
                                <Stack p={5} gap={2} sx={{ height: "100%" }}>
                                <Box>
                                    <Typography variant="h6" sx={{ lineHeight: "1.2" }}><AssuredWorkloadRoundedIcon sx={{ mr: "0.5rem" }} />Rada Sołecka</Typography>
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
                                <Box>
                                    <Typography variant="h6" sx={{ lineHeight: "1.2" }}><EventAvailableRoundedIcon sx={{ mr: "0.5rem" }} />Najblisze spotkanie</Typography>
                                    <NewMeeting></NewMeeting>
                                </Box>
                            </Stack>
                            </Paper>

                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

