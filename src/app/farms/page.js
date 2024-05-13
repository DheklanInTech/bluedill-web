import React from 'react';
import Notification from '../components/Notification';
import Sidenav from '../components/Sidenav';
import '../asset/style/main.css'


function Farms() {
  return (
         <div>
         <style
                  dangerouslySetInnerHTML={{
                           __html: '      #nprogress {        pointer-events: none;      }      #nprogress .bar {        background: #34ade5;        position: fixed;        z-index: 9999;        top: 0;        left: 0;        width: 100%;        height: 3px;      }      #nprogress .peg {        display: block;        position: absolute;        right: 0px;        width: 100px;        height: 100%;        box-shadow: 0 0 10px #34ade5, 0 0 5px #34ade5;        opacity: 1;        -webkit-transform: rotate(3deg) translate(0px, -4px);        -ms-transform: rotate(3deg) translate(0px, -4px);        transform: rotate(3deg) translate(0px, -4px);      }      #nprogress .spinner {        display: block;        position: fixed;        z-index: 1031;        top: 15px;        right: 15px;      }      #nprogress .spinner-icon {        width: 18px;        height: 18px;        box-sizing: border-box;        border: solid 2px transparent;        border-top-color: #34ade5;        border-left-color: #34ade5;        border-radius: 50%;        -webkit-animation: nprogresss-spinner 400ms linear infinite;        animation: nprogress-spinner 400ms linear infinite;      }      .nprogress-custom-parent {        overflow: hidden;        position: relative;      }      .nprogress-custom-parent #nprogress .spinner,      .nprogress-custom-parent #nprogress .bar {        position: absolute;      }      @-webkit-keyframes nprogress-spinner {        0% {          -webkit-transform: rotate(0deg);        }        100% {          -webkit-transform: rotate(360deg);        }      }      @keyframes nprogress-spinner {        0% {          transform: rotate(0deg);        }        100% {          transform: rotate(360deg);        }      }    '
                  }}
         />
         <div id="__next">
                  <div className="app">
                           <div
                                    className="w-full mobile:w-full h-full mobile:h-full"
                                    style={{
                                             display: 'grid',
                                             gridTemplate: '"d d d" auto          "a a a" auto          "b c c" 1fr          "b c c" 1fr / auto 1fr 1fr',
                                             overflow: 'hidden',
                                             padding: 'env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px) env(safe-area-inset-bottom, 0px) env(safe-area-inset-left, 0px)',
                                             position: 'relative',
                                             willChange: 'opacity'
                                    }}
                           >
                                    <Notification/>
                                    <nav className="select-none text-white px-12 py-4 mobile:p-0 transition-all grid-area-a">
                                             <div className="Row flex justify-between items-center mobile:h-14 mobile:bg-cyberpunk-card-bg">
                                                      <span
                                                               className="Link clickable text-[#39D0D8] hover:underline underline-offset-1"
                                                               tabIndex="0"
                                                      >
                                                               <img
                                                                        alt="logo-with-text"
                                                                        className="Image cursor-pointer  mobile:hidden"
                                                                        src="logo-with-text.svg"
                                                               />
                                                      </span>
                                                      <div className="Row flex gap-6 items-center mobile:hidden">
                                                               <div>
                                                                        <div className="PopoverButton ">
                                                                                 <div className="Icon grid h-max w-max text-[#ABC4FF] opacity-60 hover:opacity-75 clickable clickable-filter-effect clickable-mask-offset-3">
                                                                                          <svg
                                                                                                   aria-hidden="true"
                                                                                                   className="select-none h-6 w-6"
                                                                                                   fill="none"
                                                                                                   stroke="currentColor"
                                                                                                   strokeWidth="1.5"
                                                                                                   viewBox="0 0 24 24"
                                                                                                   xmlns="http://www.w3.org/2000/svg"
                                                                                          >
                                                                                                   <path
                                                                                                            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                                                                                                            strokeLinecap="round"
                                                                                                            strokeLinejoin="round"
                                                                                                   >
                                                                                                   </path>
                                                                                          </svg>
                                                                                 </div>
                                                                        </div>
                                                               </div>
                                                               <div className="Row flex mobile:flex-col-reverse mobile:translate-y-1 mobile:gap-0 items-center gap-2">
                                                                        <div className="Row flex items-center gap-1 text-[#abc4ff80]">
                                                                                 <div className="mobile:text-2xs text-sm whitespace-nowrap">
                                                                                          Vers. Tx
                                                                                 </div>
                                                                                 <div>
                                                                                          <div className="PopoverButton ">
                                                                                                   <div className="Icon grid h-max w-max">
                                                                                                            <svg
                                                                                                                     aria-hidden="true"
                                                                                                                     className="select-none h-4 w-4"
                                                                                                                     fill="none"
                                                                                                                     stroke="currentColor"
                                                                                                                     strokeWidth="1.5"
                                                                                                                     viewBox="0 0 24 24"
                                                                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                                                            >
                                                                                                                     <path
                                                                                                                              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                                                                                                              strokeLinecap="round"
                                                                                                                              strokeLinejoin="round"
                                                                                                                     >
                                                                                                                     </path>
                                                                                                            </svg>
                                                                                                   </div>
                                                                                          </div>
                                                                                 </div>
                                                                        </div>
                                                                        <button
                                                                                 aria-checked="true"
                                                                                 className="Switch bg-[#39D0D8] relative flex flex-shrink-0 h-5 w-10 mobile:h-4 mobile:w-7 border-2 border-transparent rounded-full cursor-pointer transition-all ease-in-out duration-200 focus:outline-none"
                                                                                 data-headlessui-state="checked"
                                                                                 id="headlessui-switch-:Raj5m:"
                                                                                 role="switch"
                                                                                 tabIndex="0"
                                                                                 type="button"
                                                                        >
                                                                                 <span className="left-full -translate-x-full            pointer-events-none absolute top-1/2 h-4 w-4 mobile:h-2.5 mobile:w-2.5 rounded-full bg-white shadow-lg transform -translate-y-1/2 transition-all duration-200 " />
                                                                        </button>
                                                               </div>
                                                               <div>
                                                                        <div className="PopoverButton ">
                                                                                 <button className="Button select-none inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl mobile:rounded-lg font-medium whitespace-nowrap appearance-none bg-formkit-thumb text-formkit-thumb-text-normal clickable clickable-filter-effect frosted-glass frosted-glass-teal">
                                                                                          <div className="Row flex items-center gap-3 my-0.5">
                                                                                                   <div className="Icon grid h-max w-max">
                                                                                                            <img
                                                                                                                     alt="msic-wallet"
                                                                                                                     className="select-none h-4 w-4"
                                                                                                                     src="msic-wallet.svg"
                                                                                                            />
                                                                                                   </div>
                                                                                                   <div className="text-sm font-medium text-[#39D0D8]">
                                                                                                            Connect Wallet
                                                                                                   </div>
                                                                                          </div>
                                                                                 </button>
                                                                        </div>
                                                               </div>
                                                      </div>
                                             </div>
                                    </nav>
                                    <Sidenav/>
                                    <main
                                             className="flex flex-col PageLayoutContent relative grid-area-c bg-gradient-to-b from-[#0c0927] to-[#110d36] rounded-tl-3xl mobile:rounded-none"
                                             style={{
                                                      overflowX: 'hidden',
                                                      overflowY: 'scroll'
                                             }}
                                    >
                                             <div className="grow h-0 isolate flex-container p-12 pb-4 mobile:py-2 mobile:px-3">
                                                      <div className="Col flex flex-col">
                                                               <div className="grid grid-cols-3 justify-between items-center pb-8 pt-0">
                                                                        <div className="text-2xl font-semibold justify-self-start text-white">
                                                                                 Farms
                                                                        </div>
                                                                        <div
                                                                                 className="flex rounded-full p-1 bg-cyberpunk-card-bg justify-self-center mobile:col-span-full"
                                                                                 id="headlessui-radiogroup-:R4plm:"
                                                                                 role="radiogroup"
                                                                        >
                                                                                 <div
                                                                                          aria-checked="true"
                                                                                          className="cursor-pointer flex grow"
                                                                                          data-headlessui-state="checked"
                                                                                          id="headlessui-radiogroup-option-:R3cplm:"
                                                                                          role="radio"
                                                                                          tabIndex="0"
                                                                                 >
                                                                                          <div
                                                                                                   className="grid grow place-items-center min-w-[96px] mobile:min-w-[76px] px-3 mobile:px-2 h-9 mobile:h-7 text-sm mobile:text-xs grid rounded-full place-items-center font-medium whitespace-nowrap text-white"
                                                                                                   style={{
                                                                                                            background: 'linear-gradient(245.22deg, rgb(218, 46, 239), rgb(43, 106, 255), rgb(57, 208, 216))',
                                                                                                            backgroundPosition: '0%',
                                                                                                            backgroundSize: '400% 100%'
                                                                                                   }}
                                                                                          >
                                                                                                   Raydium
                                                                                          </div>
                                                                                 </div>
                                                                                 <div
                                                                                          aria-checked="false"
                                                                                          className="cursor-pointer flex grow"
                                                                                          data-headlessui-state=""
                                                                                          id="headlessui-radiogroup-option-:R5cplm:"
                                                                                          role="radio"
                                                                                          tabIndex="-1"
                                                                                 >
                                                                                          <div className="grid grow place-items-center min-w-[96px] mobile:min-w-[76px] px-3 mobile:px-2 h-9 mobile:h-7 text-sm mobile:text-xs grid rounded-full place-items-center font-medium whitespace-nowrap text-[#ABC4FF]">
                                                                                                   Fusion
                                                                                          </div>
                                                                                 </div>
                                                                                 <div
                                                                                          aria-checked="false"
                                                                                          className="cursor-pointer flex grow"
                                                                                          data-headlessui-state=""
                                                                                          id="headlessui-radiogroup-option-:R7cplm:"
                                                                                          role="radio"
                                                                                          tabIndex="-1"
                                                                                 >
                                                                                          <div className="grid grow place-items-center min-w-[96px] mobile:min-w-[76px] px-3 mobile:px-2 h-9 mobile:h-7 text-sm mobile:text-xs grid rounded-full place-items-center font-medium whitespace-nowrap text-[#ABC4FF]">
                                                                                                   Ecosystem
                                                                                          </div>
                                                                                 </div>
                                                                                 <div
                                                                                          aria-checked="false"
                                                                                          className="cursor-pointer flex grow"
                                                                                          data-headlessui-state=""
                                                                                          id="headlessui-radiogroup-option-:R9cplm:"
                                                                                          role="radio"
                                                                                          tabIndex="-1"
                                                                                 >
                                                                                          <div className="grid grow place-items-center min-w-[96px] mobile:min-w-[76px] px-3 mobile:px-2 h-9 mobile:h-7 text-sm mobile:text-xs grid rounded-full place-items-center font-medium whitespace-nowrap text-[#ABC4FF]">
                                                                                                   Staked
                                                                                          </div>
                                                                                 </div>
                                                                        </div>
                                                                        <div className="Row flex justify-self-end mobile:justify-self-auto gap-1 py-1 flex-wrap items-center opacity-100 pointer-events-auto clickable transition">
                                                                                 <div className="Icon grid h-max w-max text-[#abc4ff] mobile:text-[#abc4ff80]">
                                                                                          <svg
                                                                                                   aria-hidden="true"
                                                                                                   className="select-none h-4 w-4"
                                                                                                   fill="none"
                                                                                                   stroke="currentColor"
                                                                                                   strokeWidth="1.5"
                                                                                                   viewBox="0 0 24 24"
                                                                                                   xmlns="http://www.w3.org/2000/svg"
                                                                                          >
                                                                                                   <path
                                                                                                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                                                            strokeLinecap="round"
                                                                                                            strokeLinejoin="round"
                                                                                                   />
                                                                                          </svg>
                                                                                 </div>
                                                                                 <span className="text-[#abc4ff] mobile:text-[#abc4ff80] font-medium text-sm mobile:text-xs">
                                                                                          Create                      Farm
                                                                                 </span>
                                                                        </div>
                                                               </div>
                                                      </div>
                                                      <div
                                                               className="flex-1 overflow-hidden flex flex-col"
                                                               style={{
                                                                        backgroundImage: 'linear-gradient(var(--gradient-rotate, 246deg), #da2eef 7.97%, #2b6aff 49.17%, #39d0d8 92.1%)',
                                                                        borderRadius: '21.2px',
                                                                        minHeight: '300px',
                                                                        padding: '1.2px'
                                                               }}
                                                      >
                                                               <div
                                                                        className="Card rounded-3xl bg-cyberpunk-card-bg overflow-hidden grow p-10 pt-6 pb-4 mobile:px-3 mobile:py-3 w-full flex flex-col h-full"
                                                                        style={{
                                                                                 height: '100%',
                                                                                 width: '100%'
                                                                        }}
                                                               >
                                                                        <div className="Row flex justify-between gap-16 gap-y-4 items-center mb-4">
                                                                                 <div>
                                                                                          <div className="Row flex items-center">
                                                                                                   <div className="font-medium text-white text-lg">
                                                                                                            Raydium Farms
                                                                                                   </div>
                                                                                          </div>
                                                                                          <div className="font-medium text-[rgba(196,214,255,.5)] text-base ">
                                                                                                   Stake LP tokens and earn token                        rewards
                                                                                          </div>
                                                                                 </div>
                                                                                 <div className="Row flex grow flex-wrap justify-end items-stretch gap-6">
                                                                                          <button className="Button select-none inline-flex justify-center items-center gap-2 px-4 py-2 text-sm rounded-xl font-medium whitespace-nowrap appearance-none bg-formkit-thumb-disable text-formkit-thumb-text-disabled opacity-40 cursor-not-allowed frosted-glass-teal">
                                                                                                   Harvest                        all
                                                                                          </button>
                                                                                          <div className="relative z-20">
                                                                                                   <div className="py-2 px-4 mobile:px-3 ring-inset ring-1 ring-[rgba(196,214,255,0.5)] h-full rounded-xl mobile:rounded-lg invisible">
                                                                                                            <div className="Row flex items-center w-full">
                                                                                                                     <div className="mobile:text-xs text-sm font-medium text-[rgba(196,214,255,.5)] mr-1 whitespace-nowrap">
                                                                                                                              Time Basis:
                                                                                                                     </div>
                                                                                                                     <div className="grow mobile:text-xs text-sm font-medium text-[rgba(196,214,255)] whitespace-nowrap">
                                                                                                                              7D
                                                                                                                     </div>
                                                                                                                     <div className="Icon grid h-max w-max justify-self-end mr-1.5 text-[rgba(196,214,255,.5)] ml-2">
                                                                                                                              <svg
                                                                                                                                       aria-hidden="true"
                                                                                                                                       className="select-none h-4 w-4"
                                                                                                                                       fill="none"
                                                                                                                                       stroke="currentColor"
                                                                                                                                       strokeWidth="1.5"
                                                                                                                                       viewBox="0 0 24 24"
                                                                                                                                       xmlns="http://www.w3.org/2000/svg"
                                                                                                                              >
                                                                                                                                       <path
                                                                                                                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                                                                                                                strokeLinecap="round"
                                                                                                                                                strokeLinejoin="round"
                                                                                                                                       >
                                                                                                                                       </path>
                                                                                                                              </svg>
                                                                                                                     </div>
                                                                                                            </div>
                                                                                                   </div>
                                                                                                   <div className="Collapse flex flex-col absolute z-10 top-0 left-0 ring-inset ring-1 ring-[rgba(196,214,255,0.5)] rounded-xl mobile:rounded-lg w-full transition">
                                                                                                            <div className="CollapseFace filter hover:brightness-90 cursor-pointer">
                                                                                                                     <div className="py-2 px-3 mobile:px-2">
                                                                                                                              <div className="Row flex items-center w-full">
                                                                                                                                       <div className="mobile:text-xs text-sm font-medium text-[rgba(196,214,255,.5)] mr-1 whitespace-nowrap">
                                                                                                                                                Time Basis:
                                                                                                                                       </div>
                                                                                                                                       <div className="grow mobile:text-xs text-sm font-medium text-[rgba(196,214,255)] whitespace-nowrap">
                                                                                                                                                7D
                                                                                                                                       </div>
                                                                                                                                       <div className="Icon grid h-max w-max justify-self-end mr-1.5 text-[rgba(196,214,255,.5)] ml-2">
                                                                                                                                                <svg
                                                                                                                                                         aria-hidden="true"
                                                                                                                                                         className="select-none h-4 w-4"
                                                                                                                                                         fill="none"
                                                                                                                                                         stroke="currentColor"
                                                                                                                                                         strokeWidth="1.5"
                                                                                                                                                         viewBox="0 0 24 24"
                                                                                                                                                         xmlns="http://www.w3.org/2000/svg"
                                                                                                                                                >
                                                                                                                                                         <path
                                                                                                                                                                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                                                                                                                                  strokeLinecap="round"
                                                                                                                                                                  strokeLinejoin="round"
                                                                                                                                                         />
                                                                                                                                                </svg>
                                                                                                                                       </div>
                                                                                                                              </div>
                                                                                                                     </div>
                                                                                                            </div>
                                                                                                   </div>
                                                                                          </div>
                                                                                          <div className="Row flex Input cursor-text items-center px-2 py-2 mobile:py-1 gap-2 ring-inset ring-1 ring-[rgba(196,214,255,0.5)] rounded-xl mobile:rounded-lg pc:w-[12vw] mobile:w-auto">
                                                                                                   <div className="flex-initial mr-2">
                                                                                                            <div className="Icon grid h-max w-max text-[rgba(196,214,255,0.5)]">
                                                                                                                     <svg
                                                                                                                              aria-hidden="true"
                                                                                                                              className="select-none h-5 w-5"
                                                                                                                              fill="none"
                                                                                                                              stroke="currentColor"
                                                                                                                              strokeWidth="1.5"
                                                                                                                              viewBox="0 0 24 24"
                                                                                                                              xmlns="http://www.w3.org/2000/svg"
                                                                                                                     >
                                                                                                                              <path
                                                                                                                                       d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                                                                                                                       strokeLinecap="round"
                                                                                                                                       strokeLinejoin="round"
                                                                                                                              />
                                                                                                                     </svg>
                                                                                                            </div>
                                                                                                   </div>
                                                                                                   <div className="flex flex-grow flex-shrink">
                                                                                                            <input
                                                                                                                     autoComplete="off"
                                                                                                                     className="w-full overflow-hidden text-ellipsis bg-transparent border-none outline-none block font-medium text-sm mobile:text-xs text-[rgba(196,214,255,0.5)] placeholder-[rgba(196,214,255,0.5)]"
                                                                                                                     placeholder="Search All"
                                                                                                            />
                                                                                                   </div>
                                                                                                   <div className="flex-initial ml-2">
                                                                                                            <div>
                                                                                                                     <div className="PopoverButton ">
                                                                                                                              <div className="Icon grid h-max w-max text-[rgba(196,214,255,0.5)] transition clickable opacity-0 pointer-events-none">
                                                                                                                                       <svg
                                                                                                                                                aria-hidden="true"
                                                                                                                                                className="select-none h-4 w-4"
                                                                                                                                                fill="none"
                                                                                                                                                stroke="currentColor"
                                                                                                                                                strokeWidth="1.5"
                                                                                                                                                viewBox="0 0 24 24"
                                                                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                                                       >
                                                                                                                                                <path
                                                                                                                                                         d="M6 18L18 6M6 6l12 12"
                                                                                                                                                         strokeLinecap="round"
                                                                                                                                                         strokeLinejoin="round"
                                                                                                                                                />
                                                                                                                                       </svg>
                                                                                                                              </div>
                                                                                                                     </div>
                                                                                                            </div>
                                                                                                   </div>
                                                                                          </div>
                                                                                 </div>
                                                                        </div>
                                                                        <div className="Row grid grid-flow-col mb-3 h-12 sticky -top-6 backdrop-filter z-10 backdrop-blur-md bg-[rgba(20,16,65,0.2)] mr-scrollbar rounded-xl mobile:rounded-lg gap-2 grid-cols-[auto,1.5fr,1.2fr,1fr,1fr,auto]">
                                                                                 <div className="Row flex w-20 pl-9" />
                                                                                 <div className="Row flex font-medium text-[#ABC4FF] text-sm items-center cursor-pointer clickable clickable-filter-effect no-clicable-transform-effect">
                                                                                          <div className="mr-16" />
                                                                                          Farm
                                                                                          <div className="Icon grid h-max w-max ml-1">
                                                                                                   <img
                                                                                                            alt="msic-sort"
                                                                                                            className="select-none h-4 w-4"
                                                                                                            src="msic-sort.svg"
                                                                                                   />
                                                                                          </div>
                                                                                 </div>
                                                                                 <div className=" font-medium self-center text-[#ABC4FF] text-sm">
                                                                                          Pending Reward
                                                                                 </div>
                                                                                 <div className="Row flex font-medium items-center text-[#ABC4FF] text-sm cursor-pointer gap-1 clickable clickable-filter-effect no-clicable-transform-effect">
                                                                                          Total APR 7D
                                                                                          <div>
                                                                                                   <div className="PopoverButton ">
                                                                                                            <div className="Icon grid h-max w-max ml-1 cursor-help">
                                                                                                                     <svg
                                                                                                                              aria-hidden="true"
                                                                                                                              className="select-none h-4 w-4"
                                                                                                                              fill="none"
                                                                                                                              stroke="currentColor"
                                                                                                                              strokeWidth="1.5"
                                                                                                                              viewBox="0 0 24 24"
                                                                                                                              xmlns="http://www.w3.org/2000/svg"
                                                                                                                     >
                                                                                                                              <path
                                                                                                                                       d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                                                                                                                                       strokeLinecap="round"
                                                                                                                                       strokeLinejoin="round"
                                                                                                                              >
                                                                                                                              </path>
                                                                                                                     </svg>
                                                                                                            </div>
                                                                                                   </div>
                                                                                          </div>
                                                                                          <div className="Icon grid h-max w-max ml-1">
                                                                                                   <img
                                                                                                            alt="msic-sort"
                                                                                                            className="select-none h-4 w-4"
                                                                                                            src="msic-sort.svg"
                                                                                                   />
                                                                                          </div>
                                                                                 </div>
                                                                                 <div className="Row flex font-medium text-[#ABC4FF] text-sm items-center cursor-pointer clickable clickable-filter-effect no-clicable-transform-effect">
                                                                                          TVL
                                                                                          <div className="Icon grid h-max w-max ml-1">
                                                                                                   <img
                                                                                                            alt="msic-sort"
                                                                                                            className="select-none h-4 w-4"
                                                                                                            src="msic-sort.svg"
                                                                                                   />
                                                                                          </div>
                                                                                 </div>
                                                                                 <div className="justify-self-end pr-8 self-center">
                                                                                          <div>
                                                                                                   <div className="PopoverButton ">
                                                                                                            <div className="w-full h-full rounded clickable clickable-filter-effect">
                                                                                                                     <svg
                                                                                                                              height="36"
                                                                                                                              viewBox="0 0 36 36"
                                                                                                                              width="36"
                                                                                                                     >
                                                                                                                              <circle
                                                                                                                                       cx="50%"
                                                                                                                                       cy="50%"
                                                                                                                                       fill="transparent"
                                                                                                                                       r="9"
                                                                                                                                       style={{
                                                                                                                                                stroke: '#ffffff2e',
                                                                                                                                                strokeWidth: '3'
                                                                                                                                       }}
                                                                                                                              />
                                                                                                                              <circle
                                                                                                                                       cx="50%"
                                                                                                                                       cy="50%"
                                                                                                                                       fill="transparent"
                                                                                                                                       id="bar"
                                                                                                                                       r="9"
                                                                                                                                       strokeDasharray="56.548667764616276"
                                                                                                                                       strokeDashoffset="56.548667764616276"
                                                                                                                                       style={{
                                                                                                                                                stroke: '#92e1ffd9',
                                                                                                                                                strokeLinecap: 'round',
                                                                                                                                                strokeWidth: '3',
                                                                                                                                                transform: 'rotate(-90deg)',
                                                                                                                                                transformOrigin: 'center',
                                                                                                                                                transition: '200ms'
                                                                                                                                       }}
                                                                                                                              >
                                                                                                                              </circle>
                                                                                                                     </svg>
                                                                                                            </div>
                                                                                                   </div>
                                                                                          </div>
                                                                                 </div>
                                                                        </div>
                                                                        <div className="Row flex text-center justify-center text-2xl p-12 opacity-50 text-[rgb(171,196,255)]">
                                                                                 <div className="lds-roller  mobile:scale-75">
                                                                                          <div />
                                                                                          <div />
                                                                                          <div />
                                                                                          <div />
                                                                                          <div />
                                                                                          <div />
                                                                                          <div />
                                                                                          <div />
                                                                                 </div>
                                                                        </div>
                                                               </div>
                                                      </div>
                                             </div>
                                    </main>
                           </div>
                           <div
                                    className="Col flex flex-col items-end mobile:items-stretch pointer-events-none"
                                    style={{
                                             bottom: '0',
                                             position: 'fixed',
                                             right: '0',
                                             zIndex: '9999'
                                    }}
                           />
                  </div>
         </div>
</div>
  )
}

export default Farms


