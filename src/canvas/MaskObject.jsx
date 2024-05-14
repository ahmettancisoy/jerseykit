import React, { useEffect, useRef } from "react";
import state from "../store";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Mask } from "@react-three/drei";
import { easing } from "maath";

const MaskObject = () => {
  const snap = useSnapshot(state);
  const ref = useRef();

  // useEffect(() => {
  //   if (snap.isMaskAnimate) state.isMaskAnimate = false;
  // }, [snap.isMaskAnimate]);

  useFrame((s, delta) => {
    if (snap.isMaskAnimate) {
      // ref.current.position.set(snap.maskPos);
      // ref.current.scale.set(snap.maskScale);

      ref.current.position.x = snap.maskPos[0];
      ref.current.position.y = snap.maskPos[1];
      ref.current.position.z = snap.maskPos[2];

      ref.current.scale.x = snap.maskPos[0];
      ref.current.scale.y = snap.maskPos[1];
      ref.current.scale.z = snap.maskPos[2];
    }

    if (!snap.isMaskAnimate) {
      const isAnimation = easing.damp3(
        ref.current.position,
        [0, 0, 0],
        0.25,
        delta
      );

      easing.damp3(ref.current.scale, [2, 2, 0], 0.25, delta);

      if (!isAnimation && snap.color !== snap.color2) {
        state.color2 = snap.color;
      }
    }
  });

  // useFrame((state, delta) => {
  //   // Update the circle's radius based on a growth rate
  //   const growthRate = 0.1; // Adjust this value as needed
  //   setCircleRadius((prevRadius) => prevRadius + growthRate * delta);

  //   // ... other code
  // });

  // useFrame((state, delta) => {
  // const isAnimation = easing.(
  //   ref.current.position,
  //   [-0.02, -0.05, 0.95],
  //   0.25,
  //   delta
  // );

  return (
    <Mask ref={ref} id={2} position={snap.maskPos} scale={snap.maskScale}>
      <circleGeometry args={[0.2, 64]} />
    </Mask>
  );
};

export default MaskObject;
