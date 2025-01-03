import { Helmet } from 'react-helmet-async';
import orderCover from '../../../src/assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import UseMenu from '../../hook/UseMenu';
import FoodCard from './FoodCard/FoodCard';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories=['salad','pizza','dessert','soup','drinks']
    const {category}=useParams()
    const initailIndex=categories.indexOf(category)
    const [tabIndex,setTabIndex]=useState(initailIndex)
    const [menu]=UseMenu();
    

    console.log(category)
    const desserts= menu.filter(item=>item.category==='dessert')
   const salad= menu.filter(item=>item.category==='salad')
   const soup= menu.filter(item=>item.category==='soup')
   const pizza= menu.filter(item=>item.category==='pizza')
   const offered= menu.filter(item=>item.category==='offered')
   
    return (
        <div>
             <Helmet>
               <title>Order</title>
            </Helmet>
            <Cover
            img={orderCover}
            title={'Order'}
            />
       <div className='py-10'>
       <Tabs defaultIndex={tabIndex} onSelect={(index)=>setTabIndex(index)}>
    <TabList >
      <Tab>Salad</Tab>
      <Tab>Pizza</Tab>
      <Tab>Dessert</Tab>
      <Tab>Soup</Tab>
      <Tab>Drinks</Tab>
    </TabList>

    <TabPanel>
     <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10'>
     {salad.map((item) => (
         <FoodCard key={item._id} item={item}></FoodCard>
      ))}
     </div>
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10'>
     {pizza.map((item) => (
         <FoodCard key={item._id} item={item}></FoodCard>
      ))}
     </div>
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10'>
     {desserts.map((item) => (
         <FoodCard key={item._id} item={item}></FoodCard>
      ))}
     </div>
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10'>
     {soup.map((item) => (
         <FoodCard key={item._id} item={item}></FoodCard>
      ))}
     </div>
    </TabPanel>
  </Tabs>
       </div>
        </div>
    );
};

export default Order;