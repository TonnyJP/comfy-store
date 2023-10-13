import { Link } from 'react-router-dom';

import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';
const carouselImgs = [
    hero1,
    hero2,
    hero3,
    hero4
]
//{/* <img key={index} src={img} className="rounded-box h-full w-80 object-cover"/> */}
export const Hero = () => {
    return <div className='grid lg:grid-cols-2 gap-24 items-center '>
        <div>
            <h1 className='max-2-2xl text-4xl font-bold tracking-tight sm:text-6xl'>We are changing the way people shop </h1>
            <p className='mt-8 max-w-xl text-lg leading-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta rerum perferendis aspernatur cumque reprehenderit dolorum quo hic pariatur corrupti error.</p>
            <Link to="/products" className='mt-10 btn btn-primary'>Our products</Link>
        </div>
        <div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box'>
            <div className="carousel w-full">
               <div id="slide1" className="carousel-item relative w-full">
                 <img src={hero1} className="w-full" />
                 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                   <a href="#slide4" className="btn btn-circle">❮</a> 
                   <a href="#slide2" className="btn btn-circle">❯</a>
                 </div>
               </div> 
               <div id="slide2" className="carousel-item relative w-full">
                 <img src={hero2} className="w-full" />
                 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                   <a href="#slide1" className="btn btn-circle">❮</a> 
                   <a href="#slide3" className="btn btn-circle">❯</a>
                 </div>
               </div> 
               <div id="slide3" className="carousel-item relative w-full">
                 <img src={hero3} className="w-full" />
                 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                   <a href="#slide2" className="btn btn-circle">❮</a> 
                   <a href="#slide4" className="btn btn-circle">❯</a>
                 </div>
               </div> 
               <div id="slide4" className="carousel-item relative w-full">
                 <img src={hero4} className="w-full" />
                 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                   <a href="#slide3" className="btn btn-circle">❮</a> 
                   <a href="#slide1" className="btn btn-circle">❯</a>
                 </div>
               </div>
            </div>

        </div>
    </div>
}