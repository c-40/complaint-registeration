// import React, { useState } from 'react'
// import { useContract, useContractRead } from "@thirdweb-dev/react";
// // import complaint from './contracts/Complaint.json';
// // import contract from './components/contract';
// const Status = () => {
//     const [id, setId] = useState(0);
//     const { contract } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT);
//     // const { contract } = useContract("0x28a7f19059CFbC7f9b3d3Dc459Dd5797CaB7e207");
//     const { data: Complaints } = useContractRead(contract, "Complaints", id)
//     return (
//         <div className='status-container mt-7'>
//             <div className='status'>
//                 <p className='status-title'>Check Status of Your Complaint:</p>
//                 <div className='flex items-center justify-center'>
//                     <p className='status-text'>Complaint ID:</p>
//                     <input type="number" className='status-input md:w-[450px]' placeholder='Enter Complaint ID'
//                         onChange={(e) => { setId(e.target.value) }} />
//                 </div>
//             </div>
//             {Complaints && Complaints.title && (
//                 <div className="status-render-container md:w-[600px]">
//                     <p className='status-render-title'>Complaint Details:</p>
//                     <p className='status-render-text'>Complaint Id: {(Complaints.id).toString()}</p>
//                     <p className='status-render-text'>Complaint by: {(Complaints.complaintRegisteredBy).toString()}</p>
//                     <p className='status-render-text'>Complaint Title: {Complaints.title}</p>
//                     <p className='status-render-text'>Complaint Description: {Complaints.description}</p>
//                     <p className='status-render-text'>Approval Status: {Complaints.isApproved ? "Approved" : !Complaints.exists ? "Declined" : "Approval Pending"}</p>
//                     <p className='status-render-text'>Approval Remark: {Complaints.approvalRemark}</p>
//                     <p className='status-render-text'>Resolution Status: {Complaints.isResolved ? "Resolved" : "Resolution pending"}</p>
//                     <p className='status-render-text mb-2'>Resolution Remark: {Complaints.resolutionRemark}</p>
//                 </div>
//             )}

//         </div>
//     )
// }

// export default Status

import React, { useState } from 'react'
import { useContract, useContractRead } from "@thirdweb-dev/react";

const Status = () => {
    const [id, setId] = useState(0);
    const { contract } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT);
    const { data: Complaints } = useContractRead(contract, "Complaints", id);
    
    return (
        <div className='status-container mt-7'>
            <div className='status'>
                <p className='status-title'>Check Status of Your Complaint:</p>
                <div className='flex items-center justify-center'>
                    <p className='status-text'>Complaint ID:</p>
                    <input type="number" className='status-input md:w-[450px]' placeholder='Enter Complaint ID'
                        onChange={(e) => { setId(e.target.value) }} />
                </div>
            </div>
            {Complaints && (
                <div className="status-render-container md:w-[600px]">
                    <p className='status-render-title'>Complaint Details:</p>
                    <p className='status-render-text'>Complaint Id: {(Complaints.id).toString()}</p>
                    <p className='status-render-text'>Complaint by: {(Complaints.complaintRegisteredBy).toString()}</p>
                    <p className='status-render-text'>Complaint Title: {Complaints.title}</p>
                    <p className='status-render-text'>Complaint Description: {Complaints.description}</p>
                    <p className='status-render-text'>Approval Status: {Complaints.isApproved ? "Approved" : Complaints.exists ? "Approval Pending" : "Declined"}</p>
                    <p className='status-render-text'>Approval Remark: {Complaints.approvalRemark}</p>
                    <p className='status-render-text'>Resolution Status: {Complaints.isResolved ? "Resolved" : "Resolution pending"}</p>
                    <p className='status-render-text mb-2'>Resolution Remark: {Complaints.resolutionRemark}</p>
                </div>
            )}

        </div>
    )
}

export default Status;
