import { Box, Button, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

const ViaCep: React.FC = () => {
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [localidade, setLocalicade] = useState('');
  const [uf, setUf] = useState('');
  const [ibge, setIbge] = useState('');

  const handleCancel = () => {
    setCep('');
  };

  const handleSubmit = async () => {
    try {
      if (!cep) {
        alert('CEP não encontrado');
      }
      const response = await axios.get('https://viacep.com.br/ws/' + cep + '/json/');
      const responseJson = response.data;
      setLogradouro(responseJson.logradouro);
      setComplemento(responseJson.complemento);
      setBairro(responseJson.bairro);
      setLocalicade(responseJson.localidade);
      setUf(responseJson.uf);
      setIbge(responseJson.ibge);
      console.log(responseJson);
    } catch (error) {
      alert('Tente outro CEP');
    }
  };

  return (
    <Box marginTop={10}>
      <Grid container display="flex" flexDirection="column">
        <Grid item marginLeft={4}>
          <TextField
            id="outlined-basic"
            label="Digite o CEP"
            variant="outlined"
            value={cep}
            onChange={ev => setCep(ev.target.value)}
          />
        </Grid>
        <Stack direction="row" spacing={2} margin={4}>
          <Button variant="outlined" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Pesquisar
          </Button>
        </Stack>
      </Grid>

      <Card>
        <CardContent>
          <Typography>{cep}</Typography>
          <Typography>{logradouro}</Typography>
          <Typography>{complemento}</Typography>
          <Typography>{bairro}</Typography>
          <Typography>{localidade}</Typography>
          <Typography>{uf}</Typography>
          <Typography>{ibge}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ViaCep;
