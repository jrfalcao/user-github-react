import React, { useEffect, useState } from "react";
import * as S from './styled';

export default function Repositories() {
	const [repositories, setRepositories] = useState([]);
	useEffect(() => {
		const repositoriesName = JSON.parse(localStorage.getItem('repositoriesName'));
		setRepositories(repositoriesName);
		localStorage.clear();
	}, []);

	return (
		<S.Container>
			<S.Title>Repositories</S.Title>
			<S.List>
				{
					repositories.map(repository => {
						return (
							<S.ListItem>Repositorio: {repository}</S.ListItem>
						);
					})
				}
			</S.List>
		</S.Container>
	);
}
