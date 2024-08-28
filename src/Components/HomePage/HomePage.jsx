import React from 'react'

import Carousel from './Carousel';
import HomeServices from './HomeServices';
import Projects from './Projects';
import Form from './../Contact Us/Form';

const HomePage = () => {
  return (

    <div>
        <Carousel/>
        <HomeServices/>
        <Projects/>
        <Form/>
        
    </div>
  )
}

export default HomePage