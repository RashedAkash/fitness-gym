import React from 'react';
import Title from '../../components/Title/Title';
import useUsers from '../../Hooks/useUsers';

const Allusers = () => {
  const { users } = useUsers();
  console.log(users);
  return (
    <div>
      <div className='py-10'>
        <Title heading='All users' subheading='users' />
      </div>
      <div>
 <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
              {
                users?.map((user, index) => <tr key={user._id}>
        
        
        <td>
          {index + 1}
          
        </td>
                  <td className=' uppercase'>{ user.name}</td>
                  <td >{ user.email}</td>
                  <td className=' btn bg-[#dc1853] text-white uppercase'>{ user.role}</td>
       
      </tr>)
      }
      
    </tbody>
    
  </table>
</div>
      </div>
    </div>
  );
};

export default Allusers;