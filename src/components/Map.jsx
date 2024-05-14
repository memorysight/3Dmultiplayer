import { useGLTF } from "@react-three/drei";
// import { RigidBody } from "@react-three/rapier";
// import { useEffect } from "react";


function Map(){

  const map = useGLTF("models/map.glb");

  return (
    <>
     <primitive object={map.scene} />
    </>
   
  )


}
useGLTF.preload("models/map.glb");

export default Map;