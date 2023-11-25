import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loading from "../../../Components/Loading";

const View = () => {
    const { id } = useParams()
    const axiosSecure = useAxiosSecure()
    const [req, setReq] = useState({})


    useEffect(() => {
        axiosSecure.get(`/api/v1/request/${id}`)
            .then((res) => {
                setReq(res.data)
            })
            .catch(() => console.log('Something went wrong'))
    }, [axiosSecure, id])

    if (!req.name) { return <Loading></Loading> }
    return (
        <section className="p-4 text-xl text-center">
            <p className="font-bold">Requester Name: {req.name}</p>
            <p className="mt-2">Requester Email: {req.email}</p>
            <p className="mt-2">Recipient Name: {req.receipentName}</p>
            <p className="mt-2">District: {req.district}</p>
            <p className="mt-2">Upazilla: {req.upazila}</p>
            <p className="mt-2">Hospital: {req.hospital}</p>
            <p className="mt-2">Full Address: {req.fullAddress}, {req.upazila}, {req.district}</p>
            <p className="mt-2">Donating Date: {req.date}</p>
            <p className="mt-2">Donating Time: {req.time}</p>
            <p className={`mt-2 ${req.requestStatus == 'in progress' ? 'text-amber-400'
                : req.requestStatus == 'done' ? 'text-sec'
                    : req.requestStatus == 'cancelled' ? 'text-prim'
                        : 'text-low'}`}>
                Status of Request: {req.requestStatus}
            </p>
            {req.requestStatus !== 'pending' && (
                <div className="mt-4 bg-fadegray">
                    <p className="font-bold">Donor Name: {req.donorName}</p>
                    <p className="mt-2">Donor Email: {req.donorEmail}</p>
                </div>
            )}
        </section>

    );
};

export default View;