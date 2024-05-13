import React from 'react'

function Notification() {
         return (
                  <div className="grid-area-d">
                  <div className="w-full">
                           <div className="flex flex-row  bg-ground-color-light">
                                    <div
                                             className="flex items-center justify-center text-center my-2"
                                             style={{
                                                      width: '95%'
                                             }}
                                    >
                                             <div className="text-primary text-sm font-normal">
                                                      <span>
                                                               In case you missed it, Raydium V3 Beta is live -                      check it out{' '}
                                                      </span>
                                                      <a
                                                               className="text-link-color"
                                                               href="https://beta.raydium.io"
                                                               rel="noreferrer"
                                                               target="_blank"
                                                      >
                                                               here
                                                      </a>
                                                      <span>
                                                               ! More info in the{' '}
                                                      </span>
                                                      <a
                                                               className="text-link-color"
                                                               href="https://x.com/RaydiumProtocol/status/1772563377501724786"
                                                               rel="noreferrer"
                                                               target="_blank"
                                                      >
                                                               Tweets
                                                      </a>
                                                      .
                                             </div>
                                    </div>
                                    <div
                                             className="flex items-center justify-center cursor-pointer hover:bg-ground-color"
                                             style={{
                                                      width: '5%'
                                             }}
                                    >
                                             ×
                                    </div>
                           </div>
                  </div>
                  <div className="w-full" />
                  <div className="w-full" />
                  <div className="w-full" />
         </div>
         )
}

export default Notification
