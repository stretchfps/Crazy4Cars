"use client";

import Image from "next/image"
import CustomButton from "./CustomButton"

const Hero = () => {
    const handleScroll = () => {

    }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Finding perfect cars — now on your fingertips</h1>

        <p className="__subtitle">
            Book a rental today, and enjoy your trip!
        </p>

        <CustomButton 
            title="Book Now "
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
            <Image src="/vwcar.png" alt="hero"
                fill className="object-contain" />
        </div>

        <div className="hero__image-overlay"/>

      </div>
    </div>
  )
}

export default Hero
