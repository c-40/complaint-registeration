import React, { useState } from 'react';
import { useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import toast from "react-hot-toast";
// import complaint from './contracts/Complaint.json';
// import contract from './components/contract';
const Complaint = () => {
    const [_title, setTitle] = useState("");
    const [_description, setDescription] = useState("");

    const { contract } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT);
    // const { contract } = useContract("0x28a7f19059CFbC7f9b3d3Dc459Dd5797CaB7e207");
    const { data: nextId } = useContractRead(contract, "nextId")
    // const { mutateAsync: fileComplaint } = useContractWrite(contract, "fileComplaint");
    const { mutateAsync: fileComplaint } = useContractWrite(contract, "fileComplaint")

    // const handleComplaint = async () => {
    //     const notification = toast.loading("Filing Complaint");
        

    //     try {
    //         const data = await fileComplaint([_title, _description]);
    //         console.log("Title:", title);
    //         console.log("Description:", description);
    //         toast.success(`Complaint Filed! Note Your ComplaintId:${nextId}`, {
    //             id: notification,
    //         });
    //         console.info("contract call successs", data);
    //         setTitle("");
    //         setDescription("");
    //     } catch (err) {
    //         toast.error("Whoops, something went wrong!", {
    //             id: notification,
    //         });
    //         console.error("contract call failure", err);
    //     }
    // }
    const handleComplaint = async () => {
        const notification = toast.loading("Filing Complaint");
    
        try {
            const data = await fileComplaint({ args: [_title, _description] });
            console.log("Title:", _title);
            console.log("Description:", _description);
            toast.success(`Complaint Filed! Note Your ComplaintId:${nextId}`, {
                id: notification,
            });
            console.info("contract call successs", data);
            setTitle("");
            setDescription("");
        } catch (err) {
            toast.error("Whoops, something went wrong!", {
                id: notification,
            });
            console.error("contract call failure", err);
        }
    }
    
    return (
        <div className='complaint-container md: mr-[50px] md:ml-[50px]'>
            <p className="complaint-title-red">File Your Complaint Here:</p>
            <div className='md:flex items-center'>
                <p className='complaint-text-margin'>Title: </p>
                <input type="text" className='container-input md:w-[500px] w-[300px]' placeholder='Enter Title Here'
                    onChange={(e) => { setTitle(e.target.value) }} />
            </div>
            <div className='md:flex items-center'>
                <p className='complaint-text-normal'>Description: </p>
                <input type="text" className='container-input md:w-[500px] w-[300px]' placeholder='Enter Description Here'
                    onChange={(e) => { setDescription(e.target.value) }} />
            </div>
            <button className="button-common hover:bg-blue-900" onClick={handleComplaint}>File Complaint</button>
        </div>
    )
}

export default Complaint

// import React, { useState } from 'react';
// import { useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
// import toast from "react-hot-toast";

// const Complaint = () => {
//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");
//     const [loading, setLoading] = useState(false); // Add loading state

//     const { contract, loading: contractLoading } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT);

//     const { data: nextId } = useContractRead(contract, "nextId");
//     const { mutateAsync: fileComplaint } = useContractWrite(contract, "fileComplaint");

//     const handleComplaint = async () => {
//         setLoading(true); // Set loading to true when filing complaint
//         const notification = toast.loading("Filing Complaint");
//         try {
//             const data = await fileComplaint({ args: [title,description] }); // Pass title and description as arguments
//             toast.success(`Complaint Filed! Note Your ComplaintId:${nextId}`, {
//                 id: notification,
//             });
//             console.info("contract call successs", data);
//             setTitle("");
//             setDescription("");
//         } catch (err) {
//             toast.error("Whoops, something went wrong!", {
//                 id: notification,
//             });
//             console.error("contract call failure", err);
//         } finally {
//             setLoading(false); // Set loading to false after complaint is filed
//         }
//     }
    


//     return (
//         <div className='complaint-container md:mr-[50px] md:ml-[50px]'>
//             <p className="complaint-title-red">File Your Complaint Here:</p>
//             <div className='md:flex items-center'>
//                 <p className='complaint-text-margin'>Title: </p>
//                 <input type="text" className='container-input md:w-[500px] w-[300px]' placeholder='Enter Title Here'
//                     value={title} onChange={(e) => setTitle(e.target.value)} />
//             </div>
//             <div className='md:flex items-center'>
//                 <p className='complaint-text-normal'>Description: </p>
//                 <input type="text" className='container-input md:w-[500px] w-[300px]' placeholder='Enter Description Here'
//                     value={description} onChange={(e) => setDescription(e.target.value)} />
//             </div>
//             <button className="button-common hover:bg-blue-900" onClick={handleComplaint} disabled={loading}>
//                 {loading ? 'Filing...' : 'File Complaint'}
//             </button>
//         </div>
//     );
// }

// export default Complaint;
