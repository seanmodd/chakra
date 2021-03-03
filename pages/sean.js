import Head from 'next/head';
import React from 'react';
import ListContainer from '../components/functional_component/step-4';
import Container from '../components/Container';

export default function Sean() {
  return (
    <>
      <Container>
        <Head>
          <title>Sean Modd motherfuckers</title>
        </Head>
        <ListContainer />
      </Container>
    </>
  );
}
