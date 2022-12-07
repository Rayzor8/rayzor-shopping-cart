import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/navbar.css";

import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ShopingCartProvider } from "../context/CartContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShopingCartProvider pageProps={pageProps} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShopingCartProvider>
  );
}
