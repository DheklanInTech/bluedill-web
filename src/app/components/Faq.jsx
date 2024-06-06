"use client"
import React, { useState } from "react";
import Link from "next/link";
import {MdKeyboardArrowDown} from '../../assets/icons/vander'

export default function Faq(){
    const [activeIndex, setActiveIndex] = useState(1)
    const accordionData = [
        {
            id:1,
            title:"What happens when my subscription expires?",
            description:"When your subscription expires, most services provided on our platform will cease working until the subscription is renewed, Basic free service will not be altered by subscription expiration.",
        },
        {
            id:2,
            title:"Can i extend my subscription?",
        description:"Yes subscription can be extended on monthly or annual basis from the pricing page or y speaking to the sales team by phone or email.",
        },
        {
            id:3,
            title:"Can i downgrade my subscription?",
            description:"Subscriptions cannot be downgraded to purchase different subscription, current plan have to be exhaust and then new plans can be purchased. Purchasing a different plan while on active plan will override the existing plan.",
        },
        {
            id:4,
            title:"What happens to all document not in use?",
            description:"We handle document on our system according to our data retention policy. Docunents not in use are discarded according to GDPR policy.",
        },
        {
            id:5,
            title:"Is my chat encrypted?",
            description:"Our chat system is for document discussions and is end-to-end encrypted, meaning that no one else outside the chat can have access to to the discussion on the chat.",
        },
        {  
            id:6,
            title:"Can i sign document into my phone?",
            description:"Bluedill CMS is flexible across smart devices including mobile phones, tablets and computers. This provide contract automation on the go withount boundaries associated with any device.",
        },
        {
            id:7,
            title:"What happens to my data?",
            description:"We handle data according to GDRP policy. We only collect required data to help us process documents during automation process. Some of this data are collected during sign-up on our system while others are collected after sign-up.",
        },
    ]
    return(
        <>
        <div className="container relative md:mt-24 mt-16">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center md:gap-[30px]">
                    <div className="lg:col-span-4 md:mb-0 mb-8">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Have a question?</h3>

                        <p className="text-slate-400 max-w-xl mx-auto mb-6">Artificial intelligence makes it fast easy to create content for your blog, social media, website, and more!</p>

                        <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-amber-400 border-gray-100 dark:border-gray-800 hover:border-amber-400 dark:hover:border-amber-400 text-slate-900 dark:text-white hover:text-white rounded-md">Contact Us</Link>
                    </div>

                    <div className="lg:col-span-8 md:mt-0 mt-8">
                        {accordionData.map((item,index)=>{
                            return(
                                <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4" key={index}>
                                    <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                        <button type="button" onClick={()=>setActiveIndex(item.id)} className={`${activeIndex === item.id ? "bg-gray-50 dark:bg-slate-800 text-amber-400" : ""} flex justify-between items-center p-5 w-full font-medium text-start`}>
                                            <span>{item.title}</span>
                                            <MdKeyboardArrowDown className={`${activeIndex === item.id ? "rotate-180" : ""} w-4 h-4 shrink-0`}/>
                                        </button>
                                    </h2>
                                    <div className={activeIndex === item.id ? "" : "hidden"}>
                                        <div className="p-5">
                                            <p className="text-slate-400 dark:text-gray-400">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div> 
        </>
    )
}