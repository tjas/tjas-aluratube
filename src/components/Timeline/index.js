import styled from "styled-components";

import { BsListNested } from 'react-icons/bs'; /* https://react-icons.github.io/react-icons */

const StyledTimeline = styled.section`
	flex: 1;
	width: 100%;
	padding: 16px;
	overflow: hidden;
	h2 {
		font-size: 18px;
		margin-bottom: 16px;
		text-transform: capitalize;
	}
	img {
		aspect-ratio: 16/9;
		font-weight: 500;
		object-fit: cover;
		width: 100%;
		max-width: 210px;
		height: auto;
		border: 1px solid var(--borderBase);
	}
	section {
		width: 100%;
		padding: 0;
		overflow: hidden;
		padding: 16px;		
		div {
			width: calc(100vw - 16px * 4);
			display: grid;
			padding-bottom: 16px;
			grid-gap: 16px;
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
			grid-auto-flow: column;
			grid-auto-columns: minmax(200px, 1fr);
			overflow-x: scroll;
			scroll-snap-type: x mandatory;
			a {
				scroll-snap-align: start;
				font-size: 15px;
				span {
					padding-top: 8px;
					display: block;
					padding-right: 24px;
					color: var(--textColorBase);
				}
			}
			@media (max-width: 750px) {
				width: calc(100vw + 16px);
			}
		}
	}
`;

export function Timeline({ searchValue, ...properties }) {
	const playlistNames = Object.keys(properties.playlists);
	// Statement
	// Retorno por expressão
	return (
		<StyledTimeline data-theme={properties.theme}>
			<h1 nameClass="title"><BsListNested /> Timeline</h1>
			{playlistNames.map((playlistName) => {
				const videos = properties.playlists[playlistName];
				return (
					<section key={playlistName}>
						<h2> {playlistName} </h2>
						<div>
							{videos
								.filter((video) => {
                                    const titleNormalized = video.title.toLowerCase();
                                    const searchValueNormalized = searchValue.toLowerCase();
                                    return titleNormalized.includes(searchValueNormalized)
                                })
								.map((video) => {
									return (
										<a key={video.url} href={video.url} target="_blank">
											<img src={video.thumb} />
											<span> {video.title} </span>
										</a>
									);
								})
							}
						</div>
					</section>
				);
			})}
		</StyledTimeline>
	);
}
