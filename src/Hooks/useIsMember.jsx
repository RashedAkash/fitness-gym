import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useIsMember = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isMember, isPending: ismemberLoading } = useQuery({
        queryKey: [user?.email, 'isMember'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/member/${user.email}`);
            console.log(res.data);
            return res.data?.member;
        }
    })
    return {isMember, ismemberLoading}
};

export default useIsMember;