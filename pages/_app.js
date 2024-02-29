// import '../styles/globals.css';
// import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
// import { Toaster } from "react-hot-toast";

// function MyApp({ Component, pageProps }) {
//   return (
//     <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
//       <Component {...pageProps} />
//       <Toaster />
//     </ThirdwebProvider>
//   )
// }

// export default MyApp

import '../styles/globals.css';
// import {ethereum} from "@thirdweb-dev/chains";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
// import { ThirdwebProvider } from '@thirdweb-dev/react';
// import { ThirdwebProvider,useContract } from '@thirdweb-dev/react';
import { Toaster } from "react-hot-toast";
function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
       activeChain="mumbai"
      // activeChain={ethereum}
      clientId="42babf76b197aeb52e978639713cfc5b" // Replace "YOUR_CLIENT_ID" with your actual client ID
    >
      <Component {...pageProps} />
      <Toaster />
    </ThirdwebProvider>
  )
}


export default MyApp

