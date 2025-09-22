import React, { useEffect } from 'react'
import InnerCommonBanner from './Sections/InnerCommonBanner';
import AboutService from './Sections/AboutService';

export default function ManualTherapy() {
    useEffect(() => {
        document.title = "Manual Therapy";
        window.scroll(0,0)
      }, []);
  return (
    <div>
     <InnerCommonBanner />   
     <AboutService />   
    </div>
  )
}
