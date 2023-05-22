import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const OpenBook = () => {
  const book = useGLTF("./open_book/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.4} groundColor={"black"} />
      {/* <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={512}
      /> */}
      <primitive object={book.scene} scale={1} position={[0,-3,0]}/>
    </mesh>
  );
};

const OpenBookCanvas = () => {
  return (
    <Canvas className="z-0"
      frameloop="demand"
      shadows
      camera={{ position: [0, 0, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <OpenBook />
      </Suspense>
      <Preload />
    </Canvas>
  );
};

export default OpenBookCanvas;
