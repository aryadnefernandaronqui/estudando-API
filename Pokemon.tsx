import { Box, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Listar } from '../Services/Pokemon.service';

interface Pokemon {
  name: string;
}

const Pokemon: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function preencherPokemons() {
      const listaPokemons = await Listar();
      console.log(listaPokemons);

      setPokemons(listaPokemons);
    }
    preencherPokemons();
  }, []);

  return (
    <Box>
      <Grid container>
        <Grid item>
          {pokemons.map((pokemon, index) => {
            return <Typography key={index}>{pokemon.name}</Typography>;
          })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pokemon;
