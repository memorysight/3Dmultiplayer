import { Loader, PerformanceMonitor, SoftShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Physics } from "@react-three/rapier";
import { Suspense, useState } from "react";
import { Experience } from "./components/Experience";
import { Leaderboard } from "./components/Leaderboard";

function App() {
  
  return (
    <>
      <Loader />
      <Leaderboard />
      <Canvas
        shadows
        camera={{ position: [0, 30, 0], fov: 30, near: 2 }}
        // optimization to increase performance on retina/4k devices
      >
        <color attach="background" args={["#242424"]} />
  
  
            <Experience  />
        
      </Canvas>
    </>
  );
}

export default App;