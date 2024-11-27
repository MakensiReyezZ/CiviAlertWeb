import React, { useState } from 'react';
import { Paper, Box, Grid, Button, TextField, Typography, IconButton } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import PageContainer from './PageContainer';
import DashboardCard from './DashboardCard';

const ShareIcon = () => (
  <Typography variant="h5" color="primary">🔄</Typography>
);

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

const generateRandomDate = () => {
  const randomDaysAgo = Math.floor(Math.random() * 30); 
  const date = new Date();
  date.setDate(date.getDate() - randomDaysAgo);
  return date.toLocaleString(); 
};

const Publicaciones = () => {
  const [posts, setPosts] = useState([
    { 
      id: 1, 
      title: 'Asalto en la vía pública', 
      content: 'Ayer, en horas de la tarde, un asalto ocurrió en la vía pública. La policía ya está investigando el incidente, pero se recomienda estar alertas y reportar cualquier comportamiento sospechoso.',
      imageUrl: 'https://larazon.pe/wp-content/uploads/2019/12/15.3-Asaltos.jpeg',
      comments: [
        '¡Qué miedo! Esperemos que lo resuelvan pronto.',
        'Es terrible que esto siga pasando, debemos estar más alertas.'
      ],
      shared: 5,
      date: generateRandomDate(),
    },
    { 
      id: 2, 
      title: 'Accidente vehicular en la calle principal', 
      content: 'Un trágico accidente vehicular ocurrió esta mañana en la calle principal. Varios vehículos se vieron involucrados, pero afortunadamente no hubo víctimas fatales. La policía y los servicios de emergencia ya se encuentran en el lugar.',
      imageUrl: 'https://e.rpp-noticias.io/xlarge/2023/08/11/015401_1462261.webp',
      comments: [
        'Es bueno saber que no hubo víctimas fatales, pero es necesario mejorar las calles.',
        'Espero que todos los involucrados estén bien, es un lugar muy transitado.'
      ],
      shared: 3,
      date: generateRandomDate(),
    },
    { 
      id: 3, 
      title: 'Robo en una tienda de electrónicos', 
      content: 'Un robo armado ocurrió en una tienda de electrónicos en el centro comercial local. Se está pidiendo la colaboración de la comunidad para identificar a los sospechosos. Por favor, si tienes información, contacta a las autoridades.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpdWZutfZrmctaaGqfC2ee5kc5JSEydeXJPA&s',
      comments: [
        'Espero que atrapen a los responsables pronto.',
        'Muy preocupante, ¿dónde fue esto exactamente?'
      ],
      shared: 7,
      date: generateRandomDate(),
    }
  ]);

  const [comment, setComment] = useState('');
  const [username, setUsername] = useState('Usuario Anónimo');

  const addComment = (postId, newComment) => {
    if (!newComment) return;
    const commentWithUser = `${username}: ${newComment}`;
    setPosts(posts.map(post =>
      post.id === postId 
        ? { ...post, comments: [...post.comments, commentWithUser] } 
        : post
    ));
    setComment('');
  };

  const sharePost = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, shared: post.shared + 1 } : post
    ));
  };

  return (
    <PageContainer title="Publicaciones" description="Lista de incidentes y publicaciones relacionadas">
      <DashboardCard title="Reportes de Incidentes">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Publicaciones Recientes
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
              {posts.map(post => (
                <Paper key={post.id} sx={{ p: 2, mb: 2 }}>
                  <Box
                    sx={{
                      width: '100%',
                      height: 'auto',
                      backgroundImage: `url(${post.imageUrl})`,
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      height: 300,
                      borderRadius: 1,
                    }}
                  />
                  
                  <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
                    {post.title}
                  </Typography>

                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {post.content}
                  </Typography>

                  {/* Fecha y hora de la publicación */}
                  <Typography variant="body2" color="textSecondary">
                    Publicado el: {post.date}
                  </Typography>

                  {/* Sección de comentarios */}
                  <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                    <TextField
                      label="Agregar un comentario"
                      variant="outlined"
                      fullWidth
                      size="small"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                    <Button variant="contained" color="primary" onClick={() => addComment(post.id, comment)}>
                      Comentar
                    </Button>
                  </Box>

                  {/* Sección de compartir */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <IconButton onClick={() => sharePost(post.id)}>
                        <ShareIcon /> {/* Usando el ícono personalizado */}
                      </IconButton>
                      <Typography variant="body2">{post.shared} compartidos</Typography>
                    </Box>
                  </Box>

                  {/* Visualización de los comentarios */}
                  <Box sx={{ mt: 3 }}>
                    <Typography variant="h6">Comentarios</Typography>
                    <Box sx={{ mt: 2 }}>
                      {post.comments.length > 0 ? (
                        post.comments.map((comment, index) => (
                          <Paper key={index} sx={{ p: 1, mb: 1 }}>
                            <Typography variant="body2">{comment}</Typography>
                          </Paper>
                        ))
                      ) : (
                        <Typography variant="body2" color="textSecondary">No hay comentarios aún.</Typography>
                      )}
                    </Box>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Grid>
        </Grid>
      </DashboardCard>
    </PageContainer>
  );
};

export default Publicaciones;
