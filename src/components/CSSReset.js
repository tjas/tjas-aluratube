import { createGlobalStyle } from "styled-components";

// Reference to themes: 
// https://css-tricks.com/easy-dark-mode-and-multiple-color-themes-in-react/

export const CSSReset = createGlobalStyle`

	/* CSS Variables */
	/* :root {
		//Default Theme
		--backgroundBase: #F9F9F9;
		--backgroundLevel1: #FFFFFF;
		--backgroundLevel2: #F0F0F0;
		--borderBase: #E5E5E5;
		--textColorBase: #222222;
		--textColorLevel1: #555555;
		--textColorLevel2: #888888;
	}
	[data-theme='light'] {
		//Light Theme
		--backgroundBase: #F9F9F9;
		--backgroundLevel1: #FFFFFF;
		--backgroundLevel2: #F0F0F0;
		--borderBase: #E5E5E5;
		--textColorBase: #222222;
		--textColorLevel1: #555555;
		--textColorLevel2: #888888;
	}
	[data-theme='dark'] {
		//Dark Theme
		--backgroundBase: #181818;
		--backgroundLevel1: #202020;
		--backgroundLevel2: #313131;
		--borderBase: #383838;
		--textColorBase: #FFFFFF;
		--textColorLevel1: #CCCCCC;
		--textColorLevel2: #999999;
	} */

	/* Reset */
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	body {
		font-family: sans-serif;
		background-color: ${({ theme }) => theme.backgroundBase};
    	color: ${({ theme }) => theme.textColorBase};
	}
	h1 {
		padding-bottom: 16px;
		font-size: 28px;
		justify-content: center;
		text-transform: capitalize;
		margin: 16px 16px;
		border-bottom: 1px solid ${({ theme }) => theme.borderBase};
		svg {
			font-size: 80%;
		}
	}
	/* NextJS */
	html {
		display: flex;
		flex-direction: column;
		min-height: 100%;
	}
	body {
		display: flex;
		flex: 1;
	}
	#__next {
		display: flex;
		flex: 1;
	}
	/* Globals */
	button,
	a {
		text-decoration: none;
		opacity: 1;
		transition: .3s;
		&:hover,
		&:focus {
			opacity: .5;
		}
	}
	
	/* Scrollbars */
	body ::-webkit-scrollbar { 
		width: 8px;               	/* width of the entire scrollbar */
		height: 8px;				/* height of the entire scrollbar */
	}
	body ::-webkit-scrollbar-track {
		background: ${({ theme }) => theme.backgroundBase};			/* color of the tracking area */
	}
	body ::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.backgroundLevel2};  /* color of the scroll thumb */
		border-radius: 8px;         								/* roundness of the scroll thumb */
	}

	/* Placeholders */
	::placeholder { 												/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: ${({ theme }) => theme.textColorLevel2};
		opacity: 1; 												/* Firefox */
	}
	:-ms-input-placeholder { 										/* Internet Explorer 10-11 */
		color: ${({ theme }) => theme.textColorLevel2};
	}
	::-ms-input-placeholder { 										/* Microsoft Edge */
		color: ${({ theme }) => theme.textColorLevel2};
	}
`;
