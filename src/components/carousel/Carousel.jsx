
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import page1 from '../../assets/rimz-page-final.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    title: '',
    description: '.',
    image: '',
  },
  {
    title: 'RimZ',
    description: 'I really love the car scence, this was create for my car enthusiast people. Created with Vite, Redux, Tailwind CSS.',
    image: page1,
    link: 'https://rimz.vercel.app/'
  },
  {
    title: '',
    description: '',
    image: '',
    
  },
];

const Carousel = () => {
  return (
    <div className='flex items-center justify-center h-[80%] m-4 '>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay ]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        hashNavigation={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          700: { slidesPerView: 2 },
          1500: { slidesPerView: 3 },
        }}
        
      >
        
        {projects.map((project, index) => (
          <SwiperSlide key={index}
            
          >
            <a href={projects.link} target='_blank'>
            <div className='bg-white shadow-[#ffa600] shadow-lg rounded-lg overflow-hidden bg-clip-text text-transparent hover:scale-350 ease-in-out duration-400 hover:shadow-xl'>
              
              <img
                src={project.image}
                alt={project.title}
                className='w-full md:[20rem] h-auto object-cover'
              />
              <div className='flex flex-col justify-center text-center align-center p-4'>
                <h3 className='text-xl font-semibold my-[6vh] my:[10vh] mr-10'>{project.title}</h3>
                <p className='mt-2 text-white-600'>{project.description}</p>
                <ref href={projects.link} target='_blank' className='text-[#ff9d48] hover:text-[#ff9d48] hover:scale-125 ease-in-out duration-200 cursor-pointer'>
                  Live Site
                  
                </ref>
              </div>
              
            </div> 
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
};

export default Carousel;
