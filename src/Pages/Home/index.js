import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import * as S from './styled';

function Home(props) {
  const history = useHistory();
  const [ usuario, setUsuario ] = useState('');
  
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then( res => {
      const repositories = res.data;
      const repositoriesName = [];
      repositories.map(repository => repositoriesName.push(repository.name));
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      history.push('/repositories');
    });
  }

  return (
    <S.Container>
      <S.Input className="usuario" value={usuario} placeholder="Usuario" onChange={ e => setUsuario(e.target.value)} />
      <S.Button type="button" onClick={handlePesquisa}>pesquisar</S.Button>
    </S.Container>
  );
}

export default Home;
