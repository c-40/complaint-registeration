import React, { useState , useEffect } from 'react';
import { useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
// import complaint from './contracts/Complaint.json';
// import contract from './contract';
const Getter = () => {
    const [_id, setId] = useState(0);
    // const [_rId, setRId] = useState(0);
    const [_rId, setRId] = useState(0);
    const [_approvalRemark, setARemark] = useState("");
    const [_resolutionRemark, setRRemark] = useState("");
    const { contract } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT);
    // const { contract } = useContract("0x28a7f19059CFbC7f9b3d3Dc459Dd5797CaB7e207");
    const { data: nextId } = useContractRead(contract, "nextId")    
    // const { data: pendingApprovals } = useContractRead(contract, "pendingApprovals", 0)
    // const { data: pendingResolutions } = useContractRead(contract, "pendingResolutions", 0)
    const { data: pendingApprovals } = useContractRead(contract, "pendingApprovals");
    const { data: pendingResolutions } = useContractRead(contract, "pendingResolutions");

    const { mutateAsync: calcPendingApprovalIds } = useContractWrite(contract, "calcPendingApprovalIds")
    const { mutateAsync: calcPendingResolutionIds } = useContractWrite(contract, "calcPendingResolutionIds")

    const { mutateAsync: approveComplaint } = useContractWrite(contract, "approveComplaint")
    const { mutateAsync: resolveComplaint } = useContractWrite(contract, "resolveComplaint")
    const { mutateAsync: discardComplaint } = useContractWrite(contract, "discardComplaint")
//Not working
    const getPendingApprovals = async () => {
        try {
            const data = await calcPendingApprovalIds({ args: [] });
            console.log(data);
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }

    const getPendingResolutions = async () => {
        try {
            const data = await calcPendingResolutionIds({ args: [] });
            // setPendingApprovalData(data)
            console.info("contract call successs", data);
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }
    //Working 
    const handleApproveComplaint = async () => {
        try {
            const data = await approveComplaint({ args: [_id, _approvalRemark] });
            console.log(_id)
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }
//working
    const handleDeclineComplaint = async () => {
        try {
            const data = await discardComplaint({ args: [_id, _approvalRemark] });
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }

    const handleResolveComplaint = async () => {
        try {
            const data = await resolveComplaint({ args: [_rId, _resolutionRemark] });
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }
    
    
    return (
        <div className='getter-container md:p-[30px]  md:m-5 xl:flex xl:flex-row'>
            <div className='getter-card md:m-5'>
                <p className='getter-card-title'>Pending Approvals</p>
                <div className='flex items-center mt-3'>
                    <button className="button-common hover:bg-blue-900" onClick={getPendingApprovals}>Next Pending Approval ID</button>

                    {
                        pendingApprovals && (
                            <p className='getter-card-number'>: {pendingApprovals.toString()}</p>
                        )
                    }
                </div>

                <div className='md:flex items-center'>
                    <p className='text-2xl font-semibold'>Complaint Id: </p>
                    <input type="number" className='p-1 m-1 md:w-[500px] w-[200px] rounded-sm bg-[#D2DAFF]' placeholder='Enter Id Here'
                        onChange={(e) => { setId(e.target.value) }} />
                </div>
                <div className='md:flex items-center'>
                    <p className='text-2xl font-semibold'>Your Remark: </p>
                    <input type="text" className='p-1 m-1 md:w-[500px] w-[200px] rounded-sm bg-[#D2DAFF]' placeholder='Enter Remark Here'
                        onChange={(e) => { setARemark(e.target.value) }} />
                </div>
                <div className='flex'>
                    <button className="button-common hover:bg-blue-900" onClick={handleApproveComplaint}>Approve Complaint</button>
                    <button className="button-common hover:bg-blue-900" onClick={handleDeclineComplaint}>Decline Complaint</button>
                </div>

            </div>
            <div className='getter-card md:m-5'>
                <p className='getter-card-title'>Pending Resolutions</p>
                <div className='flex items-center mt-3'>
                    <button className="button-common hover:bg-blue-900" onClick={getPendingResolutions}>Next Pending Resolution ID</button>
                    {
                        pendingResolutions && (
                            <p className='getter-card-number'>: {pendingResolutions.toString()}</p>
                        )
                    }

                </div>

                <div className='md:flex items-center'>
                    <p className='text-2xl font-semibold'>Complaint Id: </p>
                    <input type="number" className='getter-input md:w-[500px]' placeholder='Enter Id Here'
                        onChange={(e) => { setRId(e.target.value) }} />
                </div>
                <div className='md:flex items-center'>
                    <p className='text-2xl font-semibold'>Your Remark: </p>
                    <input type="text" className='getter-input md:w-[500px]' placeholder='Enter Remark Here'
                        onChange={(e) => { setRRemark(e.target.value) }} />
                </div>
                <button className="button-common hover:bg-blue-900" onClick={handleResolveComplaint}>Resolve Complaint</button>
            </div>

        </div>
    )
}

export default Getter