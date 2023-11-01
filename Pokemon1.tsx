import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { apiPokemon } from '../Services/ApiPokemon';

const Pokemon1: React.FC = () => {
  const [pokemon, setPokemon] = useState('');
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonType, setPokemonType] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await apiPokemon.get('/api/v2/pokemon/' + pokemon);
      const data = response.data;
      setPokemon(data);
      setPokemonName(data.species.name);
      setPokemonType(data.types.weight);
      console.log(data);
    } catch (error) {
      alert('tente outra vez');
    }
  };

  const handleCancel = () => {
    setPokemon('');
  };

  return (
    <Box>
      <Grid container spacing={5} margin={5}>
        <Grid item>
          <TextField
            label="Digite o nome do Pokemon"
            value={pokemon}
            onChange={e => setPokemon(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item>
          <Stack direction="row" spacing={2} margin={2}>
            <Button variant="outlined" onClick={handleCancel}>
              Cancelar
            </Button>
            <Button variant="contained" onClick={handleSubmit}>
              Pesquisar
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <Typography>{pokemonName}</Typography>
          <Typography>{pokemonType}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Pokemon1;
