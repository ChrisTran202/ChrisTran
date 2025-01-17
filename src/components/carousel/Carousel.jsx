import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Rim",
    description: "A brief description of Project 2.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3.",
    image: "https://via.placeholder.com/300x200",
  },
];

const Carousel = () => {
  return (
    <div className="flex items-center justify-center h-[80%] m-4 ">
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={60}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}
            className=" hover:scale-250 ease-in-out duration-400 hover:shadow-xl  "
          >
            <div className="bg-white shadow-[#ffa600] shadow-lg rounded-lg overflow-hidden bg-clip-text text-transparent">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
              <div className="flex justify-center align-center p-4">
                <h3 className="text-xl font-semibold my-[10vh] mr-10">{project.title}</h3>
                <p className="mt-2 text-white-600">{project.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
