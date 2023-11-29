import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';
import useAxiosSecure from './useAxiosSecure';

const useTrainer = () => {
  const axiosSecure = useAxiosSecure();
const {  data:trainer } = useQuery({
  queryKey: ['trainer'],
  queryFn: async () => {
    const data = await axiosSecure.get('/trainer')
    return data.data
    
  },
})
  return {trainer}
};

export default useTrainer;