import React, { useRef, useEffect } from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame, createPortal } from "@react-three/fiber";
import { Decal, useGLTF, useTexture, RenderTexture, useMask, Text, PerspectiveCamera } from "@react-three/drei";
import state from "../store/index";
import * as THREE from 'three';

const Shirt = (props) => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shirt_baked.glb");
  const logoTexture = useTexture("/" + snap.logoDecal + ".png");
  const fullTexture = useTexture("/" + snap.fullDecal + ".png");
  const myMesh1 = useRef();
  const textRef = useRef()

  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  context.font = 'Bold 120px Arial';
  context.fillStyle = 'white';
  var textWidth = context.measureText(snap.backText).width;
  var x = (canvas.width - textWidth) / 2;
  context.fillText(snap.backText, x, 120);

// canvas contents will be used for a texture
  var texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;
  texture.center = new THREE.Vector2(0.5, 0.6);
  texture.rotation = Math.PI;
  texture.flipY = false;
 
  //const myMesh2 = useRef();

  // const stencil = useMask(1, true)
  // const stencil2 = useMask(2, true)

  // const lambert1Clone1 = materials.lambert1.clone()
  // lambert1Clone1.stencilWrite = true
  // lambert1Clone1.stencilFunc = stencil.stencilFunc
  // lambert1Clone1.stencilRef = stencil.stencilRef
  // lambert1Clone1.color.set(snap.color)

  // const lambert1Clone2 = materials.lambert1.clone()
  // lambert1Clone2.stencilWrite = true
  // lambert1Clone2.stencilFunc = stencil2.stencilFunc
  // lambert1Clone2.stencilRef = stencil2.stencilRef
  // lambert1Clone2.color.set(snap.color2)


  useFrame((state, delta) => {
    easing.dampC(textRef.current.color, snap.colorBack, 0.1, delta);
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta);
    
    easing.dampE(myMesh1.current.rotation, snap.cameraPos, 0.25, delta);
    //easing.dampE(myMesh2.current.rotation, snap.cameraPos, 0.25, delta);
  });  

  return (
    <group>
      <mesh
        ref={myMesh1}
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        {...props}
        dispose={null}
      >
        
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}
        {snap.isLogoTexture && (      
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
          />
        )}
        <Decal
            position={[0, 0, -0.15]}
            rotation={[0, 0, 0]}
            scale={0.3}
            //map={texture}
            
          ><meshPhysicalMaterial
            ref={textRef}
            transparent
            map={texture}
            map-flipY={false}
            map-anisotropy={16}
            roughness={0.8}
            //clearcoat={0.5}
            toneMapped={true}/>
        </Decal>
      </mesh>
      {/* <mesh
        ref={myMesh2}
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={lambert1Clone2}
        material-roughness={1}
        {...props}
        dispose={null}
        rotation={[0, 0, 0]}
        position={[0,0,0]}
      >
      </mesh> */}
    </group>
  );
};

export default Shirt;
