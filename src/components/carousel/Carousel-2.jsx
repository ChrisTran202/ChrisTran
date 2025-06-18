import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import page1 from '../../assets/rimz-page-final.png'

function CarouselTwo() {
  const projects = [
    
    {
      title: 'RimZ',
      description: 'I really love the car scence, this was create for my car enthusiast people. Created with Vite, Redux, Tailwind CSS.',
      image: page1,
      link: 'https://rimz-one.vercel.app/'
    },
    {
      title: 'RimZ',
      description: 'I really love the car scence, this was create for my car enthusiast people. Created with Vite, Redux, Tailwind CSS.',
      image: page1,
      link: 'https://rimz-one.vercel.app/'
    },
    
  ];

  const settings = {
    dots: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: true
  };
 

  
    return (

    <div className='flex flex-col items-center justify-center' >
      <div className=" p-4">
        <div className="  mt-5 m-[10vw] w-[80vw] h-auto ">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className=''>
                <div className='flex flex-col items-center justify-center h-auto '>
                  <a target='_blank' href={project.link}><img src={project.image}  className='rounded-[2rem] h-[60vh] hover:scale-105 ease-in-out duration-500 cursor-pointer  ' /></a>
                  <div className="flex flex-col items-center justify-center text-center w-[20vw]">
                    <h1  src={project.title} className="text-white text-2xl">{project.title}</h1>
                    <p src={project.description} className="text-white text-lg">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
    </div>
  
  );
}

export default CarouselTwo;