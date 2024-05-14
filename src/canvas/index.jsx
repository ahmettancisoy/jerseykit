import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";
import MaskObject from "./MaskObject";

const CanvasModel = ({ children }) => {
  return (
    <div className="w-full h-full bg-slate-600 absolute overflow-hidden">
      {children}
      <Canvas shadows camera={{ position: [0, 0, 0], fov: 25 }}>
        <spotLight position={[0, 0, 1]} />
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <CameraRig>
          <Backdrop />
          {/* <MaskObject /> */}
          <Center>
            <Shirt />
          </Center>
        </CameraRig>
      </Canvas>
    </div>
  );
};

export default CanvasModel;
