"use client"
import React from "react";
import Link from "next/link";
import { featureData } from "./readmoreContent";

export default function AmazingFeatures(){
    
    return(
        <>
        <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Drive business and organization intelligence with
                    Bluedill contracts lifecycle management</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Manage contracts renewal process. Streamline contracts management process Gain more visibility on your data. Make quicker decision.
Tool-up your sales team to make quicker decision. Automate time-consuming tasks. Real time update on your contracts process!</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {featureData.map((item, index) =>{
                        return(
                            <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg bg-white dark:bg-slate-900" key={index}>
                                <i className={`${item.icon} text-4xl bg-gradient-to-tl to-amber-400 from-fuchsia-600 text-transparent bg-clip-text`}></i>
        
                                <div className="content mt-7">
                                    <Link href="" className="title h5 text-lg font-medium hover:text-amber-400 duration-500">{item.title}</Link>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>
                                    
                                    <div className="mt-5">
                                        <Link href={`/readmore/?page=${item.id}`} className="hover:text-amber-400 font-medium duration-500">Read More <i className="mdi mdi-arrow-right align-middle"></i></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}