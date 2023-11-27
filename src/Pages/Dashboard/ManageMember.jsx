import React from 'react';
import Title from '../../components/Title/Title';
import useUsers from '../../Hooks/useUsers';
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2';


const rejectionMessage = `Sending motivational quotes, success stories, or encouraging words to keep members motivated and focused on their fitness journey.`;
const ManageMember = () => {
  const { users } = useUsers();
  console.log(users);
    const sendEmail = (userEmail) => {
    const serviceId = 'service_zv4ir8a'; // Replace with your EmailJS service ID
    const templateId = 'template_3r7r9ww'; // Replace with your EmailJS template ID
    const userId = 'VjgLXv1xV-qLzaGnj'; // Replace with your EmailJS user ID

    emailjs.send(serviceId, templateId, {
      to_email: userEmail,
       message: rejectionMessage,
      // Other template variables if needed
    }, userId)
      .then((response) => {
        console.log('Email sent!', response.status, response.text);
        // Perform further actions upon successful email sending (if needed)
        Swal.fire({
      title: "Congratulation!",
      text: "Your email has been send.",
      icon: "success"
    });
      })
      .catch((error) => {
        console.error('Email failed to send:', error);
        // Handle errors if the email fails to send
      })
  };
  return (
    <div>
      <div className='py-10'>
        <Title heading='Manage member' subheading='member' />
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
        <th>Send Mail</th>
        
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
                   <button onClick={()=>sendEmail(user._id, user.email)} className=' text-white btn bg-[#dc1853]'>Send Instruction</button>
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

export default ManageMember;