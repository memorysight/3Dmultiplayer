// import { Environment, OrbitControls } from "@react-three/drei";
// import {
//   Joystick,
//   insertCoin,
//   isHost,
//   myPlayer,
//   onPlayerJoin,
//   useMultiplayerState,
// } from "playroomkit";
// import { useEffect, useState } from "react";
// import { Bullet } from "./Bullet";
// import { BulletHit } from "./BulletHit";
// import { CharacterController } from "./CharacterController";
import  Map  from "./Map";
import { Environment, OrbitControls } from "@react-three/drei";

function Experience(){

  return (

    <>
    <OrbitControls />
    <Map/>
    <Environment preset="sunset" />
    </>
  )


}

export default Experience;