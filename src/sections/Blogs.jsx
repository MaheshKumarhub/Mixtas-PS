import React, { useEffect } from 'react'
import Slider from 'react-slick'
import { blogs } from '../components/export'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDarkMode } from '../components/DarkModeContext'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Blogs = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
  }, [])

  const {darkMode, toggleDarkMode} = useDarkMode();

  return (
    <section id='blogs' className={`${darkMode ? 'dark bg-[#19191a}' : 'light bg-slate-200'} w-full lg:px-20 py-10 flex flex-col justify-center items-center gap-6 `}>
      <h1 data-aos='zoom-in' className='text-2xl text-slate-500 dark:text-white'>Latest POSTS</h1>
      <h1 data-aos='zoom-in' className='text-5xl font-semibold text-black dark:text-white text-center '>Blogs & InSights</h1>
      <div data-aos='slide-up' id='blogs-slider' className='w-full mt-3'>
        <Slider {...settings}>
          {
            blogs.map((item,index)=> (
              <div key={index} id='product-box' className='flex flex-col justify-center items-start gap-1 bg-white rounded-xl dark:bg-black'>
                <img src={item.image} alt="blogs" className='w-full h-[300px] ' />
                <div className='p-2'>
                  <div id='content-box' className='flex justify-start items-center gap-2 '>
                    <h1 className='text-lg text-black font-semibold dark:text-white'>{item.author}</h1>
                    <h1 className='italic dark:text-white'>{item.date}</h1>
                  </div>
                  <h1 className='text-2xl font-semibold text-black dark:text-white'>{item.title}</h1>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </section>
  )
}

export default Blogs
