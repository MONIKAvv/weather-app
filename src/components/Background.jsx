import React, { useEffect, useState } from 'react'
import Clear from '../assets/images/clear.png'
import Fog from '../assets/images/fog2.png'
import Cloudy from '../assets/images/cloudy.png'
import Rainy from '../assets/images/rain.png'
import Snow from '../assets/images/snow.png'
import Stormy from '../assets/images/storm.png'
import { useStateContext } from '../context'

export default function Background() {
  const {weather} = useStateContext();
  const [image, setImage] = useState('Clear');

  useEffect(() => {
    if(weather.conditions){
      let imageAsCond = weather.conditions
      if(imageAsCond.toLowerCase().includes('clear')){
        setImage(Clear)
      }else if(imageAsCond.toLowerCase().includes('cloud')){
        setImage(Cloudy)
      }else if(imageAsCond.toLowerCase().includes('rain')){
        setImage(Rainy)
      }else if(imageAsCond.toLowerCase().includes('snow')){  //includes checks that the string is present or not and toLowercase case ko insensitive bana deta h 
        setImage(Snow)
      }else if(imageAsCond.toLowerCase().includes('fog')){
        setImage(Fog)
      }else if(imageAsCond.toLowerCase().includes('thunder') || imageAsCond.toLowerCase().includes('storm'))
        setImage(Stormy)
    }

  }, [weather])

  return (
    <img
    src={image}
    alt='image'
    className='fixed left-0 top-0 -z-[10]'
    />
  )
}
