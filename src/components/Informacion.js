import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import PageContainer from './PageContainer';
import DashboardCard from './DashboardCard';

const emergencySituations = [
  {
    title: 'Asaltos y robos en la vía pública',
    instructions: '1. Mantén la calma y no pongas resistencia.\n2. Memoriza características del asaltante (altura, ropa, etc.).\n3. Llama a la policía al salir del peligro.\n4. Si es posible, solicita ayuda de personas cercanas.',
    bgColor: '#f8d7da',
  },
  {
    title: 'Accidente vehicular',
    instructions: '1. Verifica si hay heridos y si hay riesgo inmediato (fugas de combustible, etc.).\n2. Llama a los servicios de emergencia.\n3. Señaliza el accidente y mantén la distancia.\n4. No muevas a los heridos a menos que sea absolutamente necesario.',
    bgColor: '#fff3e0',
  },
  {
    title: 'Violencia o secuestro',
    instructions: '1. Busca refugio seguro si es posible.\n2. Llama a las autoridades cuando sea seguro hacerlo.\n3. Si estás secuestrado, coopera, mantén la calma y busca oportunidades para pedir ayuda de manera segura.',
    bgColor: '#e3f2fd',
  },
  {
    title: 'Incendio',
    instructions: '1. Evacua el lugar inmediatamente.\n2. Usa rutas de escape seguras y evita usar el ascensor.\n3. Si el fuego es pequeño, intenta apagarlo con un extintor.\n4. Llama a los bomberos al salir del edificio.',
    bgColor: '#ffebee',
  },
  {
    title: 'Desorden Público',
    instructions: '1. Evita participar o confrontar a quienes estén causando desorden.\n2. Busca refugio o aleja del lugar.\n3. Mantén la calma y alerta.\n4. Notifica a las autoridades sobre el incidente.',
    bgColor: '#e8eaf6',
  },
];
const Shadow = () => {
  return (
    <PageContainer title="Información" description="Guía para situaciones de emergencia">
      <DashboardCard>
        {/* Contenedor principal con padding */}
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: 3 }}>
          <Typography variant="h4" paragraph sx={{ fontWeight: 'bold', mb: 3 }}>
            En caso de emergencia, sigue estas instrucciones:
          </Typography>

          {/* Grid para mostrar las situaciones de emergencia */}
          <Grid container spacing={3}>
            {emergencySituations.map((situation, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                {/* Cuadro informativo con fondo dinámico */}
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    boxShadow: 3,
                    borderRadius: 2,
                    backgroundColor: situation.bgColor, // Color de fondo personalizado
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)', // Efecto hover para resaltar
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {situation.title}
                  </Typography>
                  <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                    {situation.instructions}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default Shadow;