"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { testimony } from "./testimony";

// Function to shuffle array in place
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function ClientsTwo() {
    const [value, setValue] = useState(0);
  
    function create(para) {
      let stars = [];
      for (let i = 0; i < para; i++) {
        stars.push(<li className="inline" key={i}><i className="mdi mdi-star"></i></li>);
      }
      return stars;
    }
  
    // Shuffle the testimony array twice
    const shuffledTestimony1 = shuffleArray([...testimony]);
    const shuffledTestimony2 = shuffleArray([...testimony]);
  
    return (
      <>
        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What Our Users Say</h3>
            <p className="text-slate-400 max-w-xl mx-auto">The First Agentless Cloud Contract Life Cycle Management System</p>
          </div>
        </div>
  
        <div className="container-fluid relative overflow-hidden">
          <div className="grid grid-cols-1 mt-6">
            <div className="slider relative overflow-hidden m-auto mb-4 before:content-[''] before:absolute before:top-0 before:start-0 before:z-2 after:content-[''] after:absolute after:top-0 after:end-0 after:z-2">
              <div className="slide-track flex items-center">
                {shuffledTestimony1.map(el => {
                  const { name, note, review, image, id } = el;
                  return (
                    <div key={id} className="slide h-auto m-2">
                      <ul className="space-y-4">
                        <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                          <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                            <Image src={'/images/client/' + image} width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt="" />
                            <div className="ps-4">
                              <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">{name}</Link>
                              <p className="text-slate-400">User</p>
                            </div>
                          </div>
                          <div className="mt-6">
                            <p className="text-slate-400">{note}</p>
                            <ul className="list-none mb-0 text-amber-400 mt-2">
                              {create(review)}
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
              <div className="slide-track flex items-center">
                {shuffledTestimony2.map(el => {
                  const { name, note, review, image, id } = el;
                  return (
                    <div key={id} className="slide h-auto m-2">
                      <ul className="space-y-4">
                        <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                          <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                            <Image src={'/images/client/' + image} width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt="" />
                            <div className="ps-4">
                              <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">{name}</Link>
                              <p className="text-slate-400">User</p>
                            </div>
                          </div>
                          <div className="mt-6">
                            <p className="text-slate-400">{note}</p>
                            <ul className="list-none mb-0 text-amber-400 mt-2">
                              {create(review)}
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }