'use client'
import React, { useEffect } from "react";
import Link from "next/link";


import NavLight from "../components/navlight";
import Footer from "../components/footer";



export default function Careers() {
    return (
        <>
            <NavLight />
            <section className='w-full flex flex-col items-center bg-green-200 gap-y-6 py-12'>
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
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                            <div className="p-1.5 min-w-full flex flex-col md:flex-row align-middle gap-y-4">
                                <div className='text-black w-full md:w-1/2 flex justify-center'>Engineering, Product & Design</div>
                                <div className="w-full md:w-1/2 border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">

                                    <table className="w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                        <thead className="bg-gray-50 dark:bg-neutral-800 hidden">
                                            <tr>


                                                <th scope="col" className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                            Name
                                                        </span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="hidden md:flex px-6 py-3 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                            Position
                                                        </span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="px-6 py-3 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                            Status
                                                        </span>
                                                    </div>
                                                </th>




                                            </tr>
                                        </thead>

                                        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                            <tr>


                                                <td className="h-px  whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">Staff Product Designer</span>
                                                        <span className="flex md:hidden text-sm text-gray-500 dark:text-neutral-500">San Francisco, CA</span>
                                                    </div>
                                                </td>
                                                <td className="hidden md:flex size-px whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                            San Francisco, CA
                                                        </span>
                                                    </div>
                                                </td>


                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-1.5">
                                                        <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="#">
                                                            Apply Now
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>


                                                <td className="h-px  whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">Staff Product Designer</span>
                                                        <span className="flex md:hidden text-sm text-gray-500 dark:text-neutral-500">San Francisco, CA</span>
                                                    </div>
                                                </td>
                                                <td className="hidden md:flex size-px whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                            San Francisco, CA
                                                        </span>
                                                    </div>
                                                </td>


                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-1.5">
                                                        <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="#">
                                                            Apply Now
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>






                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}