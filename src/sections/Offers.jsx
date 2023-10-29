import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const Offers = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      
      {/* images  */}
      <div className='flex-1'>
        <img src = {offer} width = {773} height = {687} className='object-contain w-full'/>  
      </div>  

    {/* text */}
      <div className="flex flex-1 flex-col">
        
        {/* <p className = "text-xl font-montserrat text-coral-red">Our summer collections</p> */}
        <h2 className = "font-palanquin text-4xl caplitalize font-bold lg:max-w-lg">
          {/* <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span> */}
        
          {/* <br/> */}
          <span className = "text-coral-red"> Special </span> 
          offer
        </h2>  

        <p className = "mt-4 lg:max-w-lg info-text"> Embrack on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparlleled value that sets us apart.
        </p>
        
        <p className='mt-6 lg:max-w-lg info text'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the lofttiest expectations. Your journey with us is nothing short of exceptional.</p>

        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label = "Shop now" iconURL = {arrowRight}/>
          <Button label = "Learn more" backgroundColor = "bg-white" borderColor = "border-slate-gray" textColor = "text-slate-gray"/>
        </div>  
      </div>
      
    </section>
  )
}

export default Offers