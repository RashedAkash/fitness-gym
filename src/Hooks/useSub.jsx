import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';
import useAxiosSecure from './useAxiosSecure';

const useSub = () => {
  const axiosSecure = useAxiosSecure();
const {  data:sub } = useQuery({
  queryKey: ['sub'],
  queryFn: async () => {
    const data = await axiosSecure.get('/subUser')
    return data.data
    
  },
})
  return {sub}
};

export default useSub;