"use client"
import React from "react";
import Link from "next/link";

export default function AmazingFeatures(){
    const featureData = [
        {
            icon:"mdi mdi-flip-horizontal",
            title:'Education',
            desc:'For education sector, the need for continuous improvement in the contracting process is ever increasing. From sustaining knowledge to employing fresh talents and retaining them, from outsourcing a section renewal of agreement, BlueDill contract management system streamlines the entire process with automation.'
        },
        {
            icon:"mdi mdi-email-edit-outline",
            title:'Finance',
            desc:'Bluedill contract management systems (CMS) can be very beneficial for the finance sector, as they help to improve contract visibility, control, and compliance, which can ultimately result in better financial outcome.'
        },
        {
            icon:"mdi mdi-star-outline",
            title:'Government',
            desc:'Bluedill Contract management systems (CMS) can be highly beneficial for government institutions and organizations in managing short term, medium term and long term contracts.'
        },
        {
            icon:"mdi mdi-bookmark-outline",
            title:'Oil & Gas',
            desc:'For the oil and gas industry where complex contracts amd agreement are a common feature of operation, Bluedill contract management system play a significant role in getting much work done within little time.'
        },
        {
            icon:"mdi mdi-account-check-outline",
            title:'Legal',
            desc:'Bringing Bluedill automated contracts management system to the legal sector is a step ahead of clients needing legal services. With AI infused into Bluedill, we streamline legal processes, automate tasks and prevent necessary errors experienced in manual contract works.'
        },
        {
            icon:"mdi mdi-comment-outline",
            title:'Real Estate',
            desc:'The Real Estate industry is a complex and dynamic sector that requires efficient and effective management of contracts. Real estate contracts are essential in this industry as they outline the terms and conditions of transactions between parties involved in buying, selling, or leasing properties. Proper contract management is critical to ensure that these transactions are executed smoothly, and any disputes that arise can be resolved quickly.'
        },
    ]
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
                                        <Link href="" className="hover:text-amber-400 font-medium duration-500">Read More <i className="mdi mdi-arrow-right align-middle"></i></Link>
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