import React from 'react'
import ResponsiveAppBar from '../Pages/Navbar/Navbar'
import MidSec from '../Pages/MidSec/MidSec'
import About_Cards from './Card_/About_Cards'
import AboutCards_reverse from './Card_/About_Card_reverse'
import About_Card3 from './Card_/About_Card3'
import ThirdServices from '../Pages/ThirdServices/ThirdServices'
import Sixth from '../Pages/Sixth/Sixth'
import Footer from '../Footer/Footer'
import Heading_Services from '../Heading_Services/Heading_Services'
import { ZoomInSharp } from '@mui/icons-material'

const About_us = () => {
  return (
    <>

<ResponsiveAppBar/>
<MidSec/>
<About_Cards/>
<Heading_Services
        text1="Service 1"
        text2="Service 2"
        text3="Service 3"
        para="This is a sample paragraph for the services."
      />

<AboutCards_reverse/>
<About_Card3/>
<ThirdServices/>
<Sixth/>
<Footer/>
    </>
  )
}

export default About_us