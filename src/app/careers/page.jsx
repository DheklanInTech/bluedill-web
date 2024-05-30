'use client'
import React from "react";
import NavLight from "../components/navlight";
import Footer from "../components/footer";





const job = [
    {
        id: 1,
        caterogy: 'Engineering, Product & Design',
        items:[],
    },
    {
        id: 2,
        caterogy: 'Sales',
        items:[],
    },
    {
        id: 3,
        caterogy: 'Marketing',
        items: [] // Empty array
    }
];

export default function Careers() {
    return (
        <>
            <NavLight />
            <section className='w-full flex flex-col items-center mt-12  gap-y-6 py-20'>

                <div className='w-[80%] md:w-[50%] flex flex-col items-center gap-y-2'>
                    <h6>Grow & Learn from the best</h6>
                    <p className='text-center text-xl'>We are a group of motivated, mission-driven people who love learning from each other. Out of all the incredible things about working here, the biggest benefit is by far the team.</p>
                </div>


                <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6">



                        <a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800 " href="#">
                            <div className="p-4 md:p-5">
                                <div className="flex">
                                    {/* <svg className="mt-1 flex-shrink-0 size-5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg> */}

                                    <div className="grow ms-5">
                                        <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                                            Network of mentors
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-neutral-500">
                                            Receive mentorship from our world-class network of mentors, including founders, salespeople, marketers, engineers, and designers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="#">
                            <div className="p-4 md:p-5">
                                <div className="flex">


                                    <div className="grow ms-5">
                                        <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                                            Health & wellness
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-neutral-500">
                                            Great health care insurance, monthly fitness reimbursement, and seasonal activities like yoga, surfing, and hikes with our dogs are just some of the ways we help take care of employee health and wellness.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="#">
                            <div className="p-4 md:p-5">
                                <div className="flex">


                                    <div className="grow ms-5">
                                        <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                                            Company retreats
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-neutral-500">
                                            We gather at spots like Tahoe or Napa’s wine country for our company off-sites.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="#">
                            <div className="p-4 md:p-5">
                                <div className="flex">


                                    <div className="grow ms-5">
                                        <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                                            Team events
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-neutral-500">
                                            We bond outside of work over Pickleball tournaments, happy hours, concerts, and more.


                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>

                    </div>

                </div>



            </section>

            <section>

                {job.map(el => {
                    const { id, caterogy, items } = el;
                    return <div key={id} className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        <div className="flex flex-col">
                            <div className="-m-1.5 overflow-x-auto">
                                <div className="p-1.5 w-full flex flex-col md:flex-row align-middle gap-y-4 items-center">





                                    <div className=' md:w-[40%] flex justify-center text-white'>{caterogy}</div>
                                    <div className="w-full md:w-[70%] rounded-xl overflow-hidden flex justify-center items-center">

                                        <table class="w-[80%] text-sm text-left rtl:text-right text-gray-500">

                                            <thead class="hidden text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" class="px-6 py-3">

                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Color
                                                    </th>


                                                    <th scope="col" class="px-6 py-3">
                                                        <span class="sr-only">Edit</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            
                                                
                                                {items.length === 0 ? (
                                                    <p class="text-white text-lg font-extralight">Job is not available</p>
                                                ) : (
                                                    items.map(item=>{
                                                        const { id, name , location } = item;
                                                        return <tr key={id} class="border-b mt-2">
                                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                            <div class="flex flex-col text-white">
                                                                <p className="text-lg font-medium">{name}</p>
                                                                <p className="flex md:hidden text-sm">{name}</p>
                                                            </div>
                                                        </th>
                                                        <td class="px-6 py-4 hidden md:flex text-white">
                                                            {location}
                                                        </td>
                                                        
                                                        <td class="px-6 py-4 text-right">
                                                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Apply Now</a>
                                                        </td>
                                                    </tr>
                                                    })
                                                )}



                                            </tbody>
                                        </table>




                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                })}


            </section>
            <Footer />
        </>
    )
}