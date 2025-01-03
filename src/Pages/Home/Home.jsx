import React from "react";
import Banner from "./Banner/Banner";
import PopluarMenu from "./PopularMenu/PopluarMenu";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopluarMenu></PopluarMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </>
  );
};

export default Home;
