import config from "../config.json";
import styled from "styled-components";

import { CSSReset } from "../src/components/CSSReset";

import { Menu } from "../src/components/Menu";
import { Header } from "../src/components/Header";
import { Timeline } from "../src/components/Timeline";
import { Banner } from "../src/components/Banner";
import { Favorites } from "../src/components/Favorites";
import { Footer } from "../src/components/Footer";

function HomePage() {
    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>

                <StyledHeader>
                    <Menu />
                    <Banner user={config.user} />
                    <Header user={config.user} />
                </StyledHeader>

                <StyledContent>
                    <Timeline playlists={config.playlists} />
                    <Favorites favorites={config.favorites} />
                </StyledContent>

                <StyledFooter>
                    <Footer />
                </StyledFooter>
                
            </div>
        </>
    );
}

export default HomePage;

const StyledHeader = styled.section`

`;

const StyledContent = styled.section`
    translate: 0 -50px;
`;

const StyledFooter = styled.section`
    translate: 0 -50px;
    height: 80px;
`;
