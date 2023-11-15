import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import { Fade } from 'react-slideshow-image';
import { Zoom } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'

const MidSec = () => {

  const texts = [
    "Brand Development",
    "Digital Marketing",
    "Dropshipping",
    "Mobile Development",
    "E-Commerce"

  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        if (currentIndex <= texts[currentTextIndex].length) {
          setCurrentText(texts[currentTextIndex].slice(0, currentIndex));
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsTyping(false);
          setIsDeleting(true);
        }
      } else if (isDeleting) {
        if (currentIndex > 0) {
          setCurrentText(texts[currentTextIndex].slice(0, currentIndex - 1));
          setCurrentIndex((prevIndex) => prevIndex - 1);
        } else {
          setIsDeleting(false);
          setTimeout(() => {
            setCurrentText('');
            setCurrentIndex(0);
            setCurrentTextIndex((prevTextIndex) =>
              (prevTextIndex + 1) % texts.length
            );
            setIsTyping(true);
          }, 1000); // Delay before starting the next text
        }
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentIndex, currentTextIndex, isTyping, isDeleting]);


  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }
  const slideImages = [
    {
      url: 'https://brandians.com/wp-content/uploads/2023/05/digital-marketing.jpg'

    },
    {
      url: 'https://brandians.com/wp-content/uploads/2023/05/online-store.jpg'

    },
    {
      url: 'https://brandians.com/wp-content/uploads/2023/06/02.jpg'

    },
  ];



  return (
    <div className='flex justify-center sm:justify-start ml-4 sm:ml-16 py-8 sm:py-16'>

      <div className='w-full sm:w-2/3 md:w-2/5 lg:w-2/6'>
        <h1 className='text-white text-4xl sm:text-4xl font-bold'>
          Reach New Heights! Elevate <br /> Your Brand with
        </h1>
        <div style={{ color: "#663E81" }} className="text-4xl capitalize font-bold py-4 whitespace-no-wrap overflow-hidden">
          {currentText || '\u00A0'} {/* Use a non-breaking space to avoid empty display */}
        </div>
        <p className='sm:w-5/6 pb-3' style={{ marginTop: '20px', fontSize: '1.2rem', color: 'white' }}>
          Upgrade your brand with our all-inclusive branding & marketing solutions.
        </p>
        {/* <button className='bg-gradient-to-r from-purple-600 via-pink-400 px-6 sm:px-8 py-3 font-bold rounded text-white'> */}
        <Link    to={'/Contact-us'}>
  
            
        <button  style={{"background" : "linear-gradient(20deg, #5A2E7F, #CA669D, #E499C2)"}} className=' px-6 sm:px-8 py-3 font-bold rounded text-white'>
          Let's Talk
        </button>
            </Link> 
        <p className='text-white py-2'>
          Based on 10,000+ reviews.
        </p>
      </div>

    </div>

  )
}

export default MidSec