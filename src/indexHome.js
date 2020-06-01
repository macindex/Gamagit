import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styledHome';
import { useHistory } from 'react-router-dom';

function App(props) {
  const history = useHistory();
  const [ usuario, setUsuario ] = useState('');

function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      /*repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });*/
      repositories.map(repository => repositoriesName.push(repository.name));
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      history.push('repositories');
    });
  }
  return (
    <S.HomeContainer>
    <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
    <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
    </S.HomeContainer>
  );
}

export default App;
//estado useState retorna array [estado, funcao] ex [usuario, setUsuario]