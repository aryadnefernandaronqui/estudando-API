import { Box, Button, CardMedia, Grid, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

const Git: React.FC = () => {
  const [user, setUser] = useState('');
  const [userName, setUserName] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.get('https://api.github.com/users/' + user);
      const responseJson = response.data;
      setUserName(responseJson.name);
      setBio(responseJson.bio);
      setImage(responseJson.avatar_url);
    } catch (error) {
      alert('Tente outro usuário');
    }
  };

  return (
    <Box>
      <Grid container margin={5}>
        <Grid item>
          <TextField label="Nome do Usuário" value={user} onChange={ev => setUser(ev.target.value)} />
        </Grid>
        <Grid item>
          <Stack>
            <Button variant="outlined">Cancelar</Button>
            <Button variant="contained" onClick={handleSubmit}>
              Pesquisar
            </Button>
          </Stack>
        </Grid>
        <Grid item>
          <Typography>{userName}</Typography>
          <Typography>{bio}</Typography>
          <CardMedia component="img" height="194" image={image}></CardMedia>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Git;
