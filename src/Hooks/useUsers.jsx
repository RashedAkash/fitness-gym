import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const useUsers = () => {
  const axiosPublic = useAxiosPublic();
const {  data:users } = useQuery({
  queryKey: ['users'],
  queryFn: async () => {
    const data = await axiosPublic.get('/users')
    return data.data
    
  },
})
  return {users}
};

export default useUsers;