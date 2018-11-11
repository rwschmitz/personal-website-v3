import React from 'react';
import styled from 'styled-components';
import Brand from '../components/Brand';
import Copy from '../components/Copy';
import '../css/page.css';


class Page extends React.Component {
  render() {

    const Page = styled.section`
      color: #fff;
      font-family: 'Montserrat', sans-serif;
      margin: 0 auto;
      max-width: 1600px;
    `;

    return (
      <Page>
        <Brand />
        <Copy
          content={ 
            [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique diam orci, vitae commodo eros mattis ut. Maecenas efficitur porttitor congue. Morbi nec nisi eu neque sagittis ultrices at sed neque. Sed porta est a tempus lacinia. Integer a posuere felis. Integer in eros commodo, congue erat id, consectetur ante. Nam tellus risus, sodales eu lorem ac, tincidunt tempor elit.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique diam orci, vitae commodo eros mattis ut. Maecenas efficitur porttitor congue. Morbi nec nisi eu neque sagittis ultrices at sed neque. Sed porta est a tempus lacinia. Integer a posuere felis. Integer in eros commodo, congue erat id, consectetur ante. Nam tellus risus, sodales eu lorem ac, tincidunt tempor elit.",
            ]
          }
        />
      </Page>
    );
  }
}

export default Page;
