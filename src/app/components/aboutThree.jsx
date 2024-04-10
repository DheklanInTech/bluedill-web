"use client"
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";

import {FiCheckCircle} from 'react-icons/fi'

import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/css/modal-video.css'

export default function AboutThree(){
    const [isOpen, setOpen] = useState(false);
    const countryData = [
        {
            name:"SOC2 AICPA",
            image:"/icons/image 38.svg"
        },
        {
            name:"PCI DSS",
            image:"/icons/image 39.svg"
        },
        {
            name:"GDPR",
            image:"/icons/image 40.svg"
        },
        {
            name:"ISO 27001",
            image:"/icons/image 41.svg"
        },
   
    ]
    return(
        <>
        <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
                    <div className="relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:mx-auto after:w-72 after:h-72 after:bg-gradient-to-tl after:to-amber-400 after:from-fuchsia-600 after:blur-[80px] after:rounded-full p-6 bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-slate-800">
                        <div className="relative overflow-hidden rounded-lg shadow-md dark:shadow-gray-800 z-1">
                            <div className="relative">
                                <video controls autoPlay loop>
                                    <source src="/images/modern.mp4" type="video/mp4"/>
                                </video>
                                <Link href="" className="absolute top-2 start-2 rounded-full p-0.5 bg-white dark:bg-slate-900 shadow dark:shadow-slate-800 z-10"><Image src="/icons/image 40.svg" width={28} height={28} className="h-7 w-7 rounded-full" alt=""/></Link>
                            </div>
    
                            <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                <Link href="#" onClick={() => setOpen(true)} className="lightbox lg:h-16 h-14 lg:w-16 w-14 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 hover:bg-amber-400 dark:hover:bg-amber-400 text-amber-400 hover:text-white duration-500 ease-in-out mx-auto">
                                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="mt-6">
                            {countryData.map((item,index)=>{
                                return(
                                    <Link href="" className="py-[6px] px-2 inline-flex items-center tracking-wider align-middle duration-500 text-sm text-center rounded bg-amber-400/5 hover:bg-amber-400 border border-amber-400/10 hover:border-amber-400 text-amber-400 hover:text-white font-semibold m-0.5" key={index}><Image src={item.image} width={20} height={20} className="h-5 w-5 me-1" alt="" /> {item.name}</Link>
                                )
                            })}
                        </div>
                    </div>

                    <div className="">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Security</h3>
                        <p className="text-slate-400 max-w-xl"> We take zero tolerance when it comes to security. Our user’s data and information is secured through various network handshakes. We go extra mile in sending, receiving and storing user data over a secured protocol. We have TLS protocol established on our network to provide a safer communication security between our users. BlueDill is a place of peace of mind and users can trust us to provide a secured system for their organizations. We are ISO 27001 compliant, SOC2 AICPA compliant PCI DSS compliant and GDPR compliant.</p>

                        <ul className="list-none text-slate-400 mt-4">
                            <li className="mb-2 flex items-center"><FiCheckCircle className="text-amber-400 h-5 w-5 me-2"/>Permission and Control</li>
                            <li className="mb-2 flex items-center"><FiCheckCircle className="text-amber-400 h-5 w-5 me-2"/>Contract Visibility</li>
                            <li className="mb-2 flex items-center"><FiCheckCircle className="text-amber-400 h-5 w-5 me-2"/> Data protection and Security</li>
                        </ul>

                    
                    </div>
                </div>
            </div>
            <ModalVideo
				channel="youtube"
				youtube={{ mute: 0, autoplay: 0 }}
				isOpen={isOpen}
				videoId="S_CGed6E610"
				onClose={() => setOpen(false)} 
			/>
        </>
    )
}