import React from 'react'
import Image from "next/image";
import '../asset/style/main.css'
function page() {
  return (
    <>
      <div id="__next">
  <div className="app">
    <style
      dangerouslySetInnerHTML={{
        __html: '          #nprogress {            pointer-events: none;          }          #nprogress .bar {            background: #34ade5;            position: fixed;            z-index: 9999;            top: 0;            left: 0;            width: 100%;            height: 3px;          }          #nprogress .peg {            display: block;            position: absolute;            right: 0px;            width: 100px;            height: 100%;            box-shadow: 0 0 10px #34ade5, 0 0 5px #34ade5;            opacity: 1;            -webkit-transform: rotate(3deg) translate(0px, -4px);            -ms-transform: rotate(3deg) translate(0px, -4px);            transform: rotate(3deg) translate(0px, -4px);          }          #nprogress .spinner {            display: block;            position: fixed;            z-index: 1031;            top: 15px;            right: 15px;          }          #nprogress .spinner-icon {            width: 18px;            height: 18px;            box-sizing: border-box;            border: solid 2px transparent;            border-top-color: #34ade5;            border-left-color: #34ade5;            border-radius: 50%;            -webkit-animation: nprogresss-spinner 400ms linear infinite;            animation: nprogress-spinner 400ms linear infinite;          }          .nprogress-custom-parent {            overflow: hidden;            position: relative;          }          .nprogress-custom-parent #nprogress .spinner,          .nprogress-custom-parent #nprogress .bar {            position: absolute;          }          @-webkit-keyframes nprogress-spinner {            0% {              -webkit-transform: rotate(0deg);            }            100% {              -webkit-transform: rotate(360deg);            }          }          @keyframes nprogress-spinner {            0% {              transform: rotate(0deg);            }            100% {              transform: rotate(360deg);            }          }        '
      }}
     />
    <div
      className="p-44 mobile:p-2"
      style={{
        backgroundColor: '#141041',
        backgroundImage: 'url(%27/backgroundImages/home-page-bg-lights.html)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        display: 'flow-root',
        minHeight: '100vh'
      }}
    >
      <div className="Card frosted-glass-lightsmoke rounded-3xl mobile:rounded-xl py-12 px-24 mobile:p-4 mx-auto max-w-6xl">
        <div className="text-center text-5xl mobile:text-2xl mb-8 mobile:mb-2">
          Disclaimer
        </div>
        <div>
          <div className="text-[#adc6ff] mobile:text-sm leading-relaxed mb-4">
            This website-hosted user interface (this                “Interface”) is an open source frontend software portal to the Raydium protocol, a decentralized and                community-driven collection of blockchain-enabled smart contracts and tools (the “Raydium Protocol”).                This Interface and the Raydium Protocol are made available by the Raydium Holding Foundation, however                all transactions conducted on the protocol are run by related permissionless smart contracts. As the                Interface is open-sourced and the Raydium Protocol and its related smart contracts are accessible by any                user, entity or third party, there are a number of third party web and mobile user-interfaces that allow                for interaction with the Raydium Protocol.
          </div>
          <div className="text-[#adc6ff] mobile:text-sm leading-relaxed mb-4">
            THIS INTERFACE AND THE RAYDIUM PROTOCOL                ARE PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND. The Raydium Holding                Foundation does not provide, own, or control the Raydium Protocol or any transactions conducted on the                protocol or via related smart contracts. By using or accessing this Interface or the Raydium Protocol                and related smart contracts, you agree that no developer or entity involved in creating, deploying or                maintaining this Interface or the Raydium Protocol will be liable for any claims or damages whatsoever                associated with your use, inability to use, or your interaction with other users of, this Interface or                the Raydium Protocol, including any direct, indirect, incidental, special, exemplary, punitive or                consequential damages, or loss of profits, digital assets, tokens, or anything else of value.
          </div>
          <div className="text-[#adc6ff] mobile:text-sm leading-relaxed mb-4">
            The Raydium Protocol is not available to                residents of Belarus, the Central African Republic, The Democratic Republic of Congo, the Democratic                People's Republic of Korea, the Crimea, Donetsk People’s Republic, and Luhansk People’s Republic                regions of Ukraine, Cuba, Iran, Libya, Somalia, Sudan, South Sudan, Syria, the USA, Yemen, Zimbabwe and                any other jurisdiction in which accessing or using the Raydium Protocol is prohibited (the “Prohibited                Jurisdictions”).
          </div>
          <div className="text-[#adc6ff] mobile:text-sm leading-relaxed mb-4">
            By using or accessing this Interface, the                Raydium Protocol, or related smart contracts, you represent that you are not located in, incorporated or                established in, or a citizen or resident of the Prohibited Jurisdictions. You also represent that you                are not subject to sanctions or otherwise designated on any list of prohibited or restricted parties or                excluded or denied persons, including but not limited to the lists maintained by the United States’                Department of Treasury’s Office of Foreign Assets Control, the United Nations Security Council, the                European Union or its Member States, or any other government authority.
          </div>
        </div>
      </div>
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
      
    </>
  )
}

export default page