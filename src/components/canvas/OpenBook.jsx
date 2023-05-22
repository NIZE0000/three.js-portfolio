import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const OpenBook = () => {
  const book = useGLTF("./open_book/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor={"black"} />
      <primitive object={book.scene} scale={0.5} />
    </mesh>
  );
};

const OpenBookCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
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
