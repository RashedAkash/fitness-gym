import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const useTrainer = () => {
  const axiosPublic = useAxiosPublic();
const {  data:trainer } = useQuery({
  queryKey: ['trainer'],
  queryFn: async () => {
    const data = await axiosPublic.get('/trainer')
    return data.data
    
  },
})
  return {trainer}
};

export default useTrainer;