import { Billboard, CameraControls, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { CapsuleCollider, RigidBody, vec3 } from "@react-three/rapier";
import { isHost } from "playroomkit";
import { useEffect, useRef, useState } from "react";
import { CharacterSoldier } from "./CharacterSoldier";
// const MOVEMENT_SPEED = 202;
// const FIRE_RATE = 380;
// export const WEAPON_OFFSET = {
//   x: -0.2,
//   y: 1.4,
//   z: 0.8,
// };