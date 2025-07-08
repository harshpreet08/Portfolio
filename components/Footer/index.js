import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-20 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold pixelify-sans">Contact.</h1>
          <div className="mt-3">
            <h1 className="mt-2 text-l laptop:text-xl w-full laptop:w-3/5 text-gray-500">
              Whether you want to chat about backend systems, cloud tech, or the
              latest in Formula 1, I&apos;m always open to a good conversation.
            </h1>
            {/* <div className="mt-5">
              <Button
                type="secondary"
                onClick={() =>
                  window.open("https://calendly.com/sabrinarosebutton/30min")
                }
              >
                SCHEDULE A ONE ON ONE
              </Button>
            </div> */}
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="https://github.com/harshpreet08">
          <a className="underline underline-offset-1">Harshpreet Singh</a>
        </Link>
        , who used{" "}
        <Link href="https://www.chetanverma.com/">
          <a className="underline underline-offset-1">Chetan Verma</a>
        </Link>
        &apos;s template as a boilerplate.
      </h1>
    </>
  );
};

export default Footer;
