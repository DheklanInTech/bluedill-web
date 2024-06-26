"use client"
import React, {useEffect} from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import BrandLogo from "./components/brandLogo";
import Features from "./components/features";
import AboutOne from "./components/aboutOne";
import AboutTwo from "./components/aboutTwo";
import AboutThree from "./components/aboutThree";
import AmazingFeatures from "./components/amazingFeatures"; 
import { TypeAnimation } from 'react-type-animation';


export default function Index(){
   

    return(
        <>
       <Navbar/>
        <section className="relative overflow-hidden pt-48 after:content-[''] after:absolute after:inset-0 after:mx-auto after:w-[56rem] after:h-[56rem] after:bg-gradient-to-tl after:to-amber-400/30  after:from-fuchsia-600/30 dark:after:to-amber-400/50 dark:after:from-fuchsia-600/50 after:blur-[200px] after:rounded-full after:-z-1">
            <div className="container relative z-2">
                <div className="grid grid-cols-1 text-center">
                    <div className="">
                        <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl mb-5">The First Agentless Cloud Contract<br/>Life Cycle Management <br /> System for 
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Finances',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Legal Firms',
                                    1000,
                                    'Healthcare',
                                    1000,
                                    'Energy and Power',
                                    1000,
                                    'Oil and Gas',
                                    1000,
                                    'Real Estate',
                                    1000,
                                    'Procurement',
                                    1000,
                                    'Education',
                                    1000,
                                    'And More',
                                    1000

                                ]}
                                wrapper="span"
                                speed={10}
                                className="typewrite bg-gradient-to-br from-amber-400 to-fuchsia-600 text-transparent bg-clip-text ms-4"
                                repeat={Infinity}
                                />
                        </h4>
                        <p className="text-slate-400 dark:text-white/60 text-lg max-w-xl mx-auto"> For Review, Monitoring and Approval of Contracts Documents
                        on the go!</p>

                        <div className="mt-6">
                            <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded-md">Try For Free</Link>

                            <p className="text-slate-400 dark:text-white/60 text-sm mt-3">No credit card required. Free 14-days trial</p>
                        </div>
                    </div>
                    <div className="relative mt-8 z-3">
                        <Image src="/images/classic01.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} alt="" className="mover"/>
                    </div>
                </div>
            </div>
            
            <div className="relative after:content-[''] after:absolute lg:after:-bottom-40 after:-bottom-28 after:end-0 after:start-0 after:mx-auto xl:after:w-[56rem] lg:after:w-[48rem] md:after:w-[32rem] after:w-[22rem] xl:after:h-[56rem] lg:after:h-[48rem] md:after:h-[32rem] after:h-[22rem] after:border-2 after:border-dashed after:border-slate-700/10 dark:after:border-slate-200/10 after:rounded-full after:-z-1 before:content-[''] before:absolute lg:before:-bottom-72 before:-bottom-56 before:end-0 before:start-0 before:mx-auto xl:before:w-[72rem] lg:before:w-[64rem] md:before:w-[48rem] before:w-[24rem] xl:before:h-[72rem] lg:before:h-[64rem] md:before:h-[48rem] before:h-[24rem] before:border-2 before:border-dashed before:border-slate-700/10 dark:before:border-slate-200/10 before:rounded-full before:-z-1"></div>
        </section>

        <section className="pt-6">
          <BrandLogo/>
        </section>

        <section className="relative md:py-24 py-16">
          <Features classlist="container relative"/>
          <AboutOne/>
          <AboutTwo/>
          <AmazingFeatures/>
          <AboutThree/>
        </section>
        <Footer/> 
        </>
    )
}