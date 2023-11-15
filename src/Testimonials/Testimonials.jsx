import React from 'react'
import ResponsiveAppBar from '../Pages/Navbar/Navbar'
import MidSec from '../Pages/MidSec/MidSec'
import Testimonials_Card from './Testimonals_Card'
import Heading_Services from '../Heading_Services/Heading_Services'
import Testimonial_Card_Sec from './Testimonal_Card_'
import Footer from '../Footer/Footer'
import Seventh from '../Seventh/Seventh'
import Sixth from '../Pages/Sixth/Sixth'

const Testimonials = () => {
  return (
    <>
    <ResponsiveAppBar/>
    <MidSec/>
    <Testimonials_Card/>
    <Heading_Services

text1="DESIGN ."
text2="DEVELOPMENT ."
text3="MARKETING"
para="Unique Challenges Require Unique Solutions"
/>
<Testimonial_Card_Sec/>
<Sixth/>
<Seventh/>
<Footer/>
  
    </>
  )
}

export default Testimonials