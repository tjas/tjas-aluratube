import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`

	/* CSS Variables */
	:root {
		/* Light Mode */
		--light-backgroundBase: #F9F9F9;
		--light-backgroundLevel1: #FFFFFF;
		--light-backgroundLevel2: #F0F0F0;
		--light-borderBase: #E5E5E5;
		--light-textColorBase: #222222;

		/* Dark Mode */
		--dark-backgroundBase: #181818;
		--dark-backgroundLevel1: #202020;
		--dark-backgroundLevel2: #313131;
		--dark-borderBase: #383838;
		--dark-textColorBase: #FFFFFF;
	}

	/* Reset */
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	body {
		font-family: sans-serif;
	}
	h1 {
		padding-bottom: 16px;
		font-size: 28px;
		justify-content: center;
		text-transform: capitalize;
		margin: 16px 16px;
		border-bottom: 1px solid #eeeeee;
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
	
	body ::-webkit-scrollbar { 
		width: 8px;               		/* width of the entire scrollbar */
		height: 8px;					/* height of the entire scrollbar */
	}
	body ::-webkit-scrollbar-track {
		background: #ffffff;        	/* color of the tracking area */
	}
	body ::-webkit-scrollbar-thumb {
		background-color: #dddddd;  	/* color of the scroll thumb */
		border-radius: 8px;         	/* roundness of the scroll thumb */
	}
`;
