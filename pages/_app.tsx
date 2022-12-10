import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/navbar.css";
import SSRProvider from "react-bootstrap/SSRProvider";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ShopingCartProvider } from "../context/CartContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShopingCartProvider pageProps={pageProps}>
      <SSRProvider>
        <Layout>
          <Component pageProps={pageProps} />
        </Layout>
      </SSRProvider>
    </ShopingCartProvider>
  );
}
