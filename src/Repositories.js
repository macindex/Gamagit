import React, { useEffect, useState } from 'react';
import * as S from './styled';

export default function Repositories(){
    const [ repositories, setRepositories ] = useState ([]);
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        repositoriesName = JSON.parse(repositoriesName);
        setRepositories(repositoriesName);
        localStorage.clear();
    }, []);

    return(
        <S.Container>
        <S.Title>Repositories</S.Title>
            <S.List>
                { repositories.map(repository => {
                    return(
                    <S.ListItem>Repositorio: { repository }</S.ListItem>
                    )
                }) }
                
            </S.List>
        </S.Container>

    )
}
/*<S.ListItem>Repositório: Nome repositório 01</S.ListItem>
<S.ListItem>Repositório: Nome repositório 02</S.ListItem>
<S.ListItem>Repositório: Nome repositório 03</S.ListItem>
<S.ListItem>Repositório: Nome repositório 04</S.ListItem>
<S.ListItem>Repositório: Nome repositório 05</S.ListItem>
<S.ListItem>Repositório: Nome repositório 06</S.ListItem>
<S.ListItem>Repositório: Nome repositório 07</S.ListItem>
<S.ListItem>Repositório: Nome repositório 08</S.ListItem>
<S.ListItem>Repositório: Nome repositório 09</S.ListItem>
<S.ListItem>Repositório: Nome repositório 10</S.ListItem>*/