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
        { autoAlpha: 0, x: "200%", stagger: 0.2 },
        "frame1+=1"
      )
      .from(".heading-1-1", { autoAlpha: 0, y: "-50%" }, "frame1+=2")
      .to(".heading-1-1", { autoAlpha: 0, y: "50%" }, "frame1+=4")
      .from(".heading-1-2", { autoAlpha: 0, y: "-50%" }, "frame1+=4.2")
      .to(".heading-1-2", { autoAlpha: 0, y: "50%" }, "frame1+=6")
      .from(".heading-1-3", { autoAlpha: 0, y: "-50%" }, "frame1+=6.2")
      .to(".heading-1-3", { autoAlpha: 0, y: "50%" }, "frame1+=8")
      .from(".heading-1-4", { autoAlpha: 0, y: "-50%" }, "frame1+=8.2")
      .to(".heading-1-4", { autoAlpha: 0, y: "50%" }, "frame1+=10")
      .from(".heading-1-5", { autoAlpha: 0, y: "-50%" }, "frame1+=10.2")
      // .to(".heading-1-5", { autoAlpha: 0, y: "50%" }, "frame1+=12")
      .to(".frame-1", { autoAlpha: 0, x: "50%" }, "frame1+=14");
    tl.addLabel("frame2", "frame1+=14.5")
      .from(".headline1", { autoAlpha: 0, x: "-100%" }, "frame2")
      .from(".vernon-printer", { autoAlpha: 0, x: "-200%" }, "frame2+=.5")
      .from(
        ".vernon-printer-info",
        { autoAlpha: 0, y: "-50%", stagger: 1 },
        "frame2+=1"
      )
      .to(".frame-2", { autoAlpha: 0, x: "100%" }, "frame2+=6");
    // .to(".vernon-printer", { autoAlpha: 0, x: "-100%" }, "frame2+=3");
    return () => {
      tl.pause();
    };
  }, []);
  useLayoutEffect(() => {
    // tl.play();
  }, []);
  return (
    <div className="h-[400px] w-full overflow-hidden sticky top-[63px] left-0 -z-10">
      <div className="frame-1 w-full h-full absolute">
        <img
          className="ps-logo absolute w-[100px] lg:w-[100px] h-auto top-[5%] left-[50%] translate-x-[-50%]"
          src={psLogo}
          alt="Vernon bach ink jet printer"
        />
        <img
          className="vernon-logo supplier-logo absolute w-[250px] h-auto top-[40%] left-[20%] translate-x-[-50%]"
          src={vernonLogo}
          alt="Vernon bach ink jet printer"
        />
        <img
          className="btmark-logo supplier-logo absolute w-[200px] h-auto top-[38%] left-[50%] translate-x-[-50%]"
          src={btmarkLogo}
          alt="Vernon bach ink jet printer"
        />
        <img
          className="mycoding-logo supplier-logo absolute w-[100px] h-auto top-[33%] left-[75%] translate-x-[-50%]"
          src={mycodingLogo}
          alt="Vernon bach ink jet printer"
        />
        <h2 className="heading-1-1 text-xl md:text-2xl lg:text-4xl uppercase italic font-bold text-center tracking-wide absolute w-full top-[70%] invisible">
          CIJ Ink Jet Printer
        </h2>
        <h2 className="heading-1-2 text-xl md:text-2xl lg:text-4xl uppercase italic font-bold text-center tracking-wide absolute w-full top-[70%] invisible">
          Thermal Ink Jet Printer
        </h2>
        <h2 className="heading-1-3 text-xl md:text-2xl lg:text-4xl uppercase italic font-bold text-center tracking-wide absolute w-full top-[70%] invisible">
          Hand-held Printers
        </h2>
        <h2 className="heading-1-4 text-xl md:text-2xl lg:text-4xl uppercase italic font-bold text-center tracking-wide absolute w-full top-[70%] invisible">
          Conveyors & rewinders
        </h2>
        <h2 className="heading-1-5  text-primary text-xl md:text-4xl lg:text-5xl uppercase italic font-bold text-center tracking-tight absolute w-full top-[70%] invisible">
          Complete bach coding solution
        </h2>
      </div>

      <div className="frame-2 absolute w-full h-full">
        <h2 className="headline1 text-xl md:text-2xl lg:text-4xl uppercase italic font-bold text-center tracking-wide absolute w-full top-[5%] invisible">
          <span className="text-neutral text-lg md:text-xl lg:text-2xl">
            Sole distributor of
          </span>
          <br /> Vernon Bach Hubei Tech. Ltd
        </h2>
        <img
          className="vernon-printer absolute w-[250px] h-auto top-[30%] left-[35%] translate-x-[-50%]"
          src={vernonBachPrinter}
          alt="Vernon bach ink jet printer"
        />
        <h3 className="vernon-printer-info text-lg md:text-xl lg:text-2xl capitalize tracking-wide absolute w-full top-[40%] left-[50%] invisible">
          Technology from GERMANY
        </h3>
        <h3 className="vernon-printer-info text-lg md:text-xl lg:text-2xl capitalize tracking-wide absolute w-full top-[48%] left-[50%] invisible">
          3 years warranty
        </h3>
        <h3 className="vernon-printer-info text-lg md:text-xl lg:text-2xl capitalize tracking-wide absolute w-full top-[56%] left-[50%] invisible">
          Reliable and trouble-free
        </h3>
        <h3 className="vernon-printer-info text-lg md:text-xl lg:text-2xl capitalize tracking-wide absolute w-full top-[64%] left-[50%] invisible">
          Hi-speed application
        </h3>
      </div>
    </div>
  );
}
