import React from 'react'
import '../asset/style/main.css';
// import '../asset/js/framework';

function Swap() {
  return (
    <>

<div id="__next">
  <div className="app">
    <style
      dangerouslySetInnerHTML={{
        __html: '                #nprogress {                    pointer-events: none;                }                #nprogress .bar {                    background: #34ade5;                    position: fixed;                    z-index: 9999;                    top: 0;                    left: 0;                    width: 100%;                    height: 3px;                }                #nprogress .peg {                    display: block;                    position: absolute;                    right: 0px;                    width: 100px;                    height: 100%;                    box-shadow: 0 0 10px #34ade5, 0 0 5px #34ade5;                    opacity: 1;                    -webkit-transform: rotate(3deg) translate(0px, -4px);                    -ms-transform: rotate(3deg) translate(0px, -4px);                    transform: rotate(3deg) translate(0px, -4px);                }                #nprogress .spinner {                    display: block;                    position: fixed;                    z-index: 1031;                    top: 15px;                    right: 15px;                }                #nprogress .spinner-icon {                    width: 18px;                    height: 18px;                    box-sizing: border-box;                    border: solid 2px transparent;                    border-top-color: #34ade5;                    border-left-color: #34ade5;                    border-radius: 50%;                    -webkit-animation: nprogresss-spinner 400ms linear infinite;                    animation: nprogress-spinner 400ms linear infinite;                }                .nprogress-custom-parent {                    overflow: hidden;                    position: relative;                }                .nprogress-custom-parent #nprogress .spinner,                .nprogress-custom-parent #nprogress .bar {                    position: absolute;                }                @-webkit-keyframes nprogress-spinner {                    0% {                        -webkit-transform: rotate(0deg);                    }                    100% {                        -webkit-transform: rotate(360deg);                    }                }                @keyframes nprogress-spinner {                    0% {                        transform: rotate(0deg);                    }                    100% {                        transform: rotate(360deg);                    }                }            '
      }}
     />
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
      <div className="grid-area-d">
        <div className="w-full">
          <div className="flex flex-row flex bg-ground-color-light">
            <div
              className="flex items-center justify-center text-center my-2"
              style={{
                width: '95%'
              }}
            >
              <div className="text-primary text-sm font-normal">
                <span>
                  In case you missed it, Raydium V3 Beta is live - check it out{' '}
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
                  Tweet
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
      <nav className="select-none text-white px-12 py-4 mobile:p-0 transition-all grid-area-a">
        <div className="Row flex justify-between items-center mobile:h-14 mobile:bg-cyberpunk-card-bg">
          <span
            className="Link clickable text-[#39D0D8] hover:underline underline-offset-1"
            tabIndex="0"
          >
            <img
              alt="logo-with-text"
              className="Image cursor-pointer  mobile:hidden"
              src="/logo/logo-with-text.svg"
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
                    />
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
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <button
                aria-checked="true"
                className="Switch bg-[#39D0D8] relative flex flex-shrink-0 h-5 w-10 mobile:h-4 mobile:w-7 border-2 border-transparent rounded-full cursor-pointer transition-all ease-in-out duration-200 focus:outline-none"
                data-headlessui-state="checked"
                id="headlessui-switch-:R1ad5m:"
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
                        src="/msic-wallet.svg"
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
      <div className="Col flex flex-col h-full overflow-y-auto w-56 mobile:w-64 mobile:rounded-tr-2xl mobile:rounded-br-2xl flex-container grid-area-b mobile:hidden">
        <div className="Col flex-col grid grid-rows-[2fr,1fr,auto] flex-1 overflow-hidden">
          <div className="shrink overflow-y-auto min-h-[120px] py-4 space-y-1 mobile:py-0 px-2 mr-2 mobile:ml-2 mb-2">
            <span
              className="Link clickable group block py-2.5 mobile:py-2 px-4 mobile:px-1 rounded-xl mobile:rounded-lg hover:bg-[rgba(57,208,216,0.05)] bg-[rgba(57,208,216,0.1)]"
              tabIndex="0"
            >
              <div className="Row flex items-center">
                <div className="grid bg-gradient-to-br from-[rgba(57,208,216,0.2)] to-[rgba(57,208,216,0)] rounded-lg p-1.5 mr-3">
                  <div className="Icon grid h-max w-max">
                    <img
                      alt="entry-icon-swap"
                      className="select-none h-4 w-4"
                      src="/entry-icon-swap.svg"
                    />
                  </div>
                </div>
                <div className="Row flex grow items-center justify-between text-[rgba(57,208,216,1)] text-sm mobile:text-[0.85rem] font-medium">
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
                      src="/entry-icon-liquidity.svg"
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
                      src="/entry-icon-concentrated-pools.svg"
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
                      src="/entry-icon-pools.svg"
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
              className="Link clickable group block py-2.5 mobile:py-2 px-4 mobile:px-1 rounded-xl mobile:rounded-lg hover:bg-[rgba(57,208,216,0.05)]"
              tabIndex="0"
            >
              <div className="Row flex items-center">
                <div className="grid bg-gradient-to-br from-[rgba(57,208,216,0.2)] to-[rgba(57,208,216,0)] rounded-lg p-1.5 mr-3">
                  <div className="Icon grid h-max w-max">
                    <img
                      alt="entry-icon-farms"
                      className="select-none h-4 w-4"
                      src="/entry-icon-farms.svg"
                    />
                  </div>
                </div>
                <div className="Row flex grow items-center justify-between text-[#ACE3E5] text-sm mobile:text-[0.85rem] font-medium">
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
                      src="/entry-icon-staking.svg"
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
                      src="/entry-icon-acceleraytor.svg"
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
                          src="/msic-settings.svg"
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
                          src="/msic-community.svg"
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
                      src="/msic-docs.svg"
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
                      />
                    </svg>
                  </div>
                  <span className="text-[#ACE3E5] text-sm mobile:text-[0.85rem] font-medium flex-grow group-hover:text-[rgba(57,208,216,1)]">
                    Raydium V1
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
                      src="/misc-feedback.svg"
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
                  V                    2.11.44
                </div>
                <div>
                  <div className="inline-block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main
        className="flex flex-col PageLayoutContent relative grid-area-c bg-gradient-to-b from-[#0c0927] to-[#110d36] rounded-tl-3xl mobile:rounded-none"
        style={{
          overflowX: 'hidden',
          overflowY: 'scroll'
        }}
      >
        <div className="grow h-0 isolate flex-container p-12 mobile:py-2 mobile:px-3">
          <div className="Row flex justify-center mb-12 mobile:mb-2">
            <div
              className="flex rounded-full p-1 bg-cyberpunk-card-bg"
              id="headlessui-radiogroup-:R375m:"
              role="radiogroup"
            >
              <div
                aria-checked="true"
                className="cursor-pointer flex grow"
                data-headlessui-state="checked"
                id="headlessui-radiogroup-option-:R3b75m:"
                role="radio"
                tabIndex="0"
              >
                <div
                  className="grid grow place-items-center min-w-[96px] mobile:min-w-[76px] px-3 mobile:px-2 h-9 mobile:h-7 text-sm mobile:text-xs grid rounded-full place-items-center font-medium whitespace-nowrap text-white"
                  style={{
                    background: 'linear-gradient(245.22deg, rgb(218, 46, 239), rgb(43, 106, 255), rgb(57, 208, 216))',
                    backgroundPosition: '0%',
                    backgroundSize: '200% 100%'
                  }}
                >
                  Swap
                </div>
              </div>
              <div
                aria-checked="false"
                className="cursor-pointer flex grow"
                data-headlessui-state=""
                id="headlessui-radiogroup-option-:R5b75m:"
                role="radio"
                tabIndex="-1"
              >
                <div className="grid grow place-items-center min-w-[96px] mobile:min-w-[76px] px-3 mobile:px-2 h-9 mobile:h-7 text-sm mobile:text-xs grid rounded-full place-items-center font-medium whitespace-nowrap text-[#ABC4FF]">
                  Liquidity
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-[min(456px,100%)] self-center cyberpunk-bg-light"
            style={{
              backgroundImage: 'linear-gradient(var(--gradient-rotate, 246deg), #da2eef 7.97%, #2b6aff 49.17%, #39d0d8 92.1%)',
              borderRadius: '21.2px',
              padding: '1.2px'
            }}
          >
            <div
              className="Card rounded-3xl bg-cyberpunk-card-bg overflow-hidden py-8 pt-4 px-6 mobile:py-5 mobile:px-3"
              style={{
                height: '100%',
                width: '100%'
              }}
            >
              <div className="space-y-5 mt-5 mobile:mt-0">
                <div
                  className="Row flex relative flex-col bg-[#141041] cursor-text rounded-xl py-3 px-6 mobile:px-4"
                  tabIndex="0"
                >
                  <div className="Row flex justify-between mb-2">
                    <div className="text-xs mobile:text-2xs text-[rgba(171,196,255,.5)]">
                      From
                    </div>
                    <div className="text-xs mobile:text-2xs justify-self-end text-[rgba(171,196,255,.5)] clickable no-clicable-transform-effect clickable-filter-effect">
                      Balance: (Wallet not connected)
                    </div>
                  </div>
                  <div className="Row flex col-span-full items-center">
                    <div className="Row flex items-center gap-1.5 clickable clickable-mask-offset-2">
                      <div className="Col flex flex-col items-start">
                        <div className="text-[rgb(171,196,255)] max-w-[7em]  overflow-hidden text-ellipsis font-medium text-base flex-grow mobile:text-sm whitespace-nowrap">
                          --
                        </div>
                      </div>
                      <div className="Icon grid h-max w-max text-[#ABC4FF]">
                        <svg
                          aria-hidden="true"
                          className="select-none h-3 w-3"
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
                    <div className="my-1 mx-4 mobile:my-0 mobile:mx-2 border-r border-[rgba(171,196,255,0.5)] self-stretch" />
                    <div className="Row flex justify-between flex-grow-2">
                      <div className="Row flex gap-px items-center mr-2">
                        <button className="Button select-none inline-flex justify-center items-center gap-2 mobile:rounded-lg whitespace-nowrap appearance-none clickable clickable-filter-effect py-0.5 px-1.5 rounded text-[rgba(171,196,255,.5)] font-bold bg-[#1B1659] bg-opacity-80 text-xs mobile:text-2xs transition">
                          Max
                        </button>
                        <button className="Button select-none inline-flex justify-center items-center gap-2 mobile:rounded-lg whitespace-nowrap appearance-none clickable clickable-filter-effect py-0.5 px-1.5 rounded text-[rgba(171,196,255,.5)] font-bold bg-[#1B1659] bg-opacity-80 text-xs mobile:text-2xs transition">
                          Half
                        </button>
                      </div>
                      <div className="Row flex Input cursor-text items-center font-medium text-lg text-white flex-grow w-full">
                        <div className="flex flex-grow flex-shrink">
                          <input
                            autoComplete="off"
                            className="w-full overflow-hidden text-ellipsis bg-transparent border-none outline-none block text-right mobile:text-sm font-medium text-white"
                            defaultValue=""
                            inputMode="decimal"
                            min="0"
                            pattern="^[0-9]*[.,]?[0-9]{0,6}$"
                            step="0.000001"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Row flex items-center gap-2 justify-end text-xs mobile:text-2xs text-[rgba(171,196,255,.5)]">
                    <div className="invisible text-ellipsis overflow-hidden text-right">
                      --
                    </div>
                  </div>
                </div>
                <div className="relative h-8">
                  <div className="Row flex absolute items-center transition-all left-1/2 -translate-x-1/2">
                    <div className="Icon grid h-max w-max p-2 frosted-glass frosted-glass-teal rounded-full mr-4 clickable select-none transition">
                      <img
                        alt="msic-swap"
                        className="select-none h-4 w-4"
                        src="/msic-swap.svg"
                      />
                    </div>
                  </div>
                  <div className="absolute right-0 clickable">
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
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="Row flex relative flex-col bg-[#141041] cursor-text rounded-xl py-3 px-6 mobile:px-4"
                  tabIndex="0"
                >
                  <div className="Row flex justify-between mb-2">
                    <div className="text-xs mobile:text-2xs text-[rgba(171,196,255,.5)]">
                      To
                    </div>
                    <div className="text-xs mobile:text-2xs justify-self-end text-[rgba(171,196,255,.5)] ">
                      Balance: (Wallet not connected)
                    </div>
                  </div>
                  <div className="Row flex col-span-full items-center">
                    <div className="Row flex items-center gap-1.5 clickable clickable-mask-offset-2">
                      <div className="Col flex flex-col items-start">
                        <div className="text-[rgb(171,196,255)] max-w-[7em]  overflow-hidden text-ellipsis font-medium text-base flex-grow mobile:text-sm whitespace-nowrap">
                          --
                        </div>
                      </div>
                      <div className="Icon grid h-max w-max text-[#ABC4FF]">
                        <svg
                          aria-hidden="true"
                          className="select-none h-3 w-3"
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
                    <div className="my-1 mx-4 mobile:my-0 mobile:mx-2 border-r border-[rgba(171,196,255,0.5)] self-stretch" />
                    <div className="Row flex justify-between flex-grow-2">
                      <div className="Row flex gap-px items-center mr-2">
                        <button className="Button select-none inline-flex justify-center items-center gap-2 mobile:rounded-lg whitespace-nowrap appearance-none opacity-40 cursor-not-allowed py-0.5 px-1.5 rounded text-[rgba(171,196,255,.5)] font-bold bg-[#1B1659] bg-opacity-80 text-xs mobile:text-2xs transition">
                          Max
                        </button>
                        <button className="Button select-none inline-flex justify-center items-center gap-2 mobile:rounded-lg whitespace-nowrap appearance-none opacity-40 cursor-not-allowed py-0.5 px-1.5 rounded text-[rgba(171,196,255,.5)] font-bold bg-[#1B1659] bg-opacity-80 text-xs mobile:text-2xs transition">
                          Half
                        </button>
                      </div>
                      <div className="Row flex Input cursor-not-allowed items-center font-medium text-lg text-white flex-grow w-full">
                        <div className="flex flex-grow flex-shrink">
                          <input
                            autoComplete="off"
                            className="w-full overflow-hidden text-ellipsis bg-transparent border-none outline-none block text-right mobile:text-sm font-medium text-white"
                            defaultValue=""
                            inputMode="decimal"
                            min="0"
                            pattern="^[0-9]*[.,]?[0-9]{0,6}$"
                            readOnly
                            step="0.000001"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Row flex items-center gap-2 justify-end text-xs mobile:text-2xs text-[rgba(171,196,255,.5)]">
                    <div className="invisible text-ellipsis overflow-hidden text-right">
                      --
                    </div>
                  </div>
                </div>
              </div>
              <button className="Button select-none inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl mobile:rounded-lg font-medium whitespace-nowrap appearance-none bg-formkit-thumb-disable text-formkit-thumb-text-disabled opacity-40 cursor-not-allowed w-full frosted-glass-teal mt-5">
                Loading Tokens ...
              </button>
            </div>
          </div>
          <div className="Card rounded-3xl flex invisible flex-col mt-10 p-2 w-[min(456px,100%)] self-center bg-cyberpunk-card-bg">
            <div />
            <div />
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
       
    </>
  )
}

export default Swap
