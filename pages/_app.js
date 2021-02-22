import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
