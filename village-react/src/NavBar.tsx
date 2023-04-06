import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { Stack } from "@mui/material";

const newPages = [
  { name: "Strona główna", link: "/", icon: <HomeRoundedIcon /> },
  { name: "Dokumenty", link: "/dokumenty", icon: <InsertDriveFileIcon /> },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar color="primary" position="sticky" sx={{ boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            component="a"
            href="/"
            sx={{
              mr: 4.5,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            <img src="/img/logo.svg" alt="logo" height="40" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {" "}
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {newPages.map((page, index) => (
                <MenuItem
                  href={page.link}
                  component="a"
                  key={index}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            component="a"
            href="/"
            sx={{
              mr: 1,
              display: { xs: "flex", md: "none" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src="/img/logo-rev.svg" alt="logo" height="40" />
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Stack spacing={2} direction="row">
              {" "}
              {newPages.map((page, index) => (
                <Button
                  href={page.link}
                  startIcon={page.icon}
                  component="a"
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{ mr: 2, color: "white" }}
                >
                  {page.name}
                </Button>
              ))}
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
