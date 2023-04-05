import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Launch } from '@mui/icons-material';
import { grey } from '@mui/material/colors';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'kwiatkowskimichal © '}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function StickyFooter() {
  return (

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          backgroundColor: grey[300]
        }}
      >
        <Container maxWidth="lg">
          <Typography component="a" variant="caption" color="text.secondary" target='_blank' href='https://bip.bialeblota.pl'>
          <img src="/img/bip.svg" alt="bip" /><Launch fontSize='small' color='inherit'/>
          </Typography>
          <Copyright />
        </Container>
      </Box>
  );
}