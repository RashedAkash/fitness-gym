import React from 'react';
import img from '../../assets/sub.jpg'
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2'

const NewsLetter = () => {
  const axiosPublic = useAxiosPublic();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    const subUser = { name, email };
    axiosPublic.post('/subUser', subUser)
    .then(function (response) {
      console.log(response);
       e.target.reset();
      Swal.fire({
  title: 'success!',
  text: 'you are subscribe successfully',
  icon: 'success',
  confirmButtonText: 'Congratulation'
})
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  return (
    <div>
      <div className="hero min-h-[80vh] bg-fixed" style={{backgroundImage: `url(${img})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
     <div className="w-full max-w-md p-8 space-y-3 rounded-xl  dark:text-gray-100">
	<h1 className="text-2xl text-[#dc1853] font-bold text-center">Subscribe</h1>
	<form onSubmit={handleSubmit}  className="space-y-6">
		<div className="space-y-1 text-sm">
			<label  className="block dark:text-white">Name</label>
			<input type="text" name="name" id="username" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-white border  dark:text-gray-900 focus:dark:border-violet-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label  className="block dark:text-white">Email</label>
			<input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-white  dark:text-gray-900 focus:dark:border-violet-400" />
			
		</div>
		<button type='submit' className="block w-full p-3 text-center rounded-sm  dark:bg-[#dc1853] text-white">Subscribe</button>
	</form>
	

	
</div>
    </div>
  </div>
</div>
    </div>
  );
};

export default NewsLetter;