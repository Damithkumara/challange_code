import React from "react";
import { Element } from "react-scroll";
import Image from "next/image";
import OneWorkImg from "../public/images/1.jpeg";
import TwoWorkImg from "../public/images/2.jpg";
import ThirdWorkImg from "../public/images/3.jpg";
import FourthWorkImg from "../public/images/4.jpg";
import FiveWorkImg from "../public/images/5.jpg";
import SixWorkImg from "../public/images/6.jpg";

const workSample = [
  { imgs: [OneWorkImg, TwoWorkImg, ThirdWorkImg] },
  { imgs: [FourthWorkImg, FiveWorkImg, SixWorkImg] },
];

function Work() {
  return (
    <Element id="work" name="work">
      <div className="w-full my-20 h-auto flex flex-col justify-center items-center">
        <h2 className="text-black text-6xl font-bold text-center">
          All Creative Works
        </h2>
        {workSample.map((val, key) => {
          return (
            <div
              key={key}
              className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10 "
            >
              {val.imgs.map((val2, key2) => {
                return (
                  <div
                    key={key2}
                    className="rounden w-80 h-60 shadow-xl relative"
                  >
                    <Image
                      src={val2}
                      alt="one"
                      layout="fill"
                      objectFit="cover"
                      className="p-2 rounded cursor-pointer"
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </Element>
  );
}

export default Work;
