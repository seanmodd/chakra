import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react';
import customTheme from '../styles/theme.js';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={customTheme}>
        <CSSReset />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
