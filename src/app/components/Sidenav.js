import React from 'react'

function Sidenav() {
  return (
         <div className="Col flex flex-col h-full overflow-y-auto w-56 mobile:w-64 mobile:rounded-tr-2xl mobile:rounded-br-2xl flex-container grid-area-b mobile:hidden">
         <div className="Col flex-col grid grid-rows-[2fr,1fr,auto] flex-1 overflow-hidden">
                  <div className="shrink overflow-y-auto min-h-[120px] py-4 space-y-1 mobile:py-0 px-2 mr-2 mobile:ml-2 mb-2">
                           <span
                                    className="Link clickable group block py-2.5 mobile:py-2 px-4 mobile:px-1 rounded-xl mobile:rounded-lg hover:bg-[rgba(57,208,216,0.05)]"
                                    tabIndex="0"
                           >
                                    <div className="Row flex items-center">
                                             <div className="grid bg-gradient-to-br from-[rgba(57,208,216,0.2)] to-[rgba(57,208,216,0)] rounded-lg p-1.5 mr-3">
                                                      <div className="Icon grid h-max w-max">
                                                               <img
                                                                        alt="entry-icon-swap"
                                                                        className="select-none h-4 w-4"
                                                                        src="entry-icon-swap.svg"
                                                               />
                                                      </div>
                                             </div>
                                             <div className="Row flex grow items-center justify-between text-[#ACE3E5] text-sm mobile:text-[0.85rem] font-medium">
                                                      <div>
                                                               Swap
                                                      </div>
                                             </div>
                                    </div>
                           </span>
                           <span
                                    className="Link clickable group block py-2.5 mobile:py-2 px-4 mobile:px-1 rounded-xl mobile:rounded-lg hover:bg-[rgba(57,208,216,0.05)]"
                                    tabIndex="0"
                           >
                                    <div className="Row flex items-center">
                                             <div className="grid bg-gradient-to-br from-[rgba(57,208,216,0.2)] to-[rgba(57,208,216,0)] rounded-lg p-1.5 mr-3">
                                                      <div className="Icon grid h-max w-max">
                                                               <img
                                                                        alt="entry-icon-liquidity"
                                                                        className="select-none h-4 w-4"
                                                                        src="entry-icon-liquidity.svg"
                                                               />
                                                      </div>
                                             </div>
                                             <div className="Row flex grow items-center justify-between text-[#ACE3E5] text-sm mobile:text-[0.85rem] font-medium">
                                                      <div>
                                                               Liquidity
                                                      </div>
                                             </div>
                                    </div>
                           </span>
                           <span
                                    className="Link clickable group block py-2.5 mobile:py-2 px-4 mobile:px-1 rounded-xl mobile:rounded-lg hover:bg-[rgba(57,208,216,0.05)]"
                                    tabIndex="0"
                           >
                                    <div className="Row flex items-center">
                                             <div className="grid bg-gradient-to-br from-[rgba(57,208,216,0.2)] to-[rgba(57,208,216,0)] rounded-lg p-1.5 mr-3">
                                                      <div className="Icon grid h-max w-max">
                                                               <img
                                                                        alt="entry-icon-concentra"
                                                                        className="select-none h-4 w-4"
                                                                        src="entry-icon-concentrated-pools.svg"
                                                               />
                                                      </div>
                                             </div>
                                             <div className="Row flex grow items-center justify-between text-[#ACE3E5] text-sm mobile:text-[0.85rem] font-medium">
                                                      <div>
                                                               Concentrated
                                                      </div>
                                             </div>
                                    </div>
                           </span>
                           <span
                                    className="Link clickable group block py-2.5 mobile:py-2 px-4 mobile:px-1 rounded-xl mobile:rounded-lg hover:bg-[rgba(57,208,216,0.05)]"
                                    tabIndex="0"
                           >
                                    <div className="Row flex items-center">
                                             <div className="grid bg-gradient-to-br from-[rgba(57,208,216,0.2)] to-[rgba(57,208,216,0)] rounded-lg p-1.5 mr-3">
                                                      <div className="Icon grid h-max w-max">
                                                               <img
                                                                        alt="entry-icon-pools"
                                                                        className="select-none h-4 w-4"
                                                                        src="entry-icon-pools.svg"
                                                               />
                                                      </div>
                                             </div>
                                             <div className="Row flex grow items-center justify-between text-[#ACE3E5] text-sm mobile:text-[0.85rem] font-medium">
                                                      <div>
                                                               Pools
                                                      </div>
                                             </div>
                                    </div>
                           </span>
                           <span
                                    className="Link clickable group block py-2.5 mobile:py-2 px-4 mobile:px-1 rounded-xl mobile:rounded-lg hover:bg-[rgba(57,208,216,0.05)] bg-[rgba(57,208,216,0.1)]"
                                    tabIndex="0"
                           >
                                    <div className="Row flex items-center">
                                             <div className="grid bg-gradient-to-br from-[rgba(57,208,216,0.2)] to-[rgba(57,208,216,0)] rounded-lg p-1.5 mr-3">
                                                      <div className="Icon grid h-max w-max">
                                                               <img
                                                                        alt="entry-icon-farms"
                                                                        className="select-none h-4 w-4"
                                                                        src="entry-icon-farms.svg"
                                                               />
                                                      </div>
                                             </div>
                                             <div className="Row flex grow items-center justify-between text-[rgba(57,208,216,1)] text-sm mobile:text-[0.85rem] font-medium">
                                                      <div>
                                                               Farms
                                                      </div>
                                             </div>
                                    </div>
                           </span>
                           <span
                                    className="Link clickable group block py-2.5 mobile:py-2 px-4 mobile:px-1 rounded-xl mobile:rounded-lg hover:bg-[rgba(57,208,216,0.05)]"
                                    tabIndex="0"
                           >
                                    <div className="Row flex items-center">
                                             <div className="grid bg-gradient-to-br from-[rgba(57,208,216,0.2)] to-[rgba(57,208,216,0)] rounded-lg p-1.5 mr-3">
                                                      <div className="Icon grid h-max w-max">
                                                               <img
                                                                        alt="entry-icon-staking"
                                                                        className="select-none h-4 w-4"
                                                                        src="entry-icon-staking.svg"
                                                               />
                                                      </div>
                                             </div>
                                             <div className="Row flex grow items-center justify-between text-[#ACE3E5] text-sm mobile:text-[0.85rem] font-medium">
                                                      <div>
                                                               Staking
                                                      </div>
                                             </div>
                                    </div>
                           </span>
                           <span
                                    className="Link clickable group block py-2.5 mobile:py-2 px-4 mobile:px-1 rounded-xl mobile:rounded-lg hover:bg-[rgba(57,208,216,0.05)]"
                                    tabIndex="0"
                           >
                                    <div className="Row flex items-center">
                                             <div className="grid bg-gradient-to-br from-[rgba(57,208,216,0.2)] to-[rgba(57,208,216,0)] rounded-lg p-1.5 mr-3">
                                                      <div className="Icon grid h-max w-max">
                                                               <img
                                                                        alt="entry-icon-acceleray"
                                                                        className="select-none h-4 w-4"
                                                                        src="entry-icon-acceleraytor.svg"
                                                               />
                                                      </div>
                                             </div>
                                             <div className="Row flex grow items-center justify-between text-[#ACE3E5] text-sm mobile:text-[0.85rem] font-medium">
                                                      <div>
                                                               AcceleRaytor
                                                      </div>
                                             </div>
                                    </div>
                           </span>
                  </div>
                  <div className="Col flex flex-col overflow-scroll no-native-scrollbar">
                           <div className="mx-8 border-b border-[rgba(57,208,216,0.16)] my-2 mobile:my-1" />
                           <div className="flex-1 overflow-auto no-native-scrollbar mt-2">
                                    <div>
                                             <div className="PopoverButton ">
                                                      <div className="block py-4 mobile:py-3 px-8 pl-6 mobile:px-5 hover:bg-[rgba(57,208,216,0.1)] active:bg-[rgba(41,157,163,0.3)] cursor-pointer group">
                                                               <div className="Row flex items-center w-full mobile:justify-center">
                                                                        <div className="h-4 w-4 mobile:w-3 mobile:h-3 grid place-items-center mr-3 ">
                                                                                 <div
                                                                                          className="w-1.5 h-1.5 mobile:w-1 mobile:h-1 bg-[#2de680] text-[#2de680] rounded-full"
                                                                                          style={{
                                                                                                   boxShadow: '0 0 6px 1px currentColor'
                                                                                          }}
                                                                                 />
                                                                        </div>
                                                                        <span className="text-[rgba(172,227,229)] text-sm mobile:text-xs font-medium flex-grow overflow-ellipsis overflow-hidden">
                                                                                 --
                                                                        </span>
                                                                        <div className="Icon grid h-max w-max">
                                                                                 <svg
                                                                                          aria-hidden="true"
                                                                                          className="select-none h-4 w-4 text-[#ACE3E6]"
                                                                                          fill="none"
                                                                                          stroke="currentColor"
                                                                                          strokeWidth="1.5"
                                                                                          viewBox="0 0 24 24"
                                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                                 >
                                                                                          <path
                                                                                                   d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                                                                                   strokeLinecap="round"
                                                                                                   strokeLinejoin="round"
                                                                                          />
                                                                                 </svg>
                                                                        </div>
                                                               </div>
                                                      </div>
                                             </div>
                                    </div>
                                    <div>
                                             <div className="PopoverButton ">
                                                      <span className="block py-3 mobile:py-2 px-8 pl-6 mobile:px-5 hover:bg-[rgba(57,208,216,0.1)] active:bg-[rgba(41,157,163,0.3)] cursor-pointer group">
                                                               <div className="Row flex items-center w-full mobile:justify-center">
                                                                        <div className="Icon grid h-max w-max mr-3 text-[rgba(57,208,216,1)]">
                                                                                 <img
                                                                                          alt="msic-settings"
                                                                                          className="select-none h-4 w-4"
                                                                                          src="msic-settings.svg"
                                                                                 />
                                                                        </div>
                                                                        <span className="text-[#ACE3E5] text-sm mobile:text-[0.85rem] font-medium flex-grow ">
                                                                                 Settings
                                                                        </span>
                                                                        <div className="Icon grid h-max w-max">
                                                                                 <svg
                                                                                          aria-hidden="true"
                                                                                          className="select-none h-4 w-4 text-[#ACE3E6]"
                                                                                          fill="none"
                                                                                          stroke="currentColor"
                                                                                          strokeWidth="1.5"
                                                                                          viewBox="0 0 24 24"
                                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                                 >
                                                                                          <path
                                                                                                   d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                                                                                   strokeLinecap="round"
                                                                                                   strokeLinejoin="round"
                                                                                          />
                                                                                 </svg>
                                                                        </div>
                                                               </div>
                                                      </span>
                                             </div>
                                    </div>
                                    <div>
                                             <div className="PopoverButton ">
                                                      <span className="block py-3 mobile:py-2 px-8 pl-6 mobile:px-5 hover:bg-[rgba(57,208,216,0.1)] active:bg-[rgba(41,157,163,0.3)] cursor-pointer group">
                                                               <div className="Row flex items-center w-full mobile:justify-center">
                                                                        <div className="Icon grid h-max w-max mr-3 text-[rgba(57,208,216,1)]">
                                                                                 <img
                                                                                          alt="msic-community"
                                                                                          className="select-none h-4 w-4"
                                                                                          src="msic-community.svg"
                                                                                 />
                                                                        </div>
                                                                        <span className="text-[#ACE3E5] text-sm mobile:text-[0.85rem] font-medium flex-grow ">
                                                                                 Community
                                                                        </span>
                                                                        <div className="Icon grid h-max w-max">
                                                                                 <svg
                                                                                          aria-hidden="true"
                                                                                          className="select-none h-4 w-4 text-[#ACE3E6]"
                                                                                          fill="none"
                                                                                          stroke="currentColor"
                                                                                          strokeWidth="1.5"
                                                                                          viewBox="0 0 24 24"
                                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                                 >
                                                                                          <path
                                                                                                   d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                                                                                   strokeLinecap="round"
                                                                                                   strokeLinejoin="round"
                                                                                          />
                                                                                 </svg>
                                                                        </div>
                                                               </div>
                                                      </span>
                                             </div>
                                    </div>
                                    <a
                                             className="Link clickable block py-3 mobile:py-2 px-8 pl-6 mobile:px-5 hover:bg-[rgba(57,208,216,0.1)] active:bg-[rgba(41,157,163,0.3)] cursor-pointer group"
                                             href="https://raydium.gitbook.io/raydium/"
                                             rel="nofollow noopener noreferrer"
                                             tabIndex="0"
                                             target="_blank"
                                    >
                                             <div className="Row flex items-center w-full mobile:justify-center">
                                                      <div className="Icon grid h-max w-max mr-3 text-[rgba(57,208,216,1)]">
                                                               <img
                                                                        alt="msic-docs"
                                                                        className="select-none h-4 w-4"
                                                                        src="msic-docs.svg"
                                                               />
                                                      </div>
                                                      <span className="text-[#ACE3E5] text-sm mobile:text-[0.85rem] font-medium flex-grow group-hover:text-[rgba(57,208,216,1)]">
                                                               Docs
                                                      </span>
                                             </div>
                                    </a>
                                    <a
                                             className="Link clickable block py-3 mobile:py-2 px-8 pl-6 mobile:px-5 hover:bg-[rgba(57,208,216,0.1)] active:bg-[rgba(41,157,163,0.3)] cursor-pointer group"
                                             href="https://v1.raydium.io/swap"
                                             rel="nofollow noopener noreferrer"
                                             tabIndex="0"
                                             target="_blank"
                                    >
                                             <div className="Row flex items-center w-full mobile:justify-center">
                                                      <div className="Icon grid h-max w-max mr-3 text-[rgba(57,208,216,1)]">
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
                                                                                 d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                                                                                 strokeLinecap="round"
                                                                                 strokeLinejoin="round"
                                                                        >
                                                                        </path>
                                                               </svg>
                                                      </div>
                                                      <span className="text-[#ACE3E5] text-sm mobile:text-[0.85rem] font-medium flex-grow group-hover:text-[rgba(57,208,216,1)]">
                                                               Raydium                        V1
                                                      </span>
                                             </div>
                                    </a>
                                    <a
                                             className="Link clickable block py-3 mobile:py-2 px-8 pl-6 mobile:px-5 hover:bg-[rgba(57,208,216,0.1)] active:bg-[rgba(41,157,163,0.3)] cursor-pointer group"
                                             href="https://forms.gle/DvUS4YknduBgu2D7A"
                                             rel="nofollow noopener noreferrer"
                                             tabIndex="0"
                                             target="_blank"
                                    >
                                             <div className="Row flex items-center w-full mobile:justify-center">
                                                      <div className="Icon grid h-max w-max mr-3 text-[rgba(57,208,216,1)]">
                                                               <img
                                                                        alt="misc-feedback"
                                                                        className="select-none h-4 w-4"
                                                                        src="misc-feedback.svg"
                                                               />
                                                      </div>
                                                      <span className="text-[#ACE3E5] text-sm mobile:text-[0.85rem] font-medium flex-grow group-hover:text-[rgba(57,208,216,1)]">
                                                               Feedback
                                                      </span>
                                             </div>
                                    </a>
                           </div>
                  </div>
                  <div>
                           <div className="PopoverButton ">
                                    <div className="text-sm mobile:text-xs m-2 mb-0 leading-relaxed opacity-50 hover:opacity-100 transition font-medium text-[#abc4ff] whitespace-nowrap cursor-default">
                                             <div>
                                                      V 2.11.44
                                             </div>
                                             <div>
                                                      <div className="inline-block" />
                                             </div>
                                    </div>
                           </div>
                  </div>
         </div>
</div>
  )
}

export default Sidenav
