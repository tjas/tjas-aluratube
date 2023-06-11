import React from "react";
import styled from "styled-components";

import { BsListNested } from 'react-icons/bs'; /* https://react-icons.github.io/react-icons */

import VideoPlayerModal, { usePlayer, initial } from "../Player";

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
		border: 1px solid ${({ theme }) => theme.borderBase};
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
				cursor: pointer;
				scroll-snap-align: start;
				font-size: 15px;
				span {
					padding-top: 8px;
					display: block;
					padding-right: 24px;
					color: ${({ theme }) => theme.textColorBase};
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
	const [playerVisivel, setPlayerVisivel] = React.useState(false);
	const [selectedVideo, setSelectedVideo] =  React.useState(initial.initialValues);

	//const player = usePlayer({...initial.initialValues});

    function toggleModal(e) {
        setPlayerVisivel(!playerVisivel);
    }

	React.useEffect(() => {
      //setPlayerVisivel(!playerVisivel);
	  console.log("SelcectedVideo (Timeline):", selectedVideo);
	  toggleModal();
    }, [selectedVideo]);

	//React.useEffect(() => {
    //   //setPlayerVisivel(!playerVisivel);
    //}, [playerVisivel]);

	// Statement
	// Retorno por expressão
	return (
		<StyledTimeline>
			<h1 nameclass="title"><BsListNested /> Timeline</h1>
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
										//<a key={video.url} href={video.url} target="_blank">
										<a key={video.url}
											onClick={() => {
												//console.log("SelectedVideo:", video);
												setSelectedVideo({isOpen: true, ...video});
												toggleModal();
												//toggleModal();
											}}>
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
			{
				playerVisivel ?
				
				<VideoPlayerModal 
					//isOpen={playerVisivel} 
					video={{...selectedVideo}}
					onEscapeKeydown={() => toggleModal()}
            		onBackgroundClick={() => toggleModal()}
				/>
			
				: false
			}
		</StyledTimeline>
	);
}
