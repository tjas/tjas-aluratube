import styled from "styled-components";

import { BsStar } from 'react-icons/bs'; /* https://react-icons.github.io/react-icons */

const StyledFavorites = styled.section`
	width: 100%;
	padding: 16px;
	overflow: hidden;
	h2 {
		font-size: 18px;
		margin-bottom: 16px;
		text-transform: capitalize;
	}
	img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 1px solid var(--borderBase);
	}
	section {
        width: calc(100vw - 16px * 4);
        display: grid;
        padding-bottom: 16px;
        grid-gap: 16px;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        grid-auto-flow: column;
        grid-auto-columns: minmax(120px, 1fr);
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        div {
            padding: 16px;
            text-align: center;
            a {
                scroll-snap-align: start;
                font-size: 15px;
                span {
                    padding-top: 8px;
                    display: flex;
                    text-align: center;
                    color: var(--textColorBase);
                }
            }
        }
        @media (max-width: 750px) {
            width: calc(100vw + 16px);
        }
	}
`;

export function Favorites(properties) {
  const favorites = Object.keys(properties.favorites);
  // Statement
  // Retorno por expressão
  return (
    <StyledFavorites data-theme={properties.theme}>
        <h1><BsStar /> Favorites</h1>
        <section>
        {favorites.map((index) => {
            const favorite = properties.favorites[index];
            return (
                <div key={index} nameclass="favorite">
                    <a href={favorite.url} target="_blank">
                        <img src={favorite.thumb} />
                        <span>{favorite.name}</span>
                    </a>
                </div>
            );
        })}
        </section>
    </StyledFavorites>
  );
}
