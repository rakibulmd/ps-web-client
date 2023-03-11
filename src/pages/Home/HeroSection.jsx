import gsap from "gsap";
import { useEffect, useLayoutEffect } from "react";
import vernonBachPrinter from "../../asset/images/vernonbach.png";
import psLogo from "../../asset/images/psLogo.png";
import vernonLogo from "../../asset/images/vernonLogo.png";
import btmarkLogo from "../../asset/images/btmarkLogo.png";
import mycodingLogo from "../../asset/images/mycodingLogo.png";

export default function HeroSection() {
  const tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 0,
    force3D: false,
    defaults: { ease: "easeInOut" },
  });
  // function animateLinks() {
  //   // eslint-disable-next-line no-unused-expressions
  // }
  useEffect(() => {
    tl.addLabel("frame1")
      .from(
        ".supplier-logo",
        { autoAlpha: 0, x: "100%", stagger: 0.2 },
        "frame1+=1"
      )
      .from(".heading-1", { autoAlpha: 0, x: "-50%" }, "frame1+=2")
      .to(".frame-1", { autoAlpha: 0, x: "50%" }, "frame+=3");
    tl.addLabel("frame2", "frame1+=5.5")
      .from(".headline1", { autoAlpha: 0, x: "-100%" }, "frame2")
      .from(".vernon-printer", { autoAlpha: 0, x: "100%" }, "frame2+=.5")
      .to(
        ".headline1 , .vernon-printer",
        { autoAlpha: 0, x: "100%" },
        "frame2+=3"
      );
    // .to(".vernon-printer", { autoAlpha: 0, x: "-100%" }, "frame2+=3");
    return () => {
      // tl.pause();
    };
  }, []);
  useLayoutEffect(() => {
    tl.play();
  }, []);
  return (
    <div className="relative  text-primary min-h-[60vh] w-screen overflow-hidden">
      <div className="frame-1 w-full h-full absolute">
        <h2 className="heading-1 text-xl md:text-2xl lg:text-5xl uppercase italic font-extrabold text-center tracking-wide absolute w-full top-[80%] invisible">
          Complete bach coding solution <br /> at one place!
        </h2>
        <img
          className="ps-logo absolute w-[150px] lg:w-[200px] h-auto top-[10%] left-[50%] translate-x-[-50%]"
          src={psLogo}
          alt="Vernon bach ink jet printer"
        />
        <img
          className="vernon-logo supplier-logo absolute w-[250px] h-auto top-[60%] left-[20%] translate-x-[-50%]"
          src={vernonLogo}
          alt="Vernon bach ink jet printer"
        />
        <img
          className="btmark-logo supplier-logo absolute w-[200px] h-auto top-[58%] left-[50%] translate-x-[-50%]"
          src={btmarkLogo}
          alt="Vernon bach ink jet printer"
        />
        <img
          className="mycoding-logo supplier-logo absolute w-[100px] h-auto top-[53%] left-[75%] translate-x-[-50%]"
          src={mycodingLogo}
          alt="Vernon bach ink jet printer"
        />
      </div>

      <h2 className="headline1 text-xl md:text-2xl lg:text-4xl uppercase italic font-bold text-center tracking-wide absolute w-full top-[20%] invisible">
        Sole distributor of <br /> Vernon Bach Hubei Tech. Ltd
      </h2>
      <img
        className="vernon-printer absolute w-[200px] h-auto top-[50%] left-[50%] translate-x-[-50%]"
        src={vernonBachPrinter}
        alt="Vernon bach ink jet printer"
      />
    </div>
  );
}
