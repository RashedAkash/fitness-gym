import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const useBlog = () => {
  const axiosPublic = useAxiosPublic();
const {  data:blog } = useQuery({
  queryKey: ['blog'],
  queryFn: async () => {
    const data = await axiosPublic.get('/blogs')
    return data.data
    
  },
})
  return {blog}
};

export default useBlog;