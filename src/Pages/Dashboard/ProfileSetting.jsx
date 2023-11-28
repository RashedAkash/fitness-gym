import React from 'react';
import Title from '../../components/Title/Title';
import { useForm } from "react-hook-form"
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useUsers from '../../Hooks/useUsers';

const ProfileSetting = () => {
  const { user } = useAuth();
  const { users } = useUsers();
console.log(users);
  const AxiosSecure = useAxiosSecure()
  console.log(user);
   const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log(data);
    AxiosSecure.put(`/users/${users?._id}`)
      .then(res => {
        console.log(res.data);
          if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
    })
  }
  return (
    <div>
      <div className=' py-10'>
        <Title subheading='settings' heading='Profile settings' />
      </div>
<div className='py-10'>
      <div className='  '>
        
        <div className=' md:w-1/2'>
          <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
	<h1 className="text-2xl font-bold text-center">Save Changes</h1>
              <form onSubmit={handleSubmit(onSubmit)} action="" className="space-y-6">
                <div className="space-y-1 text-sm">
			<label className="block dark:text-gray-400">Name</label>
                <input defaultValue={user?.displayName} {...register("name")}  type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 border dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
              
			
		</div>
		
		
		<div className="space-y-1 text-sm">
			<label className="block dark:text-gray-400">Photo Url</label>
                <input defaultValue={user?.photoURL} {...register("photo")}  type="photo" name="photo" id="photo" placeholder="Photo Url" className="w-full px-4 py-3 rounded-md dark:border-gray-700 border dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                
		
		</div>
		<div className="space-y-1 text-sm">
			<label className="block dark:text-gray-400">Password</label>
                <input defaultValue={user?.password} {...register("password")}  type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 border dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                
			
		</div>
		<button type='submit' className="block w-full p-3 text-center rounded-sm dark:text-white dark:bg-[#dc1853]">Save Change</button>
	</form>
	
	
	
</div>
        </div>
     </div>
    </div>
    </div>
  );
};

export default ProfileSetting;