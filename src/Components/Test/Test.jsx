import React, { useEffect, useState } from 'react'
import TestBanner from './Sections/TestBanner'  
import TestHealthPackages from './Sections/TestHealthpackages' 
import Helmet from "react-helmet";
export default function Test() { 
  useEffect(() => {
    document.title = "Test Details Page";
    window.scroll(0,0) 
  }, []);
  return (
    <div>
      <Helmet> 
      <title>Anand Lab: Blood Test at Home, Diagnostic Lab Near Me</title> 
      <meta name="description" content="Anand Lab provides a wide range of diagnostic tests. Our most trusted pathology lab offers lab test booking online for all diagnostics and home collection."></meta>
    </Helmet>  
      <TestBanner /> 
      <TestHealthPackages /> 
    </div>
  )
}