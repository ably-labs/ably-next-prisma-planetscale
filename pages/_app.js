import { configureAbly } from "@ably-labs/react-hooks";
import "../styles/globals.css";

configureAbly({ authUrl: "http://localhost:3000/api/createTokenRequest" });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
