import React from 'react';
import ListaAPI from '../components/ListaAPI';
import ViaCep from '../components/ViaCep';
import DefaultLayout from '../config/layout/DefaultLayout';

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <ListaAPI></ListaAPI>
      <ViaCep></ViaCep>
    </DefaultLayout>
  );
};

export default Home;
