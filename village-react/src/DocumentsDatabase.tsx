import React, { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import { Database } from "../types/supabase";
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid, Container, Box, Tooltip, IconButton, Skeleton } from "@mui/material";
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

interface MediaProps {
  loading?: boolean;
}

export default function DokumentyDesktop() {
  const [documents, setDocuments] = useState<Database['public']['Tables']['documents']['Row'][]>([]);
  
  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from('documents').select('*').order('id', { ascending: false })
      if (error) {
        console.log(error);
      } else {
        setDocuments(data as Database['public']['Tables']['documents']['Row'][]);
        console.log(data);
      }
    }
    fetchData();
  }, []);

  return (
    <Box my={4}>
    <Container fixed>
    <Grid container item spacing={{ xs: 2, md: 3 }}>
      {documents.map((document) => (
        <Grid key={document.id} item xs={12} sm={6} md={4}>
        <Card sx={{minHeight: "100%", position: 'relative'}}>
            <CardMedia
            component="img"
              image={document.card_media}
            />
          <CardContent>
          <Typography variant="overline" color="text.secondary">
              Data publikacji: {document.created_at}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {document.description}
            </Typography>
          </CardContent>
          {document.dl_link && (
            <CardActions sx={{marginTop:"1.8rem"}}>
              <Tooltip title="Pobierz pismo" arrow leaveDelay={200} >
              <IconButton href={document.dl_link} target="_blank" sx={{position: 'absolute', right: 10, bottom: 10}} size="medium"><DownloadRoundedIcon/></IconButton>
              </Tooltip>
              </CardActions>
            )}
        </Card>
        </Grid>
      ))}
      
    </Grid>
    </Container>
    </Box>
  );

}
