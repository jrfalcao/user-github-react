import React from "react";
import * as S from './styled';

export default function Repositories() {
    return (
        <S.Container>
            <S.Title>Repositories</S.Title>
            <S.List>
                <S.ListItem>Repositório X</S.ListItem>
                <S.ListItem>Repositório XX</S.ListItem>
                <S.ListItem>Repositório XXXX</S.ListItem>
            </S.List>
        </S.Container>
    );
}
