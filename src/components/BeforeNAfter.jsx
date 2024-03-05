import {React, useState, useRef, useEffect} from 'react'
import  image10  from '../assets/image10.png';
import  image11  from '../assets/image11.png';
import { sliderContent } from '../constants';

const BeforeNAfter = () => {

  const [active, setActive] = useState(0);

  const [prev, setPrev] = useState(0);

  const contentRef = useRef(null);

  const prevRef = useRef(null);

  const nextRef = useRef(null);

  const nameRef = useRef("");

  const Slide = (type) => {
    let local;
    if (type === "next") {
      local = active + 1;
      sliderContent.length - 1 < local ? setActive(0) : setActive(local);
    }
    if (type === "prev") {
      local = active - 1;
      local < 0 ? setActive(sliderContent.length - 1) : setActive(local);
    }
    setPrev(active);
  };

  useEffect(() => {
    contentRef.current.style.bottom = "-100%";
    prevRef.current.style.left = "-10%";
    nextRef.current.style.right = "-10%";
    setTimeout(() => {
      nameRef.current.innerText = sliderContent[active].name;
      contentRef.current.style.bottom = "0%";
      prevRef.current.style.left = "0%";
      nextRef.current.style.right = "0%";
    }, 1000);
  }, [active]);


  return (
    <div className=' section w-cover h-[600px] rounded-xl shadow-lg overflow-hidden bg-white'>
      <div className='w-[80%] h-[600px] relative'>
        {sliderContent.map((slider, i) => {
          return (
            <img src={slider.img} 
            key={i} 
            alt="slideImg" 
            className={`w-full h-[600px] absolute object-cover inset-0 duration-[2.5s] ease-out transition-[clip-path]
            ${ i === active ? "clip-visible" : "clip-hidden"}`} />
          );
        })}
      <img
            src={sliderContent[prev].img}
            alt="previmg"
            className="w-full h-full  object-cover"
          />
      <div className=''>
        <button id="back" ref={prevRef} className='left-[0]' onClick={() => Slide("prev")}>
        <ion-icon  name="arrow-back-outline" size="large" ></ion-icon>
        </button>
        <button id='forward' ref={nextRef} className='right-[0]' onClick={() => Slide("next")}>
        <ion-icon  name="arrow-forward-outline" size="large"></ion-icon>
        </button>
      </div>
      <div className='content' ref={contentRef}>
        <h1 ref={nameRef}>{sliderContent[0].name}</h1>
        <p>THE RENO THE RENO THE RENO</p>
      </div>
      </div>
    </div>
  )
}

export default BeforeNAfter