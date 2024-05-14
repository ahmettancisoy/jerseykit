import { proxy } from "valtio";

const state = proxy({
  cameraPos: [0, 0, 0],
  color: "#0284C7",
  colorBack: "#f8fafc",
  colors: ["#0284C7", "#E11D48", "#D97706", "#65A30D", "#7C3AED", "#52525B"],
  colorsBack: ["#f8fafc", "#fcd34d", "#111827"],
  decals: ["threejs", "react"],
  isLogoTexture: false,
  isFullTexture: false,
  logoDecal: "threejs",
  fullDecal: "react",
  backText: "",
  delayOnInit: false,
});

export default state;
