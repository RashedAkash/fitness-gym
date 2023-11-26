import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const usePrice = () => {
  const axiosPublic = useAxiosPublic();
const {  data:price } = useQuery({
  queryKey: ['price'],
  queryFn: async () => {
    const data = await axiosPublic.get('/price')
    return data.data
    
  },
})
  return {price}
};

export default usePrice;