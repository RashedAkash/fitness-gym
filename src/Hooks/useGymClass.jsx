import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const useGymClasses = () => {
  const axiosPublic = useAxiosPublic();
const {  data:gymClasses } = useQuery({
  queryKey: ['gymClasses'],
  queryFn: async () => {
    const data = await axiosPublic.get('/gymClasses')
    return data.data
    
  },
})
  return {gymClasses}
};

export default useGymClasses;