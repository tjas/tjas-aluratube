import styled from "styled-components"

import { BsSunFill } from 'react-icons/bs'; /* https://react-icons.github.io/react-icons */

const StyledTheme = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.borderBase};
  border-radius: 5px;
  overflow: hidden;
  button {
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.borderBase};
    padding: 10px 16px;
    border: none;
    outline: none;
    font-size: 15px;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
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