import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useAllRequest = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const { data: request, isLoading, refetch } = useQuery({
        queryKey: ['all-requests'],
        queryFn: async () => {
            let res = await axiosSecure.get(`/api/v1/my-donation-request?email=${user?.email}`)
            return res.data
        }
    })
    return { request, isLoading, refetch }
};

export default useAllRequest;