"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

import {FiCheckCircle} from "react-icons/fi";
import { MdKeyboardArrowRight} from "react-icons/md"

export default function AboutOne(){
    return(
        <>
        <div className="container relative md:mt-24 mt-16">
            <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
                <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30  from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 ps-6 pt-6 lg:me-8">
                    <Image src="/icons/schedules page.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}  className="ltr:rounded-tl-lg rtl:rounded-tr-lg" alt=""/>
                </div>

                <div className="">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">More deals secured in minutes</h3>
                    <p className="text-slate-400 max-w-xl">Manage insights, contracts visibility, document version and implement change faster to accommodate stakeholder anticipations. <br /> <br />Collaborate with other parties on our real-time document editing dashboard to maintain transparency throughout the contract lifecycle.</p>

                    <ul className="list-none text-slate-400 mt-4">
                        <li className="mb-2 flex items-center"><FiCheckCircle className="text-amber-400 h-5 w-5 me-2"/>Contract Automation</li>
                        <li className="mb-2 flex items-center"><FiCheckCircle className="text-amber-400 h-5 w-5 me-2"/>Contract Automation</li>
                        <li className="mb-2 flex items-center"><FiCheckCircle className="text-amber-400 h-5 w-5 me-2"/>E-signature</li>
                    </ul>

                    {/* <div className="mt-4">
                        <Link href="" className="hover:text-amber-400 font-medium duration-500 inline-flex items-center">Find Out More <MdKeyboardArrowRight className="ms-1 text-[20px]"/></Link>
                    </div> */}
                </div>
            </div>
        </div>
        </>
    )
}