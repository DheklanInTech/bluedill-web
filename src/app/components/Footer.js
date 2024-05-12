
import React from 'react'

function Footer() {
  return (
         <footer
         className="pt-56 overflow-hidden"
         style={{
           background: 'url(/home-footer-bg.html) 0 0 / 100% 100%'
         }}
       >
         <div className="grid mobile:gap-14 justify-around px-[10%] grid-cols-4 tablet:grid-cols-3 mobile:grid-cols-1 gap-16 gap-y-4">
           <div>
             <div className="mb-8">
               <div className="text-sm mb-3 tablet:text-center">
                 ABOUT
               </div>
               <div
                 className="w-6 h-px my-2 rounded-full tablet:mx-auto"
                 style={{
                   background: 'radial-gradient(39.84% 47.5% at 96.82% 58.33%, #39d0d8 0%, #2b6aff 100%)'
                 }}
               />
             </div>
             <div className="Col flex flex-col gap-6">
               <a
                 className="Link clickable hover:underline underline-offset-1 text-[#c4d6ff] hover:text-white tablet:text-center"
                 href="https://raydium.gitbook.io/raydium/"
                 rel="nofollow noopener noreferrer"
                 tabIndex="0"
                 target="_blank"
               >
                 Documentation
               </a>
               <a
                 className="Link clickable hover:underline underline-offset-1 text-[#c4d6ff] hover:text-white tablet:text-center"
                 href="https://coinmarketcap.com/currencies/raydium/"
                 rel="nofollow noopener noreferrer"
                 tabIndex="0"
                 target="_blank"
               >
                 CoinMarketCap
               </a>
               <a
                 className="Link clickable hover:underline underline-offset-1 text-[#c4d6ff] hover:text-white tablet:text-center"
                 href="https://www.coingecko.com/en/coins/raydium"
                 rel="nofollow noopener noreferrer"
                 tabIndex="0"
                 target="_blank"
               >
                 CoinGecko
               </a>
               <a
                 className="Link clickable hover:underline underline-offset-1 text-[#c4d6ff] hover:text-white tablet:text-center"
                 href="docs/disclaimer/index.html"
                 rel="nofollow noopener noreferrer"
                 tabIndex="0"
                 target="_blank"
               >
                 Disclaimer
               </a>
             </div>
           </div>
           <div>
             <div className="mb-8">
               <div className="text-sm mb-3 tablet:text-center">
                 PROTOCOL
               </div>
               <div
                 className="w-6 h-px my-2 rounded-full tablet:mx-auto"
                 style={{
                   background: 'radial-gradient(39.84% 47.5% at 96.82% 58.33%, #39d0d8 0%, #2b6aff 100%)'
                 }}
               />
             </div>
             <div className="Col flex flex-col gap-6">
               <a
                 className="Link clickable hover:underline underline-offset-1 text-[#c4d6ff] hover:text-white tablet:text-center"
                 href="https://forms.gle/Fjq4MiRA2qWbPyt29"
                 rel="nofollow noopener noreferrer"
                 tabIndex="0"
                 target="_blank"
               >
                 Apply for DropZone
               </a>
               <a
                 className="Link clickable hover:underline underline-offset-1 text-[#c4d6ff] hover:text-white tablet:text-center"
                 href="https://docs.google.com/forms/d/1Mk-x0OcI1tCZzL0Lj_WY8d02dMXsc-Z2AG3AaO6W_Rc/edit#responses"
                 rel="nofollow noopener noreferrer"
                 tabIndex="0"
                 target="_blank"
               >
                 Apply                    for Fusion Pool
               </a>
               <a
                 className="Link clickable hover:underline underline-offset-1 text-[#c4d6ff] hover:text-white tablet:text-center"
                 href="https://docs.google.com/forms/d/1Mk-x0OcI1tCZzL0Lj_WY8d02dMXsc-Z2AG3AaO6W_Rc/edit#responses"
                 rel="nofollow noopener noreferrer"
                 tabIndex="0"
                 target="_blank"
               >
                 Apply                    for AcceleRaytor
               </a>
               <a
                 className="Link clickable hover:underline underline-offset-1 text-[#c4d6ff] hover:text-white tablet:text-center"
                 href="https://raydium.gitbook.io/raydium/permissionless/creating-a-pool"
                 rel="nofollow noopener noreferrer"
                 tabIndex="0"
                 target="_blank"
               >
                 Permissionless Pool
               </a>
             </div>
           </div>
           <div>
             <div className="mb-8">
               <div className="text-sm mb-3 tablet:text-center">
                 SUPPORT
               </div>
               <div
                 className="w-6 h-px my-2 rounded-full tablet:mx-auto"
                 style={{
                   background: 'radial-gradient(39.84% 47.5% at 96.82% 58.33%, #39d0d8 0%, #2b6aff 100%)'
                 }}
               />
             </div>
             <div className="Col flex flex-col gap-6">
               <a
                 className="Link clickable hover:underline underline-offset-1 text-[#c4d6ff] hover:text-white tablet:text-center"
                 href="https://raydium.gitbook.io/raydium/trading-on-serum/spl-wallets"
                 rel="nofollow noopener noreferrer"
                 tabIndex="0"
                 target="_blank"
               >
                 Getting Started on                    Raydium
               </a>
               <a
                 className="Link clickable hover:underline underline-offset-1 text-[#c4d6ff] hover:text-white tablet:text-center"
                 href="https://raydium.gitbook.io/raydium/trading-on-serum/faq"
                 rel="nofollow noopener noreferrer"
                 tabIndex="0"
                 target="_blank"
               >
                 FAQ
               </a>
             </div>
           </div>
           <div className="tablet:col-span-full tablet:justify-self-center">
             <div className="mb-8 tablet:hidden">
               <div className="text-sm mb-3">
                 COMMUNITY
               </div>
               <div
                 className="w-6 h-px my-2 rounded-full"
                 style={{
                   background: 'radial-gradient(39.84% 47.5% at 96.82% 58.33%, #39d0d8 0%, #2b6aff 100%)'
                 }}
               />
             </div>
             <div className="flex flex-col tablet:flex-row gap-6 tablet:gap-10">
               <a
                 className="Link clickable hover:underline underline-offset-1 text-[#c4d6ff] hover:text-white"
                 href="https://twitter.com/RaydiumProtocol"
                 rel="nofollow noopener noreferrer"
                 tabIndex="0"
                 target="_blank"
               >
                 <div className="Row flex items-center gap-2">
                   <div className="Icon grid h-max w-max frosted-glass-teal p-1.5 rounded-lg text">
                     <img
                       alt="media-twitter"
                       className="select-none w-5 h-5 tablet:w-6 tablet:h-6"
                       src="/media-twitter.svg"
                     />
                   </div>
                   <div className="tablet:hidden">
                     Twitter
                   </div>
                 </div>
               </a>
               <a
                 className="Link clickable hover:underline underline-offset-1 text-[#c4d6ff] hover:text-white"
                 href="https://raydium.medium.com/"
                 rel="nofollow noopener noreferrer"
                 tabIndex="0"
                 target="_blank"
               >
                 <div className="Row flex items-center gap-2">
                   <div className="Icon grid h-max w-max frosted-glass-teal p-1.5 rounded-lg text">
                     <img
                       alt="media-medium"
                       className="select-none w-5 h-5 tablet:w-6 tablet:h-6"
                       src="/media-medium.svg"
                     />
                   </div>
                   <div className="tablet:hidden">
                     Medium
                   </div>
                 </div>
               </a>
               <a
                 className="Link clickable hover:underline underline-offset-1 text-[#c4d6ff] hover:text-white"
                 href="https://discord.gg/raydium"
                 rel="nofollow noopener noreferrer"
                 tabIndex="0"
                 target="_blank"
               >
                 <div className="Row flex items-center gap-2">
                   <div className="Icon grid h-max w-max frosted-glass-teal p-1.5 rounded-lg text">
                     <img
                       alt="media-discord"
                       className="select-none w-5 h-5 tablet:w-6 tablet:h-6"
                       src="/media-discord.svg"
                     />
                   </div>
                   <div className="tablet:hidden">
                     Discord
                   </div>
                 </div>
               </a>
               <div className="Row flex items-center gap-2">
                 <div>
                   <div className="PopoverButton ">
                     <div className="Row flex text-[#c4d6ff] hover:text-white items-center gap-1 cursor-pointer">
                       <div className="Icon grid h-max w-max frosted-glass-teal p-1.5 rounded-lg text">
                         <img
                           alt="media-telegram"
                           className="select-none w-5 h-5 tablet:w-6 tablet:h-6"
                           src="/media-telegram.svg"
                         />
                       </div>
                       <div className="tablet:hidden">
                         Telegram
                       </div>
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
                             d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                             strokeLinecap="round"
                             strokeLinejoin="round"
                           >
                           </path>
                         </svg>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <img
           alt="logo-with-text"
           className="Image mx-auto p-20 transform scale-125 pointer-events-none"
           src="logo-with-text.svg"
         />
       </footer>
  )
}

export default Footer
