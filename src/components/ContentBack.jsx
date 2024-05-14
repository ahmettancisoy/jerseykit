import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store/index";

const ContentBack = ({ titleArr }) => {
  const snap = useSnapshot(state);
  const [nextHover, setNextHover] = useState(false);
  const [initial, setInitial] = useState(true);
  const [number, setNumber] = useState("");

  const variants = {
    hover: {
      x: [-225, 0],
    },
    initial: {
      x: 225,
    },
    exit: {
      x: -225,
      transition: {
        ease: [0.1, 0.5, 0.1, 1],
      },
    },
  };

  const handleOver = () => {
    setNextHover(true);
  };

  const handleLeave = () => {
    setNextHover(false);
  };

  return (
    <div className="absolute flex w-full pt-4 justify-end">
      <div className="flex flex-col w-1/2 min-w-min">
        <div className="font-roboto text-center text-white p-2 font-bold text-6xl">
          <div className="block relative overflow-hidden text-transparent text-stroke w-full">
            {titleArr[0].split("").map((c, i) => (
              <motion.div
                key={"1" + i}
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                exit={{
                  y: 100,
                  transition: {
                    delay: i * 0.03 + 0.001,
                    ease: [1.01, 0, 0.71, 0],
                    duration: 0.5,
                  },
                }}
                transition={{
                  delay: i * 0.03 + 0.001,
                  duration: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="inline-block"
              >
                {c}
              </motion.div>
            ))}
          </div>
          <div className="inline-block mx-2 overflow-hidden">
            {titleArr[1].split("").map((c, i) => (
              <motion.div
                key={"2" + i}
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                exit={{
                  y: 100,
                  transition: {
                    delay: i * 0.03 + 0.001,
                    ease: [1.01, 0, 0.71, 0],
                    duration: 0.5,
                  },
                }}
                transition={{
                  delay: i * 0.03 + 0.001,
                  ease: [0, 0.71, 0.2, 1.01],
                  duration: 0.5,
                }}
                className="inline-block"
              >
                {c}
              </motion.div>
            ))}
          </div>
          <div className="inline-block mx-2 overflow-hidden text-transparent text-stroke">
            {titleArr[2].split("").map((c, i) => (
              <motion.div
                key={"3" + i}
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                exit={{
                  y: 100,
                  transition: {
                    delay: i * 0.03 + 0.001,
                    duration: 0.5,
                    ease: [1.01, 0, 0.71, 0],
                  },
                }}
                transition={{
                  delay: i * 0.03 + 0.001,
                  ease: [0, 0.71, 0.2, 1.01],
                  duration: 0.5,
                }}
                className="inline-block"
              >
                {c}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="p-2 text-center self-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.7 }}
            className="pt-6 pb-4 text-white"
          >
            NUMBER :
          </motion.div>
          <motion.div
            className="justify-center gap-3 w-96 overflow-hidden"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            exit={{ scaleX: 0, opacity: 0.5 }}
          >
            <input
              className="rounded-full focus:outline-none h-10 w-48 text-center px-2 text-gray-500 font-bold"
              type="text"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
                state.backText = e.target.value;
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.7 }}
            className="pt-6 pb-4 text-white font-roboto"
          >
            COLOR :
          </motion.div>
          <div className="pb-6 flex flex-wrap justify-center gap-4 max-w-sm">
            {snap.colorsBack.map((c, i) => (
              <div key={i} className="transition-all w-8 h-8 hover:scale-110">
                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  exit={{ scale: 0 }}
                  transition={{
                    delay: 0.2 + (i * 0.02 + 0.01),
                    duration: 0.5,
                    ease: [1, 0.1, 0.5, 0.1],
                  }}
                  className={
                    "w-full h-full rounded-full ring-white cursor-pointer " +
                    (snap.colorBack == c ? "ring-4" : "ring-2")
                  }
                  style={{
                    backgroundColor: c,
                  }}
                  onClick={() => (state.colorBack = c)}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center py-6">
            <Link to="/">
              <div
                className={
                  "w-52 h-12 text-base font-bold transition-all duration-300 hover:scale-[1.15]"
                }
                onMouseOver={handleOver}
                onMouseLeave={handleLeave}
                style={{
                  color: nextHover ? snap.color : "#fff",
                }}
              >
                <div className="absolute rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 224 }}
                    exit={{ width: 0, transition: { duration: 0.1 } }}
                    transition={{
                      ease: [1, 0.1, 0.5, 0.1],
                      duration: 0.5,
                      delay: initial ? 0.3 : 0,
                    }}
                    className="h-14 absolute transition-colors duration-500"
                    style={{ backgroundColor: snap.color }}
                  />
                  <motion.div
                    variants={variants}
                    initial={{ x: -225 }}
                    animate={nextHover ? "hover" : "initial"}
                    exit={"exit"}
                    transition={{
                      ease: [1, 0.1, 0.5, 0.1],
                      duration: initial ? 0.5 : 0.3,
                      delay: initial ? 0.3 : 0,
                    }}
                    className="absolute rounded-full w-56 h-14 bg-white"
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 224 }}
                    transition={{ duration: 0.5 }}
                    className="justify-center items-center flex h-14 overflow-hidden"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.2,
                        delay: initial ? 0.7 : 0,
                        opacity: { duration: 0 },
                      }}
                      exit={{ x: -15, opacity: 0 }}
                      onAnimationComplete={(definition) => setInitial(false)}
                      className="absolute w-56"
                    >
                      NEXT STEP
                    </motion.div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 224 }}
                  exit={{ width: 0, transition: { duration: 0.1 } }}
                  transition={{ ease: [1, 0.1, 0.5, 0.1], duration: 0.5 }}
                  className="absolute h-14 overflow-hidden"
                >
                  <div className="outline outline-[3px] outline-offset-[-3px] rounded-full absolute outline-white w-56 h-14" />
                </motion.div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBack;
