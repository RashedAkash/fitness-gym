import React from 'react';
import useTeam from '../../Hooks/useTeam';
import Slider from "react-slick";



const Team = () => {
  const { team } = useTeam();
  console.log(team);
  return (
    <div>
      
    </div>
  );
};

export default Team;