import { Html, Head, Main, NextScript } from 'next/document';
import CustomHead from '../app/layout/custom-head';
import CustomScript from '../app/layout/custom-script';

export default function Document() {
  return (
    <Html>
      <Head />
      <CustomHead />
      <body>
        <Main />
        <NextScript />
        <CustomScript />
      </body>
    </Html>
  );
}
