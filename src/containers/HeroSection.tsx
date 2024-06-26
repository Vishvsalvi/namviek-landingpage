import ListViewImage from "@/images/list-view.png";
import Image from "next/image";
import { Spotlight } from "@/components/ui/Spotlight";
import { fontInter } from "@/utils/fonts";
import { HoverBorderGradient } from "@/components/ui/HoverBorderGradient";
import Heading1 from "@/components/Heading1";
import AnimElement from "@/components/ui/AnimElement";
import Link from "next/link";
import '@/styles/hero.css'
import GithubStar from "@/components/ui/GithubStar";

export default function HeroSection() {
  return <div id="hero" className="hero">
    <div className="pt-[15rem] pb-[5rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-dot-white/[0.2] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className=" p-4 max-w-7xl  mx-auto relative z-10 w-full pt-20 md:pt-0">
        <Heading1 delay={1} duration={6}>
          <span className={`${fontInter.className} tracking-tighter font-semibold`}>
            {"Don't mind the cost"}
          </span>
          <br />
          <span className={`${fontInter.className} tracking-tighter font-semibold`}>
            Just do the work
          </span>
        </Heading1>
        <AnimElement>
          <p className={`${fontInter.className} text-sm lg:text-lg tracking-tighter mt-4 font-normal text-para1 text-gray-400 max-w-lg text-center mx-auto`}>The open-source task manager for super tiny teams
            with a lot of built-in features</p>

          <div className="flex justify-center mt-8">
            <HoverBorderGradient
              containerClassName="rounded-xl"
              as="button"
              className="bg-black text-white flex items-center space-x-2"
            >
              <Link className="no-underline" href="#download">
                <span>Clone it now</span>
              </Link>
            </HoverBorderGradient>
          </div>
          <GithubStar />
        </AnimElement>
      </div>
    </div>
    <AnimElement
      className="">
      <div className="hero-slider-container">
        <Image className=" w-[1216px] mx-auto" src={ListViewImage} alt="List view image" />
        {/* <div className="absolute top-[35%] z-40 left-1/2 -translate-x-1/2 rounded-xl border border-gray-500/50 px-8 py-6 text-white backdrop-blur-sm text-xl uppercase"></div> */}
      </div>
    </AnimElement>
  </div>
}
