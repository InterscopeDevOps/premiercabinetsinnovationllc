import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import TransparentHeader from "../components/global/TransparentHeader";
import BaseLayout from "../components/global/BaseLayout";
import ValuesOne from "../components/values/Values_1";
import BlockPrincipal from "../components/block/Block_8";
import BlockSecondary from "../components/block/Block_1";

function About() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <BaseLayout PageName="About">
      <div className="md:max-w-full w-full">
        <TransparentHeader
          headertitle="About"
          Subheader="About"
          bgimg={`${rpdata?.stock?.[8]}`}
        />
        <BlockPrincipal
          title={'a little about us'}
          subtitle2={rpdata?.dbSlogan?.[3]?.slogan}
          text={rpdata?.dbAbout?.[0]?.text}
          image1={rpdata?.stock?.[9]}
          image2={rpdata?.stock?.[13]}
          image3={rpdata?.stock?.[10]}
          listAbout={true}
        />
        <ValuesOne
          image={rpdata?.stock?.[15]}
          image2={rpdata?.stock?.[10]} />

        <BlockSecondary
          title={rpdata?.dbSlogan?.[2]?.slogan}
          text={rpdata?.dbAbout?.[1]?.text}
          image={rpdata?.stock?.[6]}

        />
      </div>
    </BaseLayout>
  );
}

export default About;
