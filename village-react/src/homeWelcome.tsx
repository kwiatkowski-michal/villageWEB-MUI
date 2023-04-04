import { Box, Button, Hidden, ListItem, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const homeWelcome = () => {
    return (
        <Grid container alignItems="center" marginTop={6}>
            <Grid xs={12} md={8}>
                <Box>
                <Typography variant="h2" component="h1" gutterBottom>
                    Witamy w Kruszynie Krajeńskim
                </Typography>
                <Typography variant="body1">
                    Kruszyn Krajeński to wieś wykazująca znaczną dynamikę rozwoju
                    funkcji pozarolniczej, na co wpływa oddziaływanie aglomeracji
                    Bydgoszczy. Sołectwo obejmuje zarówno tereny zabudowane na
                    piaszczystej terasie dolinnej m.in. wzdłuż drogi krajowej nr 5
                    Bydgoszcz-Poznań.
                </Typography>
                <Stack direction="row" spacing={2} marginTop={2} justifyContent="flex-start">
                    <Button size="large" variant="contained">Aktualności</Button>
                    <Button size="large" variant="outlined">Kontakt</Button>
                </Stack>
                </Box>
            </Grid>
            <Hidden mdDown>
            <Grid xs={12} md={4} p={{lg:10, md: 4}} alignItems="center" marginTop={{ xs: 3, md: 0 }} >
                    <Box component="img" src="/img/herb.svg" alt="kruszyn"/>
            </Grid>
            </Hidden>
        </Grid>
    );
};

export default homeWelcome;