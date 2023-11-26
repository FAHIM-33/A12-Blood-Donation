import { Helmet } from "react-helmet";
import Welcome from "./Welcome";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Loading from "../../../Components/Loading";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaEye, FaRegEdit, FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2'
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Heading from "../../../Components/Heading";
import useAllRequest from "../../../Hooks/useUserAllReq";
import useRole from "../../../Hooks/useRole";

const DashHome = () => {
    const { user, loading } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const { request, isLoading, refetch } = useAllRequest()

    const { admin, volunteer, isRoleLoading } = useRole()
    console.log(admin, volunteer)

    function handleStatus(id, str) {
        axiosSecure.patch(`/api/v1/status-update/${id}?requestStatus=${str}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    toast.success(`Request ${str}`)
                    refetch()
                }
            })
            .catch(() => toast.error("Failed"))
    }

    function handleDelete(id) {
        Swal.fire({
            title: "Delete request?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ff0000",
            cancelButtonColor: "#333",
            confirmButtonText: "Delete"
        }).then((result) => {
            if (result.isConfirmed) {
                let toastId = toast.loading('Deleting donation request..')
                axiosSecure.delete(`/api/v1/delete-donation-request/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            toast.success('Deleted successfully', { id: toastId })
                            refetch()
                        }
                    })
                    .catch(err => {
                        console.log(err)
                        toast.error('Failed to delete', { id: toastId })
                    })

            }
        });
    }

    if (loading || isLoading || isRoleLoading) { return <Loading></Loading> }

    return (
        <section className="">
            <Helmet><title>BDC | Dashboard</title></Helmet>
            <Welcome name={user.displayName} ></Welcome>
            {
                !admin && !volunteer && request?.length > 0 ?
                    <div >
                        <Heading>Recent requests:</Heading>
                        <div className="p-4">
                            <table className="">
                                <thead className="bg-fadegray">
                                    <tr className="">
                                        <th>Name</th>
                                        <th>Location</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        request?.slice(0, 3).map(req => <tr key={req._id}>
                                            <td>{req.receipentName}</td>
                                            <td className="text-low">
                                                <p>{req.district}, {req.upazilla}</p>
                                                <p>{req.fullAddress}</p>
                                            </td>
                                            <td>{req.date}</td>
                                            <td>{req.time}</td>
                                            <td>
                                                <div>
                                                    <p className={`${req.requestStatus == 'in progress' ? 'text-amber-400'
                                                        : req.requestStatus == 'done' ? 'text-sec'
                                                            : req.requestStatus == 'cancelled' ? 'text-prim'
                                                                : 'text-low'} `}>
                                                        {req.requestStatus}
                                                    </p>
                                                    {
                                                        req.requestStatus == 'in progress' &&
                                                        <div>
                                                            <p>by, {req.donorName}<br />{req.donorEmail}</p>
                                                            <div className="flex justify-center gap-2">
                                                                <button
                                                                    onClick={() => handleStatus(req._id, 'done')}
                                                                    className="btn bg-sec text-black p-1 rounded-md font-medium">Done</button>
                                                                <button
                                                                    onClick={() => handleStatus(req._id, 'cancelled')}
                                                                    className="btn bg-prim text-white p-1 rounded-md font-medium">Cancel</button>

                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                            </td>

                                            <td>
                                                <div className="flex items-center justify-center gap-2 text-2xl">
                                                    <Link to={`/dashboard/view/${req._id}`}>
                                                        <button className="text-high btn p-2" title="View details">
                                                            <FaEye></FaEye>
                                                        </button>
                                                    </Link>
                                                    <Link to={`/dashboard/edit/${req._id}`}>
                                                        <button className="text-sec btn p-2">
                                                            <FaRegEdit></FaRegEdit>
                                                        </button>
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(req._id)}
                                                        className="text-prim btn p-2">
                                                        <FaTrashAlt></FaTrashAlt>
                                                    </button>
                                                </div>

                                            </td>
                                        </tr>
                                        )}
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <Link to='/dashboard/my-donation-request'>
                                <button className="btn bg-low mx-auto text-background font-semibold text-2xl p-2 rounded-md">View my all request</button>
                            </Link>
                        </div>
                    </div>
                    :
                    <></>
            }

        </section>
    );
};

export default DashHome;