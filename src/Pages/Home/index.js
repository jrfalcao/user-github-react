import React, {useState} from 'react';
import axios from 'axios';

import * as S from './styled';

function Home(props) {
  const [ usuario, setUsuario ] = useState('');
  
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then( res => console.log(res.data));
  }

  return (
    <S.Container>
      <S.Input className="usuario" value={usuario} placeholder="Usuario" onChange={ e => setUsuario(e.target.value)} />
      <S.Button type="button" onClick={handlePesquisa}>pesquisar</S.Button>
    </S.Container>
  );
}

export default Home;
