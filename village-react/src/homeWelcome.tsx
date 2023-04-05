import React from "react";
import { Launch } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Hidden,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";

const HomeMobile = () => {
  return (
    <Grid item container alignItems="center" p={5}>
      <Grid xs={12} md={8}>
        <Box>
          <Typography variant="h3" component="h3" gutterBottom>
            Witamy w Kruszynie Krajeńskim
          </Typography>
          <Typography variant="body1" display="block">
            Kruszyn Krajeński to wieś wykazująca znaczną dynamikę rozwoju
            funkcji pozarolniczej, na co wpływa oddziaływanie aglomeracji
            Bydgoszczy. Sołectwo obejmuje zarówno tereny zabudowane na
            piaszczystej terasie dolinnej m.in. wzdłuż drogi krajowej nr 5
            Bydgoszcz-Poznań.
          </Typography>
          <Stack spacing={2} marginTop={2} justifyContent="flex-start">
            <Button size="large" endIcon={<Launch />} variant="contained">
              Aktualności
            </Button>
            <Button size="large" variant="outlined">
              Kontakt
            </Button>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

const HomeDesktop = () => {
  const theme = useTheme();
  return (
    <Box py={6} sx={{ backgroundColor: theme.palette.primary.main }}>
      <Container fixed>
        <Paper elevation={4}>
          <Grid item container alignItems="center" p={10}>
            <Grid xs={12} md={8}>
              <Box>
                <Typography variant="h2" component="h4" gutterBottom>
                  Witamy w Kruszynie Krajeńskim
                </Typography>
                <Typography variant="h5" display="block">
                  Kruszyn Krajeński to wieś wykazująca znaczną dynamikę rozwoju
                  funkcji pozarolniczej, na co wpływa oddziaływanie aglomeracji
                  Bydgoszczy. Sołectwo obejmuje zarówno tereny zabudowane na
                  piaszczystej terasie dolinnej m.in. wzdłuż drogi krajowej nr 5
                  Bydgoszcz-Poznań.
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  marginTop={2}
                  justifyContent="flex-start"
                >
                  <Button size="large" endIcon={<Launch />} variant="contained">
                    Aktualności
                  </Button>
                  <Button size="large" variant="outlined">
                    Kontakt
                  </Button>
                </Stack>
              </Box>
            </Grid>
            <Grid xs={12} md={4} textAlign="end">
              <Box component="img" src="/img/herb.svg" width={2 / 3} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default HomeDesktop;
export { HomeMobile };
