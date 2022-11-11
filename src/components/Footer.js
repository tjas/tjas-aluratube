import config from "/config.json";
import styled from "styled-components";

import { BsGlobe, BsFillCaretDownFill } from 'react-icons/bs'; /* https://react-icons.github.io/react-icons */

const StyledFooter = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
    margin-top: 16px;
    border-top: 1px solid #eeeeee;
    padding: 28px 32px;
    div {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        gap: 16px;
        div {
            display: flex;
            align-items: center;
            font-size: 13px;
            color: #777777;
            a {
                color: inherit;
                cursor: pointer;
            }
        }
    }
    .localization {
        border: 1px solid #eeeeee;
        padding: 6px;
        gap: 4px;
    }
    .icon {
        color: #888888;
        font-size: 10px;
    }
    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

export function Footer() {
    return (
      <StyledFooter>
        <div>
            <div className="left">
                <a>About</a>
                <a href={`https://www.alura.com.br/`} target="_blank">Alura</a>
                <a href={`mailto:thiago.tjas@gmail.com`}>Contact</a>
                <a>Privacy Policy</a>
                <a>Service Terms</a>
            </div>
            <div className="right">
                <BsGlobe style={{color: "#888888"}} />
                {/* Language: */}
                <a> 
                    <div className="localization">
                        EN
                        <span className="icon"><BsFillCaretDownFill /></span>
                    </div>
                </a>
            </div>
        </div>
        <div>
            <div>
                © {new Date().getFullYear()} Thiago Jorge Almeida dos Santos.
                This project is an adaptation of the project created at the Alura's 5th React Immersion, november 2022. 
                Alura and AluraTube are trademarks of AOVS Sistemas de Informática S.A., all rights reserved. 
            </div>
        </div>
      </StyledFooter>
    );
  }