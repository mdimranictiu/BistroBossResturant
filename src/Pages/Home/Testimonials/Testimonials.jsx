import Heading from "../../../components/Heading/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactStars from "react-rating-stars-component";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
      })
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  return (
    <section className="py-5">
      <Heading
        heading={"Testimonials"}
        subheading={"---What Our Clients Say---"}
      />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {testimonials.map((test) => (
          <SwiperSlide key={test._id}>
            <>
            <div className="w-4/5 flex flex-col items-center gap-10 mx-auto h-[320px] ">
             <div className="flex flex-col items-center">
               <div className="pt-20">
               <ReactStars 
    count={5}
    size={42}
    value={test.rating}
    isHalf={true}
    edit={false}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#c5600e"
  />
               </div>
             </div>
             <h4 className="text-center">
                {test.details}
             </h4>
             <h1 className="text-2xl">{test.name}</h1>
            
            </div>
            </>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
