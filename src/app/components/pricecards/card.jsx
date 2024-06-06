"use client"


import React,{useCallback} from "react";
import Link from 'next/link'
import { useRouter } from "next/navigation";
// import { loadStripe } from '@stripe/stripe-js';
import {FiCheckCircle} from '../../../assets/icons/vander'

export const Cardwrapper = ({children}) => {
  return (
    <div className='relative overflow-hidden rounded-md shadow dark:shadow-gray-800'>{children}</div>
  )
}

export const FreePlanTop = () => {
  return (
    <div className="p-6">
    <h5 className="text-2xl leading-normal font-semibold">Free</h5>
    <p className="text-slate-400 mt-2">For anyone to try AI video creation</p>
    <div className="flex mt-4">
        <span className="text-lg font-semibold">$</span>
        <span className="text-5xl font-semibold mb-0 ms-1">0</span>
    </div>
    <p className="text-slate-400 uppercase text-xs">per month</p>

    <div className="mt-6">
        <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400/5 hover:bg-amber-400 rounded border-amber-400/10 hover:border-amber-400 text-amber-400 hover:text-white">Try For Free</Link>

        <p className="text-slate-400 text-sm mt-3">No credit card required. Free 14-days trial</p>
    </div>
</div>
    )
}

export const PaidPlanTop = ({title,subtitle,amount,period}) => {
  const router = useRouter()
  const purchase = useCallback(async (price) => {
      const {url} = await (await fetch(`http://localhost:3000/api/payment?price=${price}`)).json();
      router.push(String(url));
   }, []);
  return (
    <div className="p-6">
    <h5 className="text-2xl leading-normal font-semibold">{title}</h5>
    <p className="text-slate-400 mt-2">{subtitle}</p>
    
    <div className="relative">
        <div className="flex mt-4">
            <span className="text-lg font-semibold">$</span>
            <span className="">
                <input type="hidden" id="business-amount" className="form-control"/>
                <p className="text-5xl font-semibold mb-0 ms-1" id="busi-amt">{amount}</p>
                <p className="text-slate-400 uppercase text-xs">per {period}</p>
            </span>
        </div>
    </div>
    <div className="mt-4">
        <button type='button' onClick={() => purchase(amount)} className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded">Subscribe Now</button>
    </div>
</div>
)
}

export const Lists = ({text}) => {
  return (
    <li className="flex items-start mt-2"><FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2"/>{text}</li>
    )
}

export const CardFeatures = ({children}) => {
  return (
    <div className="p-6 bg-gray-50 dark:bg-slate-800">
                        <ul className="list-none text-slate-400">
                            <li className="font-semibold text-slate-900 dark:text-white text-sm uppercase">Features:</li>
                            {children}
                        </ul>
     </div>
  )
}
