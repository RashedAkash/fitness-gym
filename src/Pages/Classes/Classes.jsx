import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import offDay from '../../assets/offday.jpeg'

const Classes = () => {
  return (
    <div>
      
      <div>
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
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <img className='w-[300px] mx-auto' src={offDay} alt="" />
    </TabPanel>
  </Tabs>
      </div>
    </div>
  );
};

export default Classes;