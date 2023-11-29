import React from 'react';
import Title from '../../components/Title/Title';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddNewForum = () => {
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const info = {
      number : data.number,
      title: data.title,
      desc:data.desc,
      
    }
    axiosSecure.post('/forum', info)
      .then(res => {
        console.log(res);
        Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is apply the trainer .`,
                    showConfirmButton: false,
                    timer: 1500
                  });
    })
  }
  return (
    <div>
      <div>
        <Title heading='Add new forum' subheading='new forum' />
      </div>
      <div>
         <div className=' py-10'>
     <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Your Information</h2>

    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200" >Title</label>
                <input {...register("title")} id="name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            {/* <div>
                <label className="text-gray-700 dark:text-gray-200" >Email Address</label>
                <input {...register("email")} id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-white dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div> */}
            <div>
                <label className="text-gray-700 dark:text-gray-200" >Description</label>
                <input {...register("desc")} id="aboutAddress" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-white dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            

            <div>
                <label className="text-gray-700 dark:text-gray-200" >Number</label>
                <input {...register("number")} id="ageConfirmation" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-white dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            
           
        </div>

        <div className="flex justify-end mt-6">
            <button type='submit' className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#dc1853] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Applied Button</button>
        </div>
    </form>
</section>
    </div>
      </div>
    </div>
  );
};

export default AddNewForum;