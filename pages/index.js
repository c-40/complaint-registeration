// import Head from 'next/head'
// import Complaint from './components/Complaint'    
// import Admin from './components/Admin'
// import Header from './components/Header'
// import Status from './components/Status'
// import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
// // import myContractABI from './contracts/Complaint.json';
// // import contract from './contract';

// export default function Home() {
//   const address = useAddress();

//   const { contract } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT);
//   // const { contract } = useContract("0x28a7f19059CFbC7f9b3d3Dc459Dd5797CaB7e207")
//   const { data: officer } = useContractRead(contract, "officer")

//   return (
//     <div className="" >
//       <Head>
//         <title>Complaint App</title>
//         <meta name="description" content="This is a police complaint app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Header />
//       <Complaint />
//       <Status />
//       {officer === address && (
//         <Admin />
//       )}
//     </div>
//   )
// }
import Head from 'next/head'
import Complaint from './components/Complaint'    
import Admin from './components/Admin'
import Header from './components/Header'
import Status from './components/Status'
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";

export default function Home() {
  const address = useAddress();
  const { contract, loading } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT);
  const { data: officer } = useContractRead(contract, "officer");
  // console.log("Contract address:", process.env.NEXT_PUBLIC_SMART_CONTRACT);
  if (loading) {
    // Render a loading indicator or placeholder while the contract is being loaded
    return <div>Loading...</div>;
  }

  // Once the contract is loaded, render the components
  return (
    <div className="">
      <Head>
        <title>Complaint App</title>
        <meta name="description" content="This is a police complaint app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Complaint />
      <Status />
      {contract && officer === address && (
        <Admin />
      )}
    </div>
  );
}
