import { createGlobalStyle } from 'styled-components';

import '../styles/globals.css';

const GlobalStyles = createGlobalStyle`html,body{
  padding: 0;
  margin: 0;
  font-family: Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;
  /* background-color:#F8F8F8; */
  background-color:rgb(248,248,248, 0.2);


  *{
    box-sizing: border-box;
  }
  height: 100%;
  /* @font-face{font-family:AntDesign;font-style:normal;font-weight:400;src:url(fonts/AntDesign.ttf) format('truetype')}@font-face{font-family:Entypo;font-style:normal;font-weight:400;src:url(fonts/Entypo.ttf) format('truetype')}@font-face{font-family:EvilIcons;font-style:normal;font-weight:400;src:url(fonts/EvilIcons.ttf) format('truetype')}@font-face{font-family:Feather;font-style:normal;font-weight:400;src:url(fonts/Feather.ttf) format('truetype')}@font-face{font-family:FontAwesome;font-style:normal;font-weight:400;src:url(fonts/FontAwesome.ttf) format('truetype')}@font-face{font-family:FontAwesome5;font-style:normal;font-weight:400;src:url(fonts/FontAwesome5.ttf) format('truetype')}@font-face{font-family:FontAwesome5Brands;font-style:normal;font-weight:400;src:url(fonts/FontAwesome5_Brands.ttf) format('truetype')}@font-face{font-family:Foundation;font-style:normal;font-weight:400;src:url(fonts/Foundation.ttf) format('truetype')}@font-face{font-family:Ionicons;font-style:normal;font-weight:400;src:url(fonts/Ionicons.ttf) format('truetype')}@font-face{font-family:MaterialCommunityIcons;font-style:normal;font-weight:400;src:url(fonts/MaterialCommunityIcons.ttf) format('truetype')}@font-face{font-family:MaterialIcons;font-style:normal;font-weight:400;src:url(fonts/MaterialIcons.ttf) format('truetype')}@font-face{font-family:Octicons;font-style:normal;font-weight:400;src:url(fonts/Octicons.ttf) format('truetype')}@font-face{font-family:SimpleLineIcons;font-style:normal;font-weight:400;src:url(fonts/SimpleLineIcons.ttf) format('truetype')}@font-face{font-family:Zocial;font-style:normal;font-weight:400;src:url(fonts/Zocial.ttf) format('truetype')} */

  div::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}
div::-webkit-scrollbar-track {
  background: white;        /* color of the tracking area */

}
div::-webkit-scrollbar-thumb {
  background-color: whitesmoke;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */

}

input[type="checkbox"] {
  /* -webkit-appearance: none; */
  /* -moz-appearance: none; */
  /* appearance: none; */

  /* Styling checkbox */
  width: 16px;
  height: 16px;
}
}`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
