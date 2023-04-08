import React, { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import { Database } from "../types/supabase";
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid, Container, Box } from "@mui/material";


export default function DokumentyDesktop() {
  const [documents, setDocuments] = useState<Database['public']['Tables']['documents']['Row'][]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from('documents').select('*') as { data: Database['public']['Tables']['documents']['Row'][]; error: any };
      if (error) {
        console.log(error);
      } else {
        setDocuments(data);
      }
    }
    fetchData();
  }, []);

  return (
    <Box mt={4}>
    <Container fixed>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {documents.map((document) => (
        <Grid key={document.id} item xs={12} sm={4} md={4}>
        <Card sx={{minHeight: "100%"}}>
          <CardMedia
          component="img"
            image={document.card_media}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {document.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {document.description}
            </Typography>
            
          </CardContent>
          <CardActions >
          {document.dl_link && (
              <Button href={document.dl_link} size="medium">POBIERZ PISMO</Button>
            )}
          </CardActions>
        </Card>
        </Grid>
      ))}
    </Grid>
    </Container>
    </Box>
  );

}
