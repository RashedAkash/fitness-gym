import React, { useState } from 'react';
import useNewTrainer from '../../Hooks/useNewTrainer';
import { FaEye } from 'react-icons/fa';
import { set } from 'react-hook-form';
import Title from '../../components/Title/Title';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';

const AppliedTrainer = () => {
  const AxiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { newTrainer } = useNewTrainer();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const handleClick = (tr) => {
    console.log(tr);
    setShowModal(true);
    setModalContent(tr);
  };
  const handleClose = () => {
    setShowModal(false)
  };

  const handleMakeTrainer = (tr) => {
    console.log(tr._id);
     AxiosSecure.patch(`/trainerInfo/trainer/${tr._id}`)
      .then(res => {
        console.log(res.data);
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, Revert it!"
}).then((result) => {
  if (result.isConfirmed) {
    if (res.data.modifiedCount> 0) {
       Swal.fire({
      title: "Congratulation!",
      text: "Your file has been changed.",
      icon: "success"
    });
    }
   
  }
});
    })
  }
  return (
    <div>
      <div className=' py-10'>
        <Title heading='Your Applied Trainer' subheading='applied trainer' />
      </div>
      <div className="overflow-x-auto pb-16">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Age</th>
        <th>Skills</th>
        <th>Status</th>
        
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
            {
              newTrainer?.map((tr,index)=>    <tr key={tr._id}>
        <th>
                  <h2>{index+1 }</h2>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={tr?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
                      <div className="font-bold">{tr?.name }</div>
              
            </div>
          </div>
        </td>
        
                <td>{ tr?.age} years</td>
                <td>{ tr?.skills} years</td>
                <td>{
                  tr?.role ==='trainer' ? <button className=' btn btn-success'>Trainer</button>: <button className='btn btn-accent'>Applied Trainer</button>
                }
                </td>
                <td>{ tr?.email} years</td>
        <th>
                  <button onClick={()=>handleClick(tr)} className="btn btn-ghost bg-[#dc1853] text-white btn-xs">
                    <FaEye />
                  </button>

                  {
                    showModal && <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
                      <div className="bg-white rounded shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
                        <div className=' flex space-y-2 flex-col p-7'>
                        <div className=' space-y-2'>
                        <h1 className=' uppercase text-xl'>{modalContent.name }</h1>
                      <h1>{modalContent.email }</h1>
                      <h1>{ modalContent.skills}</h1>
                      </div>
                      <div>
                        <button onClick={()=>handleMakeTrainer(tr)} className=' text-white btn btn-success mr-2'>Confirmation</button>
                        <button className='btn btn-warning text-white'>Reject</button>
                        </div>
                        <div>
                          <button  onClick={handleClose} className='btn flex justify-end text-white bg-[#dc1853]'>Close</button>
                        </div>
                      </div>
                      </div>
                    </div>
                  }
 
        </th>
      </tr> )
      }
      
     
    </tbody>
  </table>
</div>
    </div>
  );
};

export default AppliedTrainer;