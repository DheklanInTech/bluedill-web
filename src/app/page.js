import Image from "next/image";
import './asset/style/main.css';
// import './asset/js/framework.js';
// import './asset/js/_buildManifest.js';
// import './asset/js/_ssgManifest.js';

export default function Home() {
  return (
    <>
      <div id="__next">
  <div className="app">
    <style
      dangerouslySetInnerHTML={
        __html: '          #nprogress {            pointer-events: none;          }          #nprogress .bar {            background: #34ade5;            position: fixed;            z-index: 9999;            top: 0;            left: 0;            width: 100%;            height: 3px;          }          #nprogress .peg {            display: block;            position: absolute;            right: 0px;            width: 100px;            height: 100%;            box-shadow: 0 0 10px #34ade5, 0 0 5px #34ade5;            opacity: 1;            -webkit-transform: rotate(3deg) translate(0px, -4px);            -ms-transform: rotate(3deg) translate(0px, -4px);            transform: rotate(3deg) translate(0px, -4px);          }          #nprogress .spinner {            display: block;            position: fixed;            z-index: 1031;            top: 15px;            right: 15px;          }          #nprogress .spinner-icon {            width: 18px;            height: 18px;            box-sizing: border-box;            border: solid 2px transparent;            border-top-color: #34ade5;            border-left-color: #34ade5;            border-radius: 50%;            -webkit-animation: nprogresss-spinner 400ms linear infinite;            animation: nprogress-spinner 400ms linear infinite;          }          .nprogress-custom-parent {            overflow: hidden;            position: relative;          }          .nprogress-custom-parent #nprogress .spinner,          .nprogress-custom-parent #nprogress .bar {            position: absolute;          }          @-webkit-keyframes nprogress-spinner {            0% {              -webkit-transform: rotate(0deg);            }            100% {              -webkit-transform: rotate(360deg);            }          }          @keyframes nprogress-spinner {            0% {              transform: rotate(0deg);            }            100% {              transform: rotate(360deg);            }          }        '
      }}
     />
    <div
      className="flow-root overflow-x-hidden"
      style={{
        backgroundColor: '#141041',
        backgroundImage: 'url(/home-page-bg-lights.html)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 95%'
      }}
    >
      <div className="flex flex-row  bg-ground-color-light">
        <div
          className="flex items-center justify-center text-center my-2"
          style={{
            width: '95%'
          }}
        >
          <div className="text-primary text-sm font-normal">
            <span>
              In case you missed it, Raydium V3 Beta is live - check                  it out{' '}
            </span>
            <a
              className="text-link-color"
              href="https://beta.raydium.io/"
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
      <div className="Row flex justify-between mobile:justify-center py-12 px-[min(160px,8vw)]">
        <img
          alt="logo-with-text"
          className="Image "
          src="logo-with-text.svg"
        />
        <button className="Button select-none inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl mobile:rounded-lg font-medium whitespace-nowrap appearance-none bg-formkit-thumb text-formkit-thumb-text-normal clickable clickable-filter-effect frosted-glass-teal">
          Launch              app
        </button>
      </div>
      <section className="grid-child-center grid-cover-container mb-16 relative">
        <img
          alt="home-bg-element-1"
          className="Image w-[744px] mobile:w-[394px]"
          src="/home-bg-element-1.png"
        />
        <div className="grid-cover-content children-center">
          <div className="font-light text-[64px] mobile:text-[30px] text-white mb-4 mt-14 mobile:mt-9 leading-[60px] mobile:leading-[32px]">
            An avenue for{' '}
            <br />
            the evolution of{' '}
            <span
              className="font-bold text-transparent bg-clip-text"
              style={{
                WebkitBackgroundClip: 'text',
                background: 'radial-gradient(circle at top right,#39d0d8,#2b6aff)',
                backgroundClip: 'text'
              }}
            >
              DeFi
            </span>
          </div>
          <div className="font-normal text-xl mobile:text-base text-[#adc6ff] mb-6">
            Light-speed{' '}
            <b>
              swaps
            </b>
            . Next-level
            <b>
              liquidity
            </b>
            .  Friction-less{' '}
            <b>
              yield
            </b>
            .
          </div>
          <div className="Row gap-8 mobile:gap-4 mb-16 mobile:mb-6 grid grid-cols-2-fr">
            <button className="Button select-none inline-flex justify-center items-center gap-2 py-2.5 rounded-xl mobile:rounded-lg font-medium whitespace-nowrap appearance-none bg-formkit-thumb clickable clickable-filter-effect home-rainbow-button-bg text-white mobile:text-xs px-5 mobile:px-4">
              <div className="Row flex items-center gap-2">
                <div>
                  Launch app
                </div>
                <div className="Icon grid h-max w-max">
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
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </button>
            <button className="Button select-none inline-flex justify-center items-center gap-2 py-2.5 rounded-xl mobile:rounded-lg font-medium whitespace-nowrap appearance-none bg-formkit-thumb clickable clickable-filter-effect frosted-glass-teal text-white mobile:text-xs px-5 mobile:px-4 forsted-blur">
              <div className="Row flex items-center gap-2">
                <div>
                  Read docs
                </div>
                <div className="Icon grid h-max w-max">
                  <img
                    alt="gitbook"
                    className="select-none h-4 w-4"
                    src="/gitbook.svg"
                  />
                </div>
              </div>
            </button>
          </div>
          <div className="Row gap-6 mobile:gap-3 mb-9 grid grid-cols-2-fr">
            <div className="Card frosted-glass-smoke forsted-blur-sm rounded-3xl mobile:rounded-2xl p-6 mobile:py-3 mobile:px-6 mobile:min-w-[156px] min-w-[250px] tablet:min-w-[250px]">
              <div className="text-sm text-[#adc6ff] mb-1 mobile:text-[8px]">
                TOTAL VALUE LOCKED
              </div>
              <div className="Row flex justify-center text-xl mobile:text-xs font-normal text-white tracking-widest mobile:tracking-wider">
                <div className="mr-1">
                  $
                </div>
              </div>
            </div>
            <div className="Card frosted-glass-smoke forsted-blur-sm rounded-3xl mobile:rounded-2xl p-6 mobile:py-3 mobile:px-6 mobile:min-w-[156px] min-w-[250px] tablet:min-w-[250px]">
              <div className="text-sm text-[#adc6ff] mb-1 mobile:text-[8px]">
                TOTAL TRADING VOLUME
              </div>
              <div className="Row flex justify-center text-xl mobile:text-xs font-normal text-white tracking-widest mobile:tracking-wider">
                <div className="mr-1">
                  $
                </div>
              </div>
            </div>
          </div>
          <img
            alt="build-on-slogan"
            className="Image transform mobile:scale-75"
            src="build-on-slogan.svg"
          />
        </div>
      </section>
      <section
        className="grid-child-center overflow-hidden relative mx-auto tablet:mx-5 px-24 tablet:p-8 max-w-[1320px] min-h-[506px] hidden rounded-[100px] mobile:rounded-[40px]"
        style={{
          background: 'radial-gradient(at center top, transparent 20%, hsl(245, 60%, 16%, 0.2)), url(/home-page-section1-light.html), #1b1659',
          backgroundSize: '100% 100%',
          boxShadow: '8px 8px 10px rgba(20, 16, 65, 0.05), -8px -8px 10px rgba(197, 191, 255, 0.05), inset 0 6px 20px rgba(197, 191, 255, 0.2), inset 0 -1px 25px rgba(197, 191, 255, 0.1)'
        }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            WebkitMaskImage: 'url(/home-bg-element-2.html)',
            WebkitMaskSize: 'cover',
            background: 'linear-gradient(245.22deg, #da2eef 7.97%, #2b6aff 49.17%, #39d0d8 92.1%)',
            maskImage: 'url(/home-bg-element-2.html)',
            maskSize: 'cover'
          }}
        >
        </div>
        <div>
          <div className="mb-8">
            <div
              className="w-10 h-px my-2 mx-auto rounded-full"
              style={{
                background: 'radial-gradient(39.84% 47.5% at 96.82% 58.33%, #39d0d8 0%, #2b6aff 100%)'
              }}
            />
            <div className="text-lg">
              A suite of features powering the evolution of DeFi on Solana
            </div>
          </div>
          <div className="grid gap-5 grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-1">
            <div className="Card flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl">
              <div className="frosted-glass-teal p-3 mb-3 rounded-xl">
                <div className="Icon grid h-max w-max">
                  <img
                    alt="home-trade"
                    className="select-none h-6 w-6"
                    src="/home-trade.svg"
                  />
                </div>
              </div>
              <div className="font-semibold text-lg text-white mb-2">
                Trade
              </div>
              <div className="font-light text-sm text-[#c4d6ff] mb-5">
                Swap or Trade quickly and cheaply.
              </div>
              <button className="Button select-none inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl mobile:rounded-lg font-medium whitespace-nowrap appearance-none bg-formkit-thumb text-formkit-thumb-text-normal clickable clickable-filter-effect frosted-glass-teal">
                Enter                    Exchange
              </button>
            </div>
            <div className="Card flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl">
              <div className="frosted-glass-teal p-3 mb-3 rounded-xl">
                <div className="Icon grid h-max w-max">
                  <img
                    alt="home-yield"
                    className="select-none h-6 w-6"
                    src="/home-yield.svg"
                  />
                </div>
              </div>
              <div className="font-semibold text-lg text-white mb-2">
                Yield
              </div>
              <div className="font-light text-sm text-[#c4d6ff] mb-5">
                Earn yield through fees and yield farms.
              </div>
              <button className="Button select-none inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl mobile:rounded-lg font-medium whitespace-nowrap appearance-none bg-formkit-thumb text-formkit-thumb-text-normal clickable clickable-filter-effect frosted-glass-teal">
                Enter                    Farms
              </button>
            </div>
            <div className="Card flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl">
              <div className="frosted-glass-teal p-3 mb-3 rounded-xl">
                <div className="Icon grid h-max w-max">
                  <img
                    alt="home-pool"
                    className="select-none h-6 w-6"
                    src="/home-pool.svg"
                  />
                </div>
              </div>
              <div className="font-semibold text-lg text-white mb-2">
                Pool
              </div>
              <div className="font-light text-sm text-[#c4d6ff] mb-5">
                Provide liquidity for any SPL token.
              </div>
              <button className="Button select-none inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl mobile:rounded-lg font-medium whitespace-nowrap appearance-none bg-formkit-thumb text-formkit-thumb-text-normal clickable clickable-filter-effect frosted-glass-teal">
                Add                    Liquidity
              </button>
            </div>
            <div className="Card flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl">
              <div className="frosted-glass-teal p-3 mb-3 rounded-xl">
                <div className="Icon grid h-max w-max">
                  <img
                    alt="home-acceleraytor"
                    className="select-none h-6 w-6"
                    src="/home-acceleraytor.svg"
                  />
                </div>
              </div>
              <div className="font-semibold text-lg text-white mb-2">
                AcceleRaytor
              </div>
              <div className="font-light text-sm text-[#c4d6ff] mb-5">
                Launchpad for new Solana projects.
              </div>
              <button className="Button select-none inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl mobile:rounded-lg font-medium whitespace-nowrap appearance-none bg-formkit-thumb text-formkit-thumb-text-normal clickable clickable-filter-effect frosted-glass-teal">
                View                    Projects
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="grid-child-center grid-cover-container">
        <div
          className="w-screen h-full"
          style={{
            background: 'url(/home-bg-element-3.html) 0% 0% / 100% 100%'
          }}
        />
        <div className="max-w-[1220px] px-14 tablet:px-4 mt-28 mx-16 tablet:mx-4 mb-44">
          <div className="mb-8">
            <div
              className="w-10 h-px my-2 mx-auto rounded-full"
              style={{
                background: 'radial-gradient(39.84% 47.5% at 96.82% 58.33%, #39d0d8 0%, #2b6aff 100%)'
              }}
            />
            <div className="text-lg">
              Raydium provides Ecosystem-Wide Liquidity for users and projects
            </div>
          </div>
          <div className="grid gap-6 grid-cols-3 tablet:grid-cols-1 mobile:grid-cols-1 justify-items-center">
            <div
              className="Card max-w-[356px] grid children-center frosted-glass-smoke forsted-blur-sm py-6 px-10 rounded-3xl"
              style={{
                alignItems: 'normal',
                gridTemplateRows: 'auto auto 1fr'
              }}
            >
              <div className="frosted-glass-teal p-3 mb-3 rounded-xl">
                <div className="Icon grid h-max w-max">
                  <img
                    alt="home-order-book-AMM"
                    className="select-none h-6 w-6"
                    src="/home-order-book-AMM.svg"
                  />
                </div>
              </div>
              <div className="font-semibold text-lg text-white mb-2">
                Order Book AMM
              </div>
              <div className="font-light text-[#c4d6ff] mb-5">
                Raydium's AMM interacts with                    OpenBook's central limit order book, meaning that pools have access to all                    order flow and liquidity on OpenBook, and vice versa.
              </div>
            </div>
            <div
              className="Card max-w-[356px] grid children-center frosted-glass-smoke forsted-blur-sm py-6 px-10 rounded-3xl"
              style={{
                alignItems: 'normal',
                gridTemplateRows: 'auto auto 1fr'
              }}
            >
              <div className="frosted-glass-teal p-3 mb-3 rounded-xl">
                <div className="Icon grid h-max w-max">
                  <img
                    alt="home-yield"
                    className="select-none h-6 w-6"
                    src="/home-yield.svg"
                  />
                </div>
              </div>
              <div className="font-semibold text-lg text-white mb-2">
                Best Price Swaps
              </div>
              <div className="font-light text-[#c4d6ff] mb-5">
                Raydium determines the best swap route among all pools in                    order to provide the best price for users, and executes accordingly.
              </div>
            </div>
            <div
              className="Card max-w-[356px] grid children-center frosted-glass-smoke forsted-blur-sm py-6 px-10 rounded-3xl"
              style={{
                alignItems: 'normal',
                gridTemplateRows: 'auto auto 1fr'
              }}
            >
              <div className="frosted-glass-teal p-3 mb-3 rounded-xl">
                <div className="Icon grid h-max w-max">
                  <img
                    alt="home-pool"
                    className="select-none h-6 w-6"
                    src="/home-pool.svg"
                  />
                </div>
              </div>
              <div className="font-semibold text-lg text-white mb-2">
                Premissionless Liquidity
              </div>
              <div className="font-light text-[#c4d6ff] mb-5">
                Raydium enables the permissionless creation of liquidity                    pools and farms so projects can launch and bootstrap liquidity in a decentralized manner.
              </div>
            </div>
          </div>
        </div>
      </section>
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
  );
}
