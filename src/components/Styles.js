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

export const GridContainerStyle = styled.div`
display: grid;
grid-template-areas:
"brand burger"
"content content"
"social social";
grid-template-columns: 8fr minmax(auto, 1fr);
height: auto;
margin: 0 auto;
max-width: 1600px;
row-gap: 1rem;
padding: 1rem;
position: relative;
@media (min-width: 1120px) {
  column-gap: 4rem;
  grid-template-areas:
    "brand brand"
    "content nav"
    "social social";
    grid-template-columns: 4fr minmax(auto, 1fr);
  padding: ${90/16}rem ${160/16}rem;
}
@media (min-width: 1280px) {
  column-gap: 1rem;
  grid-template-columns: 8fr minmax(auto, 1fr);
}
`;

export const ContainerStyle = styled.main`
  display: block;
  grid-column: 1 / -1;
  padding-bottom: 2rem;
  position: relative;
  z-index: 1;
@media (min-width: 1120px) {
  grid-column: auto;
}
`
export const H1Style = styled.h1`
font-size: 24px;
font-weight: 800;
margin: 0;
padding: 0 0 0.5rem 0;
width: auto;
@media (min-width: 1120px) {
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
font-weight: 300;
grid-area: content;
line-height: 1.75;
margin: 0 auto;
max-width: 640px;
width: 100%;
 p {
   margin: 0;
   padding: 2rem 0;
 }
`;

export const BrandStyle = styled.section`
background: ${props => props.brandTopStyles.background};
border-bottom-left-radius: ${props => props.brandTopStyles.borderBottomRadii};
grid-area: brand;
left: ${props => props.brandTopStyles.left};
max-width: 1600px;
padding-bottom: 1rem;
padding-left: ${props => props.brandTopStyles.paddingLeft};
padding-right: ${props => props.brandTopStyles.paddingRight};
padding-top: ${props => props.brandTopStyles.paddingTop};
position: ${props => props.brandTopStyles.position};
top: ${props => props.brandTopStyles.top};
transform: ${props => props.brandTopStyles.transform};
width: 100%;
z-index: ${props => props.brandTopStyles.zIndex};
@media (min-width: 1120px) {
  border-bottom-right-radius: ${props => props.brandTopStyles.borderBottomRadii};
}
`;

export const NavStyle = styled.div`
display: none;

@media (min-width: 1120px) {
  align-items: flex-start;
  display: flex;
  justify-content: flex-end;
  grid-area: nav;
  padding: 2rem 0;
  position: fixed;
  right: calc(150px + 30px + 13px);
  top: calc(106px - 1rem);
  width: 150px;
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
    li {
      padding-bottom: ${30/16}rem;
      position: relative;
      a {
        transition: all 300ms ease;
      }
      &:hover {
        a {
          opacity: 1;
        }
        &:after {
          background-color: #5449d2;
          border: 1px solid transparent;
          opacity: 1;
        }
      }
      &:after {
        background-color: transparent;
        border: 1px solid #fff;
        border-radius: 50%;
        content: '';
        height: 13px;
        opacity: 0.33;
        position: absolute;
        right: -30px;
        top: 4px;
        transition: all 300ms ease;
        width: 13px;
      }
    }
  }
}
@media (min-width: 1600px) {
  right: calc(((100% - 1600px)/2) + 180px + 1rem);
}
`;

export const BurgerWrapperStyle = styled.div`
  background: ${props => props.brandTopStyles.background};
  padding-right: 1rem;
  border-bottom-right-radius: 10px;
  position: sticky;
  top: 0;
  z-index: 2;
  @media (min-width: 1120px) {
    display: none;
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
margin: 1.45rem auto 0 auto;
max-height: 20px;
max-width: 30px;
padding: 0;
position: sticky;
transition: all 500ms ease;
top: 1.45rem;
width: 30px;
@media (min-width: 1120px) {
  display: none;
}
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
width: 100%;
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
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: flex-start;
    li {
      margin-bottom: 0;
      margin-right: 2rem;
    }
  }
`;
