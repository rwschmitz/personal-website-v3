import styled from 'styled-components';

export const SkipToContent = styled.a`
  border: 0;
  clip: rect(0 0 0 0);
  display: block;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 1rem 0;
  position: absolute;
  text-align: center;
  white-space: nowrap;
  width: 1px;
  &:active,
  &:focus {
    box-shadow: 0px 0px 4px 2px rgba(51, 51, 51, 0.5);
    clip: auto;
    font-size: 32px;
    height: auto;
    margin: 0;
    opacity: 1;
    outline: none;
    overflow: visible;
    position: static;
    text-decoration-line: underline;
    white-space: normal;
    width: 100%;
  }
`;

export const WrapperStyle = styled.div`
background-image: linear-gradient(to right, rgba(84, 73, 210, 1) 5%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(to left, rgba(84, 73, 210, 1) 5%, rgba(255, 255, 255, 0.1) 100%);
height: 100%;
max-height: 100%;
`;

export const GridContainerStyle = styled.div`
display: grid;
grid-gap: 1rem;
grid-template-areas:
  "brand burger"
  "content content"
  "social social";
grid-template-columns: auto 1fr;
height: auto;
margin: 0 auto;
max-width: 1600px;
padding: 1rem;
@media (min-width: 800px) {
  grid-template-areas:
    "brand brand"
    "content nav"
    "social social";
  padding: ${90/16}rem ${160/16}rem;
}
`;

export const ContainerStyle = styled.main`
  display: block;
  padding-bottom: 2rem;
`
export const H1Style = styled.h1`
font-size: 24px;
font-weight: 800;
margin: 0;
padding: 0 0 0.5rem 0;
width: auto;
@media (min-width: 800px) {
  font-size: 32px;
}
`;

export const H2Style = styled.h2`
font-size: 16px;
font-weight: 300;
margin: 0;
padding: 0;
width: auto;
`

export const PStyle = styled.div`
font-size: 18px;
font-weight: 500;
grid-area: content;
margin: 0 auto;
max-width: 640px;
width: 100%;
`;

export const BrandStyle = styled.section`
grid-area: brand;
padding-bottom: 2rem;
width: 100%;
`;

export const NavStyle = styled.div`
display: none;
@media (min-width: 800px) {
  grid-area: nav;
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
}
`;

export const BurgerContainerStyle = styled.button`
align-self: flex-start;
background-color: transparent;
border: none;
cursor: pointer;
display: flex;
flex-wrap: wrap;
grid-area: burger;
height: 20px;
margin: 0.45rem auto 0 auto;
max-height: 20px;
max-width: 30px;
padding: 0;
width: 30px;
`;

export const BurgerLineStyle = styled.span`
background: #fff;
border-radius: 2.5px;
display: block;
height: 3px;
margin-bottom: calc( (20px - (3 * 3px)) / (2) );
width: 100%;
&:last-child {
  margin-bottom: 0;
}
`;

export const SocialStyle = styled.ul`
align-items: center;
display: flex;
flex-direction: column;
grid-area: social;
justify-content: space-between;
list-style-type: none;
padding: 0;
margin: 0;
  li {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
    a {
      color: #333;
      opacity: 0.33;
      transition: color 300ms ease, opacity 300ms ease;
      &:hover {
        color: #fff;
        opacity: 1;
      }
    }
  }
`;
