import React, { useEffect } from "react";
import ContentBack from "../../components/ContentBack";
import { useSnapshot } from "valtio";
import state from "../../store";

const UniformBack = () => {
  const snap = useSnapshot(state);

  useEffect(() => {
    state.cameraPos = [0, 3, 0];
  }, []);

  return <ContentBack titleArr={["CHOOSE", "YOUR", "NUMBER"]} />;
};

export default UniformBack;
