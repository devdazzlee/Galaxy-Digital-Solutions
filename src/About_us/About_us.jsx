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



        text1="DESIGN ."
        text2="DEVELOPMENT ."
        text3="MARKETING"
        para="Our Team Is Our Greatest Asset."
      />

<AboutCards_reverse/>
<Heading_Services
        text1="Marketing,"
        text2="Development,"
        text3="Layout"
        para="We Are Always Focused On Our Client's"
      />
<div className='my-14'  >
<About_Card3/>
</div>
<ThirdServices/>
<Sixth/>
<Footer/>
    </>
  )
}

export default About_us