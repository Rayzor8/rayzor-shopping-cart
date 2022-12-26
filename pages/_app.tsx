import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/navbar.css";
import SSRProvider from "react-bootstrap/SSRProvider";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ShopingCartProvider } from "../context/CartContext";
import { Inter, Titan_One } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
  variable: '--font-inter',
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShopingCartProvider pageProps={pageProps}>
      <SSRProvider>
        <Layout>
          <div className={`${inter.className}` }>
            <Component pageProps={pageProps} />
          </div>
        </Layout>
      </SSRProvider>
    </ShopingCartProvider>
  );
}
