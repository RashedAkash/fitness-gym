import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';
import useAxiosSecure from './useAxiosSecure';

const useGymClasses = () => {
  const axiosSecure = useAxiosSecure();
const {  data:gymClasses } = useQuery({
  queryKey: ['gymClasses'],
  queryFn: async () => {
    const data = await axiosSecure.get('/gymClasses')
    return data.data
    
  },
})
  return {gymClasses}
};

export default useGymClasses;