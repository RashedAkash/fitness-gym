import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const useForum = () => {
  const axiosPublic = useAxiosPublic();
const {  data:forum } = useQuery({
  queryKey: ['forum'],
  queryFn: async () => {
    const data = await axiosPublic.get('/forum')
    return data.data
    
  },
})
  return {forum}
};

export default useForum;