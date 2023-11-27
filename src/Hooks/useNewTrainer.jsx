import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const useNewTrainer = () => {
  const axiosPublic = useAxiosPublic();
const {  data:newTrainer,refetch } = useQuery({
  queryKey: ['newTrainer'],
  queryFn: async () => {
    const data = await axiosPublic.get('/trainerInfo')
    return data.data
    
  },
})
  return {newTrainer,refetch}
};

export default useNewTrainer;