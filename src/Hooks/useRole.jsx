import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const { data, isLoading: isRoleLoading } = useQuery({
        queryKey: ['userRole'],
        queryFn: async () => {
            let res = await axiosSecure.get(`/api/v1/user?email=${user?.email}`)
            console.log(res.data.role)
            return res.data.role
        }
    })

    return {
        admin: data == 'admin' ? true : false,
        volunteer: data == 'volunteer' ? true : false,
        isRoleLoading
    }

};

export default useRole;