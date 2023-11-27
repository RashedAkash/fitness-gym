import React from 'react';
import useNewTrainer from '../../Hooks/useNewTrainer';
import { FaEye } from 'react-icons/fa';

const AppliedTrainer = () => {
  const { newTrainer } = useNewTrainer();
  console.log(newTrainer);
  return (
    <div>
      <div></div>
      <div className="overflow-x-auto pb-16">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Age</th>
        <th>Skills</th>
        
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
                <td>{ tr?.email} years</td>
        <th>
                  

                  {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn btn-ghost bg-[#dc1853] text-white btn-xs" onClick={()=>document.getElementById('my_modal_5').showModal()}><FaEye /></button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
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