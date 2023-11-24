import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const useTeam = () => {
  const axiosPublic = useAxiosPublic();
const {  data:team } = useQuery({
  queryKey: ['team'],
  queryFn: async () => {
    const data = await axiosPublic.get('/team')
    return data.data
    
  },
})
  return {team}
};

export default useTeam;