import React from 'react';

const ApplyTrainer = () => {
  return (
    <div className=' py-16'>
     <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Your Information</h2>

    <form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200" >Username</label>
                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" >Email Address</label>
                <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-white dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200" >About you</label>
                <input id="aboutAddress" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-white dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            

            <div>
                <label className="text-gray-700 dark:text-gray-200" >Age</label>
                <input id="ageConfirmation" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-white dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200" >Skills</label> <br />
          
                <select className="select select-bordered w-full max-w-xs">
  <option disabled selected>Who shot first?</option>
  <option>Han Solo</option>
  <option>Greedo</option>
</select>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200" >Available Time in a week
</label> <br />
                <select className="select select-bordered w-full max-w-xs">
  <option disabled selected>Who shot first?</option>
  <option>Han Solo</option>
  <option>Greedo</option>
</select>
            </div>
            <div>
                <label className="text-gray-700  dark:text-gray-200" > Available time in a day</label> <br />
                <select className="select select-bordered w-full max-w-xs">
  <option disabled selected>Who shot first?</option>
  <option>Han Solo</option>
  <option>Greedo</option>
</select>
            </div>
            <div>
                <label className="text-gray-700  dark:text-gray-200" > Profile Image
</label> <br />
                <input type="file" className="file-input w-full max-w-xs" />
            </div>
        </div>

        <div className="flex justify-end mt-6">
            <button type='submit' className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#dc1853] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Applied Button</button>
        </div>
    </form>
</section>
    </div>
  );
};

export default ApplyTrainer;