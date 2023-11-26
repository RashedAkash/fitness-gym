import React, { useEffect } from 'react';
import useSub from '../../Hooks/useSub';
import Title from '../../components/Title/Title';

const ShowSubscribe = () => {

  const { sub } = useSub();
  
  return (
    <div>
      <div className=' py-10'>
        <Title  heading='Your Subscribe User' subheading='subscribe user' />
      </div>
      <div className="overflow-x-auto pb-16">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Id</th>
      </tr>
    </thead>
    <tbody>
            {
              sub?.map((sb,index)=> <tr key={sb._id}>
                <th>{index+1 }</th>
                <td className=' uppercase'>{sb.name }</td>
                <td>{sb.email }</td>
                <td>{sb._id }</td>
      </tr> )
      }
      
     
    </tbody>
  </table>
</div>
    </div>
  );
};

export default ShowSubscribe;