import React from 'react';
import { useForm } from "react-hook-form"
import Title from '../../components/Title/Title';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';


const IMG_HOSTING_KEY = import.meta.env.VITE_IMG_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${IMG_HOSTING_KEY}`
const ApplyTrainer = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
   const {
    register,
    handleSubmit,
     watch,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    console.log(data)
    const imageFile = { image: data.image[0] }
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
    console.log(res.data);
    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const info = {
        name: data.name,
        email: user?.email,
        age: data.age,
        day: data.day,
        week: data.week,
        skills: data.skills,
        image: res.data.data.display_url
      }
      const trainerRes = await axiosSecure.post('/trainerInfo', info);
        if(trainerRes.data.insertedId){
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
      <div className=' pt-10'>
        <Title heading='Your Information' subheading='Become a trainer' />
      </div>
      <div className=' py-10'>
     <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Your Information</h2>

    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200" >Name</label>
                <input {...register("name")} id="name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            {/* <div>
                <label className="text-gray-700 dark:text-gray-200" >Email Address</label>
                <input {...register("email")} id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-white dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div> */}
            <div>
                <label className="text-gray-700 dark:text-gray-200" >About you</label>
                <input {...register("about")} id="aboutAddress" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-white dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            

            <div>
                <label className="text-gray-700 dark:text-gray-200" >Age</label>
                <input {...register("age")} id="ageConfirmation" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-white dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200" >Skills</label> <br />
          
                <select defaultValue='default' {...register("skills")} className="select select-bordered w-full max-w-xs">
  <option disabled value='default'>What is your skill?</option>
  <option>Strength Training</option>
  <option>Yoga Flow</option>
  <option>Cardio Kickboxing</option>
  <option>Spin Cycling</option>
  <option>Pilates Core Fusion</option>
  <option>HIIT Circuit Training</option>
  
</select>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200" >Available Time in a week
</label> <br />
                <select defaultValue='default' {...register("week")} className="select select-bordered w-full max-w-xs">
 <option disabled value='default'>Available time in a week?</option>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
                <option>5</option>
                </select>
            </div>
            <div>
                <label className="text-gray-700  dark:text-gray-200" > Available time in a day</label> <br />
                <select defaultValue='default' {...register("day")} className="select select-bordered w-full max-w-xs">
  <option disabled value='default'>Available time in a day?</option>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
  
</select>
            </div>
            <div>
                <label className="text-gray-700  dark:text-gray-200" > Profile Image
</label> <br />
                <input {...register("image")} type="file" className="file-input w-full max-w-xs" />
            </div>
        </div>

        <div className="flex justify-end mt-6">
            <button type='submit' className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#dc1853] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Applied Button</button>
        </div>
    </form>
</section>
    </div>
    </div>
  );
};

export default ApplyTrainer;