//listar 

import { apiPokemon } from "./ApiPokemon";

export async function Listar(){

    try {
       const resposta = await apiPokemon.get('/api/v2/pokemon/')
       return resposta.data.results
        
    } catch (error) {
        return []
    }

}

//cadastrar

function Cadastrar(){

}

//atualizar

function Atualizar(){

}

//excluir

function Excluir(){

}