import styled from 'styled-components';
// import { css } from 'style-components';

export const WrapperStyle = styled.div`
background-image: linear-gradient(to right, rgba(84, 73, 210, 1) 5%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(to left, rgba(84, 73, 210, 1) 5%, rgba(255, 255, 255, 0.1) 100%);
height: 100vh;
max-height: 100%;
`;

export const GridContainerStyle = styled.div`
display: grid;
grid-template-areas:
  "brand nav"
  "content content"
  "social social";
grid-template-columns: 8fr 2fr;
margin: 0 auto;
max-width: 1600px;
@media (min-width: 800px) {
  padding: ${90/16}rem ${160/16}rem;
}
`;

export const H1Style = styled.h1`
font-size: 32px;
font-weight: 800;
line-height: 56px;
margin: 0;
padding: 0;
`;

export const H2Style = styled.h2`
font-size: 16px;
font-weight: 300;
line-height: 27px;
margin: 0;
padding: 0;
`

export const PStyle = styled.p`
font-size: 18px;
font-weight: 500;
grid-area: content;
line-height: 44px;
margin: 0 auto;
max-width: 640px;
width: 100%;
`;

export const BrandStyle = styled.section`
grid-area: brand;
width: 100%;
`;

export const NavStyle = styled.div`
grid-area: nav;
`;
