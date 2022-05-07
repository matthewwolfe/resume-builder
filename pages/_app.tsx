import Head from 'next/head';
import React from 'react';

import type { AppProps } from 'next/app';
import type { ComponentType } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { light } from 'utils/themes';

interface Props extends AppProps {
  Component: ComponentType;
  pageProps: Record<string, unknown>;
}

export default function App(props: Props): JSX.Element {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Resume Builder</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={light}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
