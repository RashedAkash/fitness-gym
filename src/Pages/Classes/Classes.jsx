import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import offDay from '../../assets/offday.jpeg'
import PageTitle from '../../components/PageTitle/PageTitle';
import img from '../../assets/ban5.jpg'
import restDay from '../../assets/rest.png'
import Title from '../../components/Title/Title';
import useClasses from '../../Hooks/useClasses';
import ClassesTable from './AllClasses';
import FeaturedClasses from '../Home/FeaturedClasses';
import AllClasses from './AllClasses';



const Classes = () => {
  const { classes } = useClasses();
 
  return (
    <div>
      <div className=' pb-16'>
        <PageTitle img={img} text='Classes' />        
      </div> 
      <div className=' pb-10'>
        <Title heading='CLASSES TIMETABLE' subheading='our classes'/>
      </div>

      <div >
          <Tabs>
    <TabList>
      <Tab>Saturday</Tab>
      <Tab>Sunday</Tab>
      <Tab>Monday</Tab>
      <Tab>Tuesday</Tab>
      <Tab>Wednesday</Tab>
      <Tab>Thursday</Tab>
      <Tab>Friday</Tab>
    </TabList>

    <TabPanel>
            <div className='py-10'>
               <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Class</th>
        <th>Trainer</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
       {
                classes?.map((clas,index)=> <tr key={clas._id}>
                      <th>{index + 1 }</th>
                  <td>{clas?.clas }</td>
                  <td>{clas?.trainer }</td>
                  <td>{ clas?.time}</td>
      </tr>)
              }
      
      
    </tbody>
  </table>
</div>
             
      </div>
    </TabPanel>
    <TabPanel>
            <div className='py-10'>
               <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Class</th>
        <th>Trainer</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
       {
                classes?.map((clas,index)=> <tr key={clas._id}>
                      <th>{index + 1 }</th>
                  <td>{clas?.clas }</td>
                  <td>{clas?.trainer }</td>
                  <td>{ clas?.time}</td>
      </tr>)
              }
      
      
    </tbody>
  </table>
</div>
             
      </div>
    </TabPanel>
    <TabPanel>
            <div className='py-10'>
               <img className='w-[300px] mx-auto' src={restDay} alt="" />
             
      </div>
    </TabPanel>
    <TabPanel>
            <div className='py-10'>
               <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Class</th>
        <th>Trainer</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
       {
                classes?.map((clas,index)=> <tr key={clas._id}>
                      <th>{index + 1 }</th>
                  <td>{clas?.clas }</td>
                  <td>{clas?.trainer }</td>
                  <td>{ clas?.time}</td>
      </tr>)
              }
      
      
    </tbody>
  </table>
</div>
             
      </div>
    </TabPanel>
    <TabPanel>
            <div className='py-10'>
               <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Class</th>
        <th>Trainer</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
       {
                classes?.map((clas,index)=> <tr key={clas._id}>
                      <th>{index + 1 }</th>
                  <td>{clas?.clas }</td>
                  <td>{clas?.trainer }</td>
                  <td>{ clas?.time}</td>
      </tr>)
              }
      
      
    </tbody>
  </table>
</div>
             
      </div>
    </TabPanel>
    <TabPanel>
            <div className='py-10'>
               <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Class</th>
        <th>Trainer</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
       {
                classes?.map((clas,index)=> <tr key={clas._id}>
                      <th>{index + 1 }</th>
                  <td>{clas?.clas }</td>
                  <td>{clas?.trainer }</td>
                  <td>{ clas?.time}</td>
      </tr>)
              }
      
      
    </tbody>
  </table>
</div>
             
      </div>
    </TabPanel>
   
    <TabPanel>
            <div className='py-10'>
              <img className='w-[300px] mx-auto' src={offDay} alt="" />
      </div>
    </TabPanel>
  </Tabs>
      </div>
      
      <div>
        <AllClasses />
      </div>
    </div>
  );
};

export default Classes;