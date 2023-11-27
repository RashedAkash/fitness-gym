import React from 'react';
import Title from '../../components/Title/Title';
import useUsers from '../../Hooks/useUsers';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Allusers = () => {
  const AxiosSecure = useAxiosSecure();
  const { users } = useUsers();
  const handleMakeAdmin = (user) => {
    AxiosSecure.patch(`/users/admin/${user._id}`)
      .then(res => {
        console.log(res.data);
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    if (res.data.modifiedCount> 0) {
       Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    }
   
  }
});
    })
  }
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
                  <td>
                    {
                      user?.role === 'admin' ?  <button    className=' btn bg-[green] text-white uppercase'>Admin</button> :
                        <button  onClick={() => handleMakeAdmin(user)}  className=' btn bg-[#dc1853] text-white uppercase'>{user.role}</button>
                    }
                  </td>
       
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