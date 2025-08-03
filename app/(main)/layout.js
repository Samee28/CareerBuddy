 import React  from 'react'
 import { Tiro_Tamil } from 'next/font/google';

 const MainLayout = ({ children }) => {
   //redirect to onboarding
    return   <div 
    className="container mx-auto mt-24 mb-20">   {children }
     </div>;
   
 };
 
 export default MainLayout
 