import React, { useEffect } from "react";
import Content from "../../components/Content";
import { useSnapshot } from "valtio";
import state from "../../store";

const UniformFront = () => {
  const snap = useSnapshot(state);
  useEffect(() => {
    state.cameraPos = [0, 0, 0];
  }, []);
  return <Content titleArr={["CUSTOMISE", "YOUR", "UNIFORM"]} />;
};

export default UniformFront;
