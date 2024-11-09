import React from "react";
import star from "./assets/allStar.png";
import mainImage from "./assets/main.png";
import play from "./assets/play.png";
import soundWave from "./assets/sound-wave.png";
import peopleImage from "./assets/people.png";
import brain from "./assets/brain.png";

const HomeWOAnimation = () => {
  return (
    <div className="grid grid-rows-[1fr_1fr] lg:grid-cols-[1fr_3fr_1fr] h-screen overflow-y-hidden">
      <div className="items-center justify-center hidden pl-28 lg:flex">
        <div className="flex flex-col gap-24">
          <div className="text-3xl">
            Start <span className="underline underline-offset-4">managing</span>{" "}
            your stress today with our{" "}
            <span className="font-bold ">advanced detection</span> and relief
            recommendations
          </div>
          <div className="flex items-center justify-center gap-8">
            <img className="h-[80px]" src={play} alt="" />
            <img className="h-[50px]" src={soundWave} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <div>
          <div className="flex items-center">
            <div className="text-5xl sm:text-8xl lg:text-9xl victoria">
              Your Mental
            </div>
            <img className="h-20 sm:h-32 lg:h-36" src={star} alt="" />
          </div>
          <div>
            <div className="text-5xl sm:text-8xl lg:text-9xl victoria">
              Health Matters
            </div>
          </div>
        </div>
        <img
          className=" h-[400px] relative top-14 sm:top-0 w-auto sm:h-[700px] lg:h-[760px]"
          src={mainImage}
          alt=""
        />
      </div>
      <div className="items-center justify-center hidden pr-20 lg:flex">
        <div className="flex flex-col gap-24">
          <div className="flex flex-col items-center justify-center ">
            <img className="w-auto h-3/5" src={brain} alt="" />
            <div className="relative text-2xl ">
              Amidst <span className="font-bold">chaos</span> in your{" "}
              <span className="font-bold text-pink-400">mind</span>, remember
              there’s always a <span className="font-bold">way out</span>
            </div>
          </div>
          <div className="text-2xl">
            <img className="h-full" src={peopleImage} alt="" />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="relative flex items-center bottom-10 sm:bottom-40 xl:hidden">
          <img className=" h-2/5 sm:h-3/5" src={brain} alt="" />
          <div className="relative text-2xl top-5 ">
            Amidst <span className="font-bold">chaos</span> in your{" "}
            <span className="font-bold text-pink-400">mind</span>, remember
            there’s always a <span className="font-bold">way out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWOAnimation;
