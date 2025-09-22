import React, { useEffect } from 'react'
import InnerCommonBanner from './Sections/InnerCommonBanner';
import AboutService from './Sections/AboutService';

export default function ExerciseTherapy() {
    useEffect(() => {
        document.title = "Exercise Therapy";
        window.scroll(0,0)
      }, []);
  return (
    <div>
     <InnerCommonBanner />   
     <AboutService />   
    </div>
  )
}
