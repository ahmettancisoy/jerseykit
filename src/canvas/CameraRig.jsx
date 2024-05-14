import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { snapshot, useSnapshot } from "valtio";
import state from "../store/index";

const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    const isBreakPoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    easing.damp3(state.camera.position, [0.3, 0, 2], 0.25, delta);

    easing.dampE(group.current.rotation, [0, 0.2, 0], 0.25, delta); // ort +-1.6 yanlar 3 arka
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
