import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const useClasses = () => {
  const axiosPublic = useAxiosPublic();
const {  data:classes } = useQuery({
  queryKey: ['classes'],
  queryFn: async () => {
    const data = await axiosPublic.get('/classes')
    return data.data
    
  },
})
  return {classes}
};

export default useClasses;