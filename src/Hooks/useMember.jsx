import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const useMember = () => {
  const axiosPublic = useAxiosPublic();
const {  data:member } = useQuery({
  queryKey: ['member'],
  queryFn: async () => {
    const data = await axiosPublic.get('/users/member')
    return data.data
    
  },
})
  return {member}
};

export default useMember;