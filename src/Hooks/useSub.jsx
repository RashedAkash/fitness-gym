import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const useSub = () => {
  const axiosPublic = useAxiosPublic();
const {  data:sub } = useQuery({
  queryKey: ['sub'],
  queryFn: async () => {
    const data = await axiosPublic.get('/subUser')
    return data.data
    
  },
})
  return {sub}
};

export default useSub;