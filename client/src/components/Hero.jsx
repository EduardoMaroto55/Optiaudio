import React, { useState } from "react"
import Logo from "../assets/logo.png"
import Arrow from "../assets/angle.png"
import { RxDotFilled } from 'react-icons/rx';
import { Link } from "react-router-dom";
export default function Hero() {


    const slides = [
        { url: "../../Hero--blue.jpg", title: "anteojos" },
        { url: "../../hero2.jpg", title: "amanecer" }

    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {  
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    const backgroundImageStyle = {
        backgroundImage: `linear-gradient(90deg,  hsla(212, 84%, 37%, 0.4) 0%, hsla(183, 42%, 32%, 0.4) 100%), url(${slides[currentIndex].url})`
    };

    return (
     
            <section data-test="heroSection" className="w-full h-[80vh] relative ">
                <div style={backgroundImageStyle} className="w-full h-full  bg-center object-cover" />
                <div className="max-w-[1140px] m-auto">
                    <div className="absolute top-[35%] w-full md:h-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
                        <h1 className="font-extrabold text-4xl p-0 md:text-5xl" >Cuida Tu <span className="rounded-2xl px-2 text-white bg-secondary">Vista</span> y Tu <span className="leading-[1.7]  rounded-2xl px-2 text-white bg-secondary">Audición</span></h1>
                        <h3 className="text-4x1 text-white py-4 italic font-bold">La Clínica de Excelencia en Óptica y Audiología</h3>
                    </div>
                </div>
                <div className='hidden lg:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 mx-5  text-white cursor-pointer'>
                     <img src={Arrow} className="hero--chev" onClick={prevSlide} alt="previa"/>
                 </div>
                 <div className='hidden lg:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 mx-5  text-white cursor-pointer'>
                     <img src={Arrow} className="hero--chev--right" onClick={nextSlide} alt="siguiente"/>
                 </div>
             <div className='flex mt-auto absolute top-[92%] left-[50%]  justify-center py-2'>{slides.map((slide, slideIndex) =>
                 (
                     <div key={slideIndex}
                         onClick={() => goToSlide(slideIndex)}
                         className='text-2xl cursor-pointer' >
                         <RxDotFilled />
                     </div>
                 ))}
                 </div>
            </section>
        /*  
             
         */

    )
}