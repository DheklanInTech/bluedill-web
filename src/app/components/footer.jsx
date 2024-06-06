"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { aboutLinks, solutionLinks, supportLinks } from './links'
import {featureData} from './readmoreContent';

import { FiLinkedin, FiFacebook, FiInstagram, FiTwitter, FiMail,FiFileText} from '../../assets/icons/vander'

export default function Footer(){
    return(
        <>
         <div className="relative">
            <div className="shape absolute xl:-bottom-[30px] lg:-bottom-[16px] md:-bottom-[13px] -bottom-[5px] start-0 end-0 overflow-hidden z-1 rotate-180 text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <footer className="relative bg-gray-900 overflow-hidden">
            <span className="absolute blur-[200px] w-[300px] h-[300px] rounded-full top-0 -start-[0] bg-gradient-to-tl to-amber-400  from-fuchsia-600 z-0"></span>
            <div className="container-fluid relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center">
                        <div className="">
                            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl text-white tracking-normal mb-4">Start Your Free Trail.</h4>
                            <p className="text-white/70 text-lg max-w-xl mx-auto">The First Agentless Cloud Contract Life Cycle Management System!</p>

                            <div className="mt-6">
                                <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-amber-400 border-gray-800 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-400 text-white rounded-md">Join Now!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative text-center">
                <div className="grid grid-cols-1 border-t border-gray-800 dark:border-slate-800">
                    <div className="py-[30px] px-0">
                        <div className="grid md:grid-cols-2 items-center">
                            <div className="md:text-start text-center">
                                <Link href="#" className="text-[22px] focus:outline-none">
                                    <Image src="/Logowhite.svg" width={127} height={24} className="mx-auto md:me-auto md:ms-0" alt=""/>
                                </Link>
                            </div>

                            <ul className="list-none footer-list md:text-end text-center mt-6 md:mt-0 space-x-1">
                             
                          
                                <li className="inline"><Link href="/" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-slate-800 rounded-md hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400 text-slate-300 hover:text-white"><FiLinkedin className="h-4 w-4 align-middle"/></Link></li>
                                <li className="inline"><Link href="" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-slate-800 rounded-md hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400 text-slate-300 hover:text-white"><FiFacebook className="h-4 w-4 align-middle"/></Link></li>
                                <li className="inline"><Link href="/" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-slate-800 rounded-md hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400 text-slate-300 hover:text-white"><FiInstagram className="h-4 w-4 align-middle"/></Link></li>
                                <li className="inline"><Link href="" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-slate-800 rounded-md hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400 text-slate-300 hover:text-white"><FiTwitter className="h-4 w-4 align-middle"/></Link></li>
                                <li className="inline"><Link href="mailto:" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-slate-800 rounded-md hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400 text-slate-300 hover:text-white"><FiMail className="h-4 w-4 align-middle"/></Link></li>
                                <li className="inline"><Link href="" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-slate-800 rounded-md hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400 text-slate-300 hover:text-white"><FiFileText className="h-4 w-4 align-middle"/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container relative flex items-center justify-between w-full py-8'>
            <div className='flex-auto  w-full'>
               <div className='grid md:grid-cols-3 grid-cols-2'>
                  <div>
                     <p>About</p>
                     {aboutLinks.map((item) => {
                        return (
                           <Link href={item.path} key={item.linkname} className='flex flex-col text-gray-400 mt-4 font-light md:text-xs text-sm   md:w-1/2 w-full'> 
                              {item.linkname}
                           </Link>
                        )
                     })}
                  </div>
                  <div>
                     <p>Support</p>
                     {supportLinks.map((item) => {
                        return (
                           <Link href={item.path} key={item.linkname} className='flex flex-col text-gray-400 mt-4 font-light md:text-xs text-sm  md:w-1/2 w-full'>
                              {item.linkname}
                           </Link>
                        )
                     })}
                  </div>
                  <div>
                     <p>Solutions</p>
                     {/* {solutionLinks.map((item) => {
                        return (
                           <Link href={item.path} key={item.linkname} className='flex flex-col text-gray-400 mt-4 font-light md:text-xs text-sm  md:w-1/2 w-full'>
                              {item.linkname}
                           </Link>
                        )
                     })} */}
                     {featureData.map((item)=>{
                        return <Link href={'readmore/?page=' + item.id} key={item.id} className='flex flex-col text-gray-400 mt-4 font-light md:text-xs text-sm  md:w-1/2 w-full'>{item.title}</Link>
                     })}
                  </div>
               </div>
            </div>
            
         </div>

            <div className="py-[30px] px-0 border-t border-gray-800 dark:border-slate-800">
                <div className="container relative text-center">
                    <div className="grid grid-cols-1">
                        <div className="text-center flex items-center gap-4">
                            <p className="text-gray-400 text-xs">© {new Date().getFullYear()} Bluedill</p>

                            <p className="text-gray-400 text-xs"><Link href="/terms"  className="text-reset">Terms and conditions</Link>.</p>

                            <p className="text-gray-400 text-xs"><Link href="/privacy"  className="text-reset">Privacy Policy</Link>.</p>
                          
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}