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
		border: 1px solid #eeeeee;
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
					color: ${({ theme }) => theme.textColorBase || "#222222"};
				}
			}
			@media (max-width: 750px) {
				width: calc(100vw + 16px);
			}
		}
	}
`;

export function Timeline(properties) {
	const playlistNames = Object.keys(properties.playlists);
	// Statement
	// Retorno por expressão
	return (
		<StyledTimeline>
			<h1 nameClass="title"><BsListNested /> Timeline</h1>
			{playlistNames.map((playlistName) => {
				const videos = properties.playlists[playlistName];
				return (
					<section>
						<h2> {playlistName} </h2>
						<div>
							{videos.map((video) => {
								return (
									<a href={video.url} target="_blank">
										<img src={video.thumb} />
										<span> {video.title} </span>
									</a>
								);
							})}
						</div>
					</section>
				);
			})}
		</StyledTimeline>
	);
}
