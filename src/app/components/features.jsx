"use client"
import React from "react";
import Image from "next/image";

export default function Features({classlist}){
    const featuresData = [
        {
            image:'/images/features/img5.jpg',
            title:"Document Versioning",
            desc:"Manage document versions right from your dashboard and keep track of the latest version of contract documents."
        },
        {
            image:'/images/features/img4.jpg',
            title:"Secure Password Sharing",
            desc:"Securely share your document password with other parties without compromising password integrity."
        },
        {
            image:'/images/features/img3.jpg',
            title:"Signature Request",
            desc:"Alert parties to obligation by requesting signatures with just a single click of a button, saves time, effort and accelerates workflow."
        },
        {
            image:'/images/features/img1.jpg',
            title:"Contract agreement transparency",
            desc:"Hugely saves time in retrying failed sent files leaves our customers less worried if a file document is successfully shared or not."
        },
        {
            image:'/images/features/img2.jpg',
            title:"Collaboration",
            desc:"invite parties to participate in editing and reviewing documents with control of your palms to grant parties rights to view or edit documents only."
        },
        {
            image:'/images/features/img6.jpg',
            title:"Password Generator",
            desc:"Automatically generates password to encrypt your document remembers it incase you want to re-use it."
        },
    ]
    return(
        <>
            <div className={classlist}>
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Everything you need for<br/>  work all in one <span className="bg-gradient-to-br from-amber-400 to-fuchsia-600 text-transparent bg-clip-text">ecosystem </span></h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Maximize Return of Investment (ROI),
                     through contracts automation
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {featuresData.map((item,index) => {
                        return(
                        <div className="relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800" key={index}>
                            <div className="p-6 pb-0 relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:mx-auto after:w-72 after:h-72 after:bg-gradient-to-tl after:to-amber-400 after:from-fuchsia-600 after:blur-[80px] after:rounded-full">
                                <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="relative rounded-t-md shadow-md dark:shadow-slate-700 z-1" alt=""/>
                            </div>

                            <div className="p-6">
                                <h5 className="text-lg font-semibold">{item.title}</h5>
                                <p className="text-slate-400 mt-3">{item.desc}</p>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}