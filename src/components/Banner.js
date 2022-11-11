import styled from "styled-components";

const StyledBanner = styled.header`
  .crop {
    height: 25vh;
    margin-top: 56px;
    gap: 16px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
`;

export function Banner(properties) {
  return (
    <StyledBanner>
      <div className="crop">
        <img src={`${properties.user.banner}`} />
      </div>
    </StyledBanner>
  );
}
