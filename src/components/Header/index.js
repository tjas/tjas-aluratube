import styled from "styled-components";

import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs'; /* https://react-icons.github.io/react-icons */

const StyledHeader = styled.div`
    /* background-color: ${({ theme }) => theme.backgroundLevel1}; */
    /* border-bottom: 1px solid ${({ theme }) => theme.borderBase}; */
    height: 140px;
    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: solid 10px ${({ theme }) => theme.backgroundBase};
    }
    a {
        color: ${({ theme }) => theme.textColorBase};
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
            color: ${({ theme }) => theme.textColorLevel2};
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
                    <div className="user-avatar">
                        <img src={`https://github.com/${properties.user.social.github}.png`} />
                    </div>
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