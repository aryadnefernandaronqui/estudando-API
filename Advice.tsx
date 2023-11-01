import { Box, Button, Grid } from '@mui/material';
import { useState } from 'react';
import { adviceApi } from '../Services/ApiAdvice';

const Advice: React.FC = () => {
  const [advice, setAdvice] = useState('');

  const handleSubmit = async () => {
    const response = await adviceApi.get('/advice');
    const data = response.data;
    setAdvice(data.advice);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item margin={5}>
          <Button variant="contained" onClick={handleSubmit}>
            Peça um Conselho
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Advice;
