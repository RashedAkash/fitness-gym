import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const useReviews = () => {
  const axiosPublic = useAxiosPublic();
const {  data:reviews } = useQuery({
  queryKey: ['reviews'],
  queryFn: async () => {
    const data = await axiosPublic.get('/reviews')
    return data.data
    
  },
})
  return {reviews}
};

export default useReviews;