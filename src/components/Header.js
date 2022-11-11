//import config from "../config.json";
import styled from "styled-components";

import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs'; /* https://react-icons.github.io/react-icons */

const StyledHeader = styled.div`
    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: solid 10px #ffffff;
    }
    a {
        color: #555555;
    }
    .user {
        translate: 0 -50px;
        margin-top: 12px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
        @media (max-width: 750px) {
            translate: 0 -40px;
        }
    }
    .user-details {
        display: flex;
        align-items: center;
        width: 100%;
        gap: 16px;
        p {
            color: #777777;
            margin-top: 6px;
        }
    }
    .user-options {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 0 16px;
        div {
            font-size: 22px;
        }
    }
`;

export function Header(properties) {
    return (
        <StyledHeader>
            <section className="user">
                <div className="user-details">
                    <img  className="user-avatar" src={`https://github.com/${properties.user.social.github}.png`} />
                    <div  className="user-infos">
                        <h2>{properties.user.name}</h2>
                        <p>{properties.user.local}</p>
                        <p>{properties.user.job}</p>
                    </div>
                </div>
                <div className="user-options">
                    <div>
                        <a href={`https://www.linkedin.com/in/${properties.user.social.linkedin}/`} target="_blank">
                            <BsLinkedin />
                        </a>
                    </div>
                    <div>
                        <a href={`https://www.instagram.com/${properties.user.social.instagram}/`} target="_blank">
                            <BsInstagram />
                        </a>
                    </div>
                    <div>
                        <a href={`https://github.com/${properties.user.social.github}`} target="_blank">
                            <BsGithub />
                        </a>
                    </div>
                </div>
            </section>
        </StyledHeader>
    );
}