import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import { Helmet } from 'react-helmet-async';
import menuCoverImg from '../../assets/menu/pizza-bg.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import UseMenu from '../../hook/UseMenu';
import Heading from '../../components/Heading/Heading';
import MenuCategory from './MenuCategory/MenuCategory';


const Menu = () => {
   const [menu]=UseMenu()
   const desserts= menu.filter(item=>item.category==='dessert')
   const salad= menu.filter(item=>item.category==='salad')
   const soup= menu.filter(item=>item.category==='soup')
   const pizza= menu.filter(item=>item.category==='pizza')
   const offered= menu.filter(item=>item.category==='offered')
   
   
    return (
        <div>
            <Helmet>
               <title>Menu</title>
            </Helmet>
            <Cover
            img={menuCoverImg}
            title={'Our Menu'}
            />
            

            <Heading
            heading={'Todays Offered'} subheading={'Dont miss '}
            />
            <MenuCategory items={offered} />
            <MenuCategory items={desserts} img={dessertImg} title={'dessert'} />

            <MenuCategory items={pizza} img={pizzaImg} title={'pizza'} />
            <MenuCategory items={soup} img={soupImg} title={'soup'} />
            <MenuCategory items={salad} img={saladImg} title={'salad'} />
        
           
        </div>
    );
};

export default Menu;