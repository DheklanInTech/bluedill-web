'use client'
import React,{useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import NavLight from "../components/navlight";
import Footer from "../components/footer";
import ClientsTwo from "../components/clientTwo";
import Faq from "../components/Faq";

import {FiCheckCircle} from "../assets/icons/vander"

import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/css/modal-video.css'


export default function AboutUs(){
    // useEffect(() => {
    //     document.documentElement.setAttribute("dir", "ltr");
    //     document.documentElement.classList.add('dark');
    //     document.documentElement.classList.remove('light');
    //   }, []);
    const [isOpen, setOpen] = useState(false);
    const [activeIndex,setActiveIndex] = useState(0)
    const teamData = [
        {
            image:'/images/client/01.jpg',
            name:"Calvin Carlo",
            title:'C.E.O'
        },
        {
            image:'/images/client/02.jpg',
            name:"Aliana Rosy",
            title:'Co-founder'
        },
        {
            image:'/images/client/03.jpg',
            name:"Sofia Razaq",
            title:'C.O.O.'
        },
        {
            image:"/images/client/04.jpg",
            name:"Ronny Jofra",
            title:'Director'
        },
        {
            image:"/images/client/05.jpg",
            name:"Cristina Murphy",
            title:'Manager'
        },
        {
            image:'/images/client/06.jpg',
            name:"Jimmi Shaa",
            title:'Operator'
        },
    ]
    return(
        <>
        <NavLight/>
        <section className="relative md:py-44 py-32 bg-no-repeat bg-bottom bg-cover" style={{backgroundImage:"url('/images/bg/bg-pages.jpg')"}}>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/70"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-6">
                    <div>
                        <h5 className="md:text-4xl text-3xl md:leading-normal leading-normal tracking-wider font-semibold text-white mb-0">About Us</h5>
                    </div>

                    <ul className="tracking-[0.5px] mb-0 inline-block mt-5">
                        <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Bluedill</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-white" aria-current="page">About Us</li>
                    </ul>
                </div>
            </div>
        </section>
        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="relative md:py-24 py-16">

            <div className="container relative">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
                    <div className="relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:m-auto after:w-96 after:h-96 after:bg-gradient-to-tl after:to-amber-400 after:from-fuchsia-600 after:blur-[80px] after:rounded-full p-6 bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-slate-800 lg:me-6">
                        <div className="relative overflow-hidden rounded-lg shadow-md dark:shadow-gray-800 z-1">
                            <Image src='/images/about.jpg' width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} alt=""/>
                        </div>
                    </div>
                   
                    <div className="">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold"><span className="font-bold">Work smarter,</span> <br/> by using AI not  manually</h3>
                        <p className="text-slate-400 max-w-xl">Usually, our colleagues dont jump in the air when they hear e-learning, but the AI videos created with Mortal.Ai have sparked motivation that we havent seen before.</p>

                        <ul className="list-none text-slate-400 mt-4">
                            <li className="mb-2 flex items-center"><FiCheckCircle className="text-amber-400 h-5 w-5 me-2"/> Digital Marketing Solutions for Tomorrow</li>
                            <li className="mb-2 flex items-center"><FiCheckCircle className="text-amber-400 h-5 w-5 me-2"/> Our Talented & Experienced Marketing Agency</li>
                            <li className="mb-2 flex items-center"><FiCheckCircle className="text-amber-400 h-5 w-5 me-2"/> Create your own skin to match your brand</li>
                        </ul>

                        <div className="mt-4">
                            <Link href="" className="hover:text-amber-400 font-medium duration-500">Read More <i className="mdi mdi-chevron-right text-[20px] align-middle"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="lg:flex justify-center">
                    <div className="lg:w-4/5">
                        <ul className="md:flex inline-block w-fit mx-auto flex-wrap justify-center text-center p-2 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                            <li role="presentation" className="inline-block md:w-1/3 w-full p-2">
                                <button className={`${activeIndex === 0 ? "text-white bg-amber-400" : " hover:text-amber-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"} px-5 py-3 text-start rounded-md w-full duration-500 `} onClick={()=>setActiveIndex(0)}>
                                    <h5 className="text-base font-semibold">Drag and drop</h5>
                                    <p className="text-sm mt-1">Artificial intelligence makes it fast easy to create content for your video creations.</p>
                                </button>
                            </li>
                            <li role="presentation" className="inline-block md:w-1/3 w-full p-2">
                                <button className={`${activeIndex === 1 ? "text-white bg-amber-400" : " hover:text-amber-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"} px-5 py-3 text-start rounded-md w-full duration-500 `} onClick={()=>setActiveIndex(1)}>
                                    <h5 className="text-base font-semibold">Improve your Talent</h5>
                                    <p className="text-sm mt-1">Artificial intelligence makes it fast easy to create content for your video creations.</p>
                                </button>
                            </li>
                            <li role="presentation" className="inline-block md:w-1/3 w-full p-2">
                                <button className={`${activeIndex === 2 ? "text-white bg-amber-400" : " hover:text-amber-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"} px-5 py-3 text-start rounded-md w-full duration-500 `} onClick={()=>setActiveIndex(2)} >
                                    <h5 className="text-base font-semibold">Go for Live</h5>
                                    <p className="text-sm mt-1">Artificial intelligence makes it fast easy to create content for your video creations.</p>
                                </button>
                            </li>
                        </ul>
    
                        <div id="StarterContent" className="mt-6">
                            {activeIndex === 0 ? 
                                <div>
                                    <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30  from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 px-6 pt-6">
                                        <Image src="/images/1.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="rounded-t-lg" alt=""/>
                                    </div>
                                </div> :''
                            }
                            {activeIndex === 1 ? 
                                <div>
                                    <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30  from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 px-6 pt-6">
                                        <Image src="/images/2.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="rounded-t-lg" alt=""/>
                                    </div>
                                </div> :''
                            }
                            {activeIndex === 2 ? 
                            <div>
                                <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30  from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 px-6 pt-6">
                                    <Image src="/images/3.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="rounded-t-lg" alt=""/>
                                </div>
                            </div>:''
                            }
                        </div>
                    </div>
                </div>
            </div>

         
          <Faq/>
          {/* <ClientsTwo/> */}
        </section>
        <Footer/>
    
        </>
    )
}