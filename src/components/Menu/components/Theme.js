import styled from "styled-components"

import { BsSunFill } from 'react-icons/bs'; /* https://react-icons.github.io/react-icons */

const StyledTheme = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--borderBase);
  border-radius: 5px;
  overflow: hidden;
  button {
    cursor: pointer;
    border: 1px solid var(--borderBase);
    padding: 10px 16px;
    border: none;
    outline: none;
    font-size: 15px;
    color: var(--textColorBase);
    background-color: var(--backgroundBase);
    }
`;

// Home 
// Menu
// Theme
// Information flows top-down

export default function Theme({ theme, switchTheme }) {
    return (
        <StyledTheme data-theme={theme}>
            <button onClick={switchTheme}>
            {theme === 'light' ? '🌞 Light Theme' : '🌛 Dark Theme'}
            </button>
        </StyledTheme>
    )
}