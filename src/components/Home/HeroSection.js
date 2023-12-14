import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { ButtonContent } from "../global/boton/ButtonContent";

function HeroSection() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <>
      <div className="pic-wrapper">
        <figure
          className="pic-1"
          style={{ background: `url("${rpdata?.stock?.[5]}")` }}
        ></figure>
        <figure
          className="pic-2"
          style={{ background: `url("${rpdata?.stock?.[10]}")` }}
        ></figure>
        <figure
          className="pic-3"
          style={{ background: `url("${rpdata?.stock?.[1]}")` }}
        ></figure>
        <figure
          className="pic-4"
          style={{ background: `url("${rpdata?.stock?.[3]}")` }}
        ></figure>
        <div className="z-[4] relative w-4/5 mx-auto h-auto">
          <div className="w-full h-full pb-[100px] md:pt-[350px] pt-[390px] md:pb-[150px] flex flex-col justify-end items-center">
            <h1 className="text-white text-center">
              {rpdata?.dbSlogan?.[0].slogan}
            </h1>
            <p className="text-white text-center">{rpdata?.dbValues?.[1].description}</p>
            <div className="flex justify-center md:block">
              <ButtonContent />
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
