import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

import useAxiosPublic from "./useAxiosPublic";
import useAxiosSecure from "./useAxiosSecure";


const useUpdateUsers = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isUpdate, isPending: isUpdateLoading } = useQuery({
        queryKey: [user?.email, 'isUpdate'],
        
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user.email}`);
            console.log(res.data);
            return res.data;
        }
    })
    return {isUpdate, isUpdateLoading}
};

export default useUpdateUsers;