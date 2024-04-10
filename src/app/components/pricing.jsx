"use client"
import React,{useEffect, useState} from "react";
import { CardFeatures, Cardwrapper, FreePlanTop, Lists, PaidPlanTop } from "./pricecards/card";



export default function Pricing(){
    const [Period, setPeriod] = useState("monthly") 
    

    const freeplan = ["Convert documents","Document Encryption  ", "Unlimited Document share"];
    const basicplan = ["All in Free Plan including","1hr time collaboration ",
    "Unlimited use of template within time permit","Unlimited Signature request within time permit ","Basic File Automation","History of Logs","24 x 7 Support","Collaboration of upto 2 users"
    ]
    const premiumplan = ["All Basic Plan including","Collaboration of upto 5 users on portal","Free access to our  API and Webhooks","Video & Voice call collaboration","AI assisted text generation","24 x 7 Support"]
    
    return(
        <>
        <div>
            <div className="mx-auto flex justify-center gap-10 py-6">
               <button onClick={() => setPeriod('monthly')} type="button" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded" onCli>Monthly</button>
               <button onClick={() => setPeriod('yearly')} type="button" className="py-2 px-8  inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded">Yearly</button>
            </div>
            {Period === "monthly" && (
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
              <Cardwrapper>
                  <FreePlanTop/>
                   <CardFeatures>
                    {freeplan.map((item,idx) => (
                     <Lists key={idx} text={item}/>
                  ))}
                   </CardFeatures>
              </Cardwrapper>
              <Cardwrapper>
                  <PaidPlanTop amount={5} period={"Monthly"} title={"Basic Plan"} subtitle={"For individuals starting their journey"}/>
                   <CardFeatures>
                    {basicplan.map((item,idx) => (
                     <Lists key={idx} text={item}/>
                  ))}
                   </CardFeatures>
              </Cardwrapper>
              <Cardwrapper>
                  <PaidPlanTop amount={7} period={"Month"} title={"Premium Plan"} subtitle={"For groups starting their journey"}/>
                   <CardFeatures>
                    {premiumplan.map((item,idx) => (
                     <Lists key={idx} text={item}/>
                  ))}
                   </CardFeatures>
              </Cardwrapper>
          </div>
                )}
                {Period === "yearly" && (
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                  <Cardwrapper>
                      <FreePlanTop/>
                       <CardFeatures>
                        {freeplan.map((item,idx) => (
                         <Lists key={idx} text={item}/>
                      ))}
                       </CardFeatures>
                  </Cardwrapper>
                  <Cardwrapper>
                      <PaidPlanTop amount={50} period={"Year"} title={"Basic Plan"} subtitle={"For individuals starting their journey"}/>
                       <CardFeatures>
                        {basicplan.map((item,idx) => (
                         <Lists key={idx} text={item}/>
                      ))}
                       </CardFeatures>
                  </Cardwrapper>
                  <Cardwrapper>
                      <PaidPlanTop amount={70} period={"Year"} title={"Premium Plan"} subtitle={"For groups starting their journey"}/>
                       <CardFeatures>
                        {premiumplan.map((item,idx) => (
                         <Lists key={idx} text={item}/>
                      ))}
                       </CardFeatures>
                  </Cardwrapper>
              </div>
                )}
        </div>
          
        </>
    )
}