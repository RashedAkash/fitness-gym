import React from 'react';
import Title from '../../components/Title/Title';
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';


const IMG_HOSTING_KEY = import.meta.env.VITE_IMG_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${IMG_HOSTING_KEY}`

const AddClass = () => {
   const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async(data) =>{
    console.log(data);
    const imageFile = { image: data.image[0] }
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const info = {
        name: data?.name,       
        members: data?.members,
        desc: data?.desc,        
        image: res.data?.data?.display_url
      }
      const gymClass = await axiosSecure.post('/gymClasses', info);
        if(gymClass.data.insertedId){
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is apply the trainer .`,
                    showConfirmButton: false,
                    timer: 1500
                  });
      }
      console.log( 'with image url', res.data);
    }
  }
  return (
    <div>
      <div className='py-10'>
        <Title heading='Add New Class' subheading='ad class' />
      </div>
      <div>
         <div className=' py-10'>
     <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Add Your Class</h2>

    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200" >Name</label>
                <input {...register("name")} id="name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

           
            <div>
                <label className="text-gray-700 dark:text-gray-200" >Members</label>
                <input {...register("members")} id="members" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-white dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            

            <div>
                <label className="text-gray-700 dark:text-gray-200" >Description</label>
                <textarea {...register("desc")} id="desc" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-white dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            
           
            <div>
                <label className="text-gray-700  dark:text-gray-200" > Class Image
</label> <br />
                <input {...register("image")} type="file" className="file-input w-full max-w-xs" />
            </div>
        </div>

        <div className="flex justify-end mt-6">
            <button type='submit' className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#dc1853] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add class</button>
        </div>
    </form>
</section>
    </div>
      </div>
    </div>
  );
};

export default AddClass;