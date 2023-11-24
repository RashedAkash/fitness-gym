import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const useServices = () => {
  const axiosPublic = useAxiosPublic();
const {  data:services } = useQuery({
  queryKey: ['services'],
  queryFn: async () => {
    const data = await axiosPublic.get('/services')
    return data.data
    
  },
})
  return {services}
};

export default useServices;