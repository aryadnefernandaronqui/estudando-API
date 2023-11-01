import { Button, Card, CardContent, Grid, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { apiListaTeste } from '../Services/Api';

const ListaAPI: React.FC = () => {
  const [name, setName] = useState('');
  const [ddd, setDDD] = useState('');
  const [peopleList, setPeopleList] = useState([]);
  const [message, setMessage] = useState('');

  const handleCancel = () => {
    setName('');
    setDDD('');
    setPeopleList([]);
  };

  const handleSubmit = async () => {
    try {
      const response = await apiListaTeste.get(`people?name=${name}&&ddd=${ddd}`);
      const responseJson = response.data;
      console.log(responseJson);
      setPeopleList(responseJson);

      if (responseJson.length === 0) {
        setMessage('Nenhuma pessoa encontrada com esse nome e DDD.');
      } else {
        setPeopleList(responseJson);
        setMessage('');
      }
    } catch (error) {
      if (error.response.status === 404) {
        setMessage('Recurso não encontrado. Verifique o URL e os parâmetros da solicitação.');
      } else {
        setMessage('Erro ao obter dados. Tente novamente mais tarde.');
      }
    }
  };

  return (
    <Box>
      <Grid container spacing={2} margin={2}>
        <Grid item>
          <TextField
            id="outlined-basic"
            label="Digite um Nome"
            variant="outlined"
            value={name}
            onChange={ev => setName(ev.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-basic"
            label="Digite um DDD"
            variant="outlined"
            value={ddd}
            onChange={ev => setDDD(ev.target.value)}
          />
        </Grid>
      </Grid>
      <Stack direction="row" spacing={2} margin={4}>
        <Button variant="outlined" onClick={handleCancel}>
          Cancelar
        </Button>
        <Button variant="contained" onClick={handleSubmit}>
          Pesquisar
        </Button>
      </Stack>
      <div>
        {peopleList.length > 0 && (
          <List>
            {peopleList.map(p => (
              <ListItem key={p.id}>
                <Card>
                  {/* <CardMedia sx={{ height: 280, width: 280 }} image={p.avatar} /> */}
                  <CardContent>
                    <Typography>{p.name}</Typography>
                    <ListItemText>{`phone:${p.phone}`}</ListItemText>
                  </CardContent>
                </Card>
              </ListItem>
            ))}
          </List>
        )}
      </div>
    </Box>
  );
};

export default ListaAPI;
