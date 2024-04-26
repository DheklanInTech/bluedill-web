"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { FiCheckCircle } from "react-icons/fi";

import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/css/modal-video.css";

export default function AboutThree() {
  const [isOpen, setOpen] = useState(false);
  const countryData = [
    {
      name: "SOC2 AICPA",
      image: "/icons/image 38.svg",
    },
    {
      name: "PCI DSS",
      image: "/icons/image 39.svg",
    },
    {
      name: "GDPR",
      image: "/icons/image 40.svg",
    },
    {
      name: "ISO 27001",
      image: "/icons/image 41.svg",
    },
  ];
  return (
    <>
      <div className="container relative md:mt-24 mt-16">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
          <div className="relative overflow-hidden ">
            <div className="rounded-lg shadow-md w-full">
              <Image
                src="/images/features/img4.jpg"
                width={300}
                height={200}
                className="w-full"
                alt="tu"
              />
            </div>
          </div>

          <div className="">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Security
            </h3>
            <p className="text-slate-400 max-w-xl">
              {" "}
              We take zero tolerance when it comes to security. Our user’s data
              and information is secured through various network handshakes. We
              go extra mile in sending, receiving and storing user data over a
              secured protocol. We have TLS protocol established on our network
              to provide a safer communication security between our users.
              BlueDill is a place of peace of mind and users can trust us to
              provide a secured system for their organizations. We are ISO 27001
              compliant, SOC2 AICPA compliant PCI DSS compliant and GDPR
              compliant.
            </p>

            <ul className="list-none text-slate-400 mt-4">
              <li className="mb-2 flex items-center">
                <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />
                Permission and Control
              </li>
              <li className="mb-2 flex items-center">
                <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />
                Contract Visibility
              </li>
              <li className="mb-2 flex items-center">
                <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" /> Data
                protection and Security
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <ModalVideo
				channel="youtube"
				youtube={{ mute: 0, autoplay: 0 }}
				isOpen={isOpen}
				videoId="S_CGed6E610"
				onClose={() => setOpen(false)} 
			/> */}
    </>
  );
}
