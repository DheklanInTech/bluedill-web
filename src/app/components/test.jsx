import React, { useEffect } from "react";
import Link from "next/link";
import NavLight from "../components/navlight";
import Footer from "../components/footer";

const job = [
    {
        id:1,
        caterogy:'Engineering, Product & Design',
        items:[
           {
             id:1,
             name:'Staff Product Designer',
             location:'San Francisco, CA'
           },
           {
            id:2,
             name:'Staff Software Engineer, Monetization',
             location:'San Francisco, CA'
           }
        ]  
      },
     {
       id:2,
       caterogy:'Sales',
       items:[
          {
            id:1,
            name:'Senior Solutions Engineer, Enterprise',
            location:'New York, NY'
          },
          {
            id:2,
            name:'Enterprise Account Executive, EMEA',
            location:'London'
          }
       ]  
     },
     {
       id:3,
       caterogy:'Marketing',
       items:[] // Empty array
     }
];

export default function Careers() {
    return (
        <>
            <NavLight />
            <section className='w-full flex flex-col items-center mt-12  gap-y-6 py-12'>
                <div className='w-[80%] md:w-[50%] flex flex-col items-center gap-y-2'>
                    <h6>Grow & Learn from the best</h6>
                    <p className='text-center text-xl'>We are a group of motivated, mission-driven people who love learning from each other. Out of all the incredible things about working here, the biggest benefit is by far the team.</p>
                </div>

                <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6">
                        {/* Your other content */}
                    </div>
                </div>

            </section>

            <section>
                {job.map(el => {
                    const { id, caterogy, items } = el;
                    return (
                        <div key={id} className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                            <div className="flex flex-col">
                                <div className="-m-1.5 overflow-x-auto">
                                    <div className="p-1.5 w-full flex flex-col md:flex-row align-middle gap-y-4 items-center">
                                        <div className='text-black md:w-[40%] flex justify-center text-white'>{caterogy}</div>
                                        <div className="w-full md:w-[70%] rounded-xl overflow-hidden flex justify-center items-center">
                                            {items.length === 0 ? (
                                                <p>Job is not available</p>
                                            ) : (
                                                <table className="w-[80%] text-sm text-left rtl:text-right text-gray-500">
                                                    {/* Your table content */}
                                                </table>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>
            <Footer />
        </>
    )
}
